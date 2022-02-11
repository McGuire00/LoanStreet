# LoanStreet

# Installing and Running

- Run "npm install" to install of the necessary dependencies to run the application
- Run "node migration.js" to build Loan database

  - To fill database with dummy data run "node seed.js"

- Now, run the web server using "node app.js" ("npm run DevStart" to run with nodemon for live updates). Visit http://localhost:3000/ and you will see a message saying "Hello"

## Database Table Properties

- Loan
  - id - Integer, primary key, required
  - amount - Integer, required
  - interest_rate - Integer, required
  - length_of_loan_in_months - Integer, required
  - monthly_payment_amount - Integer, required

## Route Paths and Functionality

**/api/loans**

- GET

  - Returns a 200 response containing all saved loans

- POST
  - Creates a new loan with the information from the body of the requests and saves it to the database. Returns a 201 response with the newly-created loan as a repsonse

**/api/loans/:loanid**

- GET

  - Returns a 200 response containing the loan with the supplied loan ID on the loan property of the response body
  - if a loan with the supplied loan ID doesn't exist, returns a 404 response.

- PUT

  - Updates the loan with the specfified loan ID using the information from the loan property of the request body and saves it to the database. Returns a 200 response with the updated loan on the loan property of the response body

- DELETE
  - Deletes the loan with the supplied loan ID from the databse, returns a 204 response.
  - if a series with the supplied loan ID doesn't exist, returns a 404 response
