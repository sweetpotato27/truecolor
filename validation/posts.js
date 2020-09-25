// validations/posts.js

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {}
    
    data.title = validText(data.title) ? data.title : '';
    data.body = validText(data.body) ? data.body : '';
    data.imageUrl = validText(data.imageUrl) ? data.imageUrl : '';

    if (Validator.isEmpty(data.body)) {
        errors.text = 'Body is required';
    }
    

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}