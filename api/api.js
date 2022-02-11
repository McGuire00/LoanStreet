const express = require("express");

// router for /api/loans
const loanRouter = require("./loans");

const apiRouter = express.Router();

// api/loans/ middleware
apiRouter.use("/loans", loanRouter);

module.exports = apiRouter;
