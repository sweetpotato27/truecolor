// validations/posts.js

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    let errors = {}
    
    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : '';
    data.imageUrl = validText(data.imageUrl) ? data.imageUrl : '';

    if (!Validator.isLength(data.title, { min: 5, max: 140 })) {
        errors.text = 'Post must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.title)) {
        errors.text = 'Title is required';
    }
    if (Validator.isEmpty(data.description)) {
        errors.text = 'Description is required';
    }
    if (Validator.isEmpty(data.imageUrl)) {
        errors.text = 'Image is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}