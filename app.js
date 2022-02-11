const express = require("express");
require("dotenv").config();

const apiRouter = require("./api/api");

// instance of express app
const app = express();

// json middleware used to parse JSON bodies
app.use(express.json())


app.use("/api", apiRouter)

app.get("/", (req, res) => {
  res.send("Welcome");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
