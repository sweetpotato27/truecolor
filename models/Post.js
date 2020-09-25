// models/Post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model('post', PostSchema);