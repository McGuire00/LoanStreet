const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./database.sqlite");

let loanId;

db.get(
  "SELECT name FROM sqlite_master WHERE type='table' AND name='Loan'",
  (error, table) => {
    if (error) {
      throw new Error(error);
    }
    if (table) {
      db.serialize(function () {
        db.run(
          "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ('10000', '5%', '36', '500')"
        );
        db.run(
          "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ('20000', '6%', '48', '600')"
        );
        db.run(
          "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ('30000', '7%', '60', '700')"
        );
        db.run(
          "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ('40000', '8%', '72', '800')"
        );
        db.run(
          "INSERT INTO Loan (amount, interest_rate, length_of_loan_in_months, monthly_payment_amount) VALUES ('50000', '9%', '84', '900')",
          function (error) {
            if (error) {
              throw new Error(error);
            }
          }
        );
      });
    }
  }
);
