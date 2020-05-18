const Validator = require("validator");
const isEmpty = require("is-empty");

const registrationValidation = data => {
  
    let errors = {};

  // Change empty fields to empty string to use Validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Check validity of name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Check validity of email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Check validity of password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 14, max: 30 })) {
    errors.password = "Password must be at least 14 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = registrationValidation;