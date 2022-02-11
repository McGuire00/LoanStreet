const express = require("express");
const sqlite3 = require("sqlite3");
const isLoanValid = require("../util/validate");

const databaseConnection = process.env.TEST_DATABASE || "./database.sqlite";
const db = new sqlite3.Database(databaseConnection);

// api/loans
const loanRouter = express.Router();

loanRouter.param("loanId", (req, res, next, loanId) => {
  const sql = "SELECT * FROM Loan WHERE Loan.id = $loanId";
  const values = { $loanId: loanId };
  db.get(sql, values, (error, loan) => {
    if (error) {
      next(error);
    } else if (loan) {
      req.loan = loan;
      next();
    } else {
      res.sendStatus(404);
    }
  });
});

loanRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Loan", (error, loans) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ loans: loans });
    }
  });
});

loanRouter.post("/", (req, res, next) => {
  const amount = req.body.amount;
  const interestRate = req.body.interestRate;
  const lengthOfLoan = req.body.lengthOfLoan;
  const monthlyPaymentAmount = req.body.monthlyPaymentAmount;

  if (!amount || !interestRate || !lengthOfLoan || !monthlyPaymentAmount) {
    return res.sendStatus(400);
  }

  if (
    !isLoanValid(amount) ||
    !isLoanValid(interestRate) ||
    !isLoanValid(lengthOfLoan) ||
    !isLoanValid(monthlyPaymentAmount)
  ) {
    return res.sendStatus(400);
  }

  const sql =
    "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ($amount, $interestRate, $lengthOfLoan, $monthlyPaymentAmount)";
  const values = {
    $amount: amount,
    $interestRate: interestRate,
    $lengthOfLoan: lengthOfLoan,
    $monthlyPaymentAmount: monthlyPaymentAmount,
  };

  db.run(sql, values, function (error) {
    if (error) {
      next(error);
    } else {
      db.get(
        `SELECT * FROM Loan WHERE Loan.id = ${this.lastID}`,
        (error, loan) => {
          res.status(201).json({ loan: loan });
        }
      );
    }
  });
});

loanRouter.get("/:loanId", (req, res, next) => {
  res.json({ loan: req.loan });
});

loanRouter.put("/:loanId", (req, res, next) => {
  const amount = req.body.amount;
  const interestRate = req.body.interestRate;
  const lengthOfLoan = req.body.lengthOfLoan;
  const monthlyPaymentAmount = req.body.monthlyPaymentAmount;

  if (!amount || !interestRate || !lengthOfLoan || !monthlyPaymentAmount) {
    return res.sendStatus(400);
  }

  if (
    !isLoanValid(amount) ||
    !isLoanValid(interestRate) ||
    !isLoanValid(lengthOfLoan) ||
    !isLoanValid(monthlyPaymentAmount)
  ) {
    return res.sendStatus(400);
  }

  // amount, interest_rate, length_of_loan_in_months, monthly_payment_amount
  const sql =
    "UPDATE LOAN SET amount = $amount, interest_rate = $interestRate, length_of_loan_in_months = $lengthOfLoan, monthly_payment_amount = $monthlyPaymentAmount WHERE Loan.id = $loanId";
  const values = {
    $amount: amount,
    $interestRate: interestRate,
    $lengthOfLoan: lengthOfLoan,
    $monthlyPaymentAmount: monthlyPaymentAmount,
    $loanId: req.params.loanId,
  };

  db.run(sql, values, (error) => {
    if (error) {
      next(error);
    } else {
      db.get(
        `SELECT * FROM Loan WHERE Loan.id = ${req.params.loanId}`,
        (error, loan) => {
          res.status(200).json({ loan: loan });
        }
      );
    }
  });
});

loanRouter.delete("/:loanId", (req, res, next) => {
  const sql = "DELETE FROM Loan WHERE Loan.id = $loanId";
  values = {
    $loanId: req.params.loanId,
  };

  db.run(sql, values, (error) => {
    if (error) {
      next(error);
    } else {
      res.json({ success: true, msg: "Entry has been deleted successfully" });
    }
  });
});

module.exports = loanRouter;
