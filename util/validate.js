const isLoanValid = (value) => {
  /*
    Basic validation:
        only want numbers posted to our database
  */
  if (isNaN(value)) {
    return false;
  }
  return true;
};

// console.log(isLoanValid(5));
// console.log(isLoanValid(100.0));
// console.log(isLoanValid("Deron"));
// console.log(isLoanValid("5%"));
// console.log(isLoanValid(0));

module.exports = isLoanValid;
