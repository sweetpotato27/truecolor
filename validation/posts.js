// validations/posts.js

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {}
    
    data.description = validText(data.description) ? data.description : '';

    if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
        errors.text = 'Post must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}