// login.js
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
    // let create an javascript object named 'errors'
    let errors = {};

    // we can use our custom validText function to validate the incoming data.email and data.password
    // if they do not pass the validation we simply set data.email and data.password to and empty string
    // a ternary operator is a cute way to accomplish this logic 
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

    // while validText does one kind of validation, we have access to more specific validations.  
    // For example:
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    //  Finally we return a javascript object with the keys: errors and isValid.  errors is connected to the errors javascript object
    //  and isValid is a boolean value.
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};