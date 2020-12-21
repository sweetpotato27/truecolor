const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProspectSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('prospects', ProspectSchema);