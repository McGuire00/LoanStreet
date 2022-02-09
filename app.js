const express = require("express");
require("dotenv").config();
const connectToDB = require("./util/mongoose");

const app = express();

// connects to mongoose database
connectToDB();


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
