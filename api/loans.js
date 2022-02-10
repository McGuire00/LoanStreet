const express = require("express");
const sqlite3 = require("sqlite3");

const databaseConnection = process.env.TEST_DATABASE || "./database.sqlite";
const db = new sqlite3.Database(databaseConnection);

// api/loans
const loanRouter = express.Router();

loanRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Loan", (error, loans) => {
    if (error) {
      next(error);
    } else { 
      res.status(200).json({ loans: loans });
    }
  });
});

module.exports = loanRouter;
