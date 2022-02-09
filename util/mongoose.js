const mongoose = require("mongoose");

require("dotenv").config();

function connectToDB() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = connectToDB;
