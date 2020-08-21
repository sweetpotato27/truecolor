const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');

require('../../config/passport')(passport);

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No Posts Found'}));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({user: req.params.user_id})
        .then(posts => res.json(posts))
        .catch(err =>
            res.status(404).json({ nopostsfound: 'No posts found from that user' })
        );
});

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: 'No post found with that ID'})
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req);
        console.log("creating post");
        const { errors, isValid } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            text: req.body.text,
            user: req.user.id
        });

        newPost.img = {
            data: fs.readFileSync(imgPath),
            contentType: 'image/png'
        }

        newPost.img.contentType = 'image/png';

        newPost.save()
            .then(post => res.json(post))
            .catch(err => console.log(err));

            console.log('img saved to mongo')
    }
);
//we will want to create an authenticated route to delete posts, and perhaps some additional routes to add comments or likes.

module.exports = router;