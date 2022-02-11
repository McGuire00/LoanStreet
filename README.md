# LoanStreet

# Installing and Running

- run "npm install" to install of the necessary dependencies to run the application
- run "node migration.js" to build Loan database

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

**/api/loans/:loanid**

- GET

  - Returns a 200 response containing the loan with the supplied loan ID on the loan property of the response body
  - if a loan with the supplied loan ID doesn't exist, returns a 404 response.

- PUT
  - Updates the loan with the specfified loan ID using the information from the loan property of the request body and saves it to the database. Returns a 200 response with the updated loan on the loan property of the response body

- DELETE
    - Deletes the loan with the supplied loan ID from the databse, returns a 204 response.
    - if a series with the supplied loan ID doesn't exist, returns a 404 response
