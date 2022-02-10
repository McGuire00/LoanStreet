const express = require("express");
require("dotenv").config();

const app = express();


app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
