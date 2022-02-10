const sqlite3 = require("sqlite3")

const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
     db.run(
       "CREATE TABLE IF NOT EXISTS `Loan` ( " +
         "`id` INTEGER NOT NULL, " +
         "`amount` INTEGER NOT NULL, " +
         "`interest_rate` INTEGER NOT NULL, " +
         "`length_of_loan_in_months` INTEGER NOT NULL, " +
         "`monthly_payment_amount` INTEGER NOT NULL, " +
         "PRIMARY KEY(`id`) )"
     );
}) 