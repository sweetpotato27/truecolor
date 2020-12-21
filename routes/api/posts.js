const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');

require('../../config/passport')(passport);

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/posts');

router.get('/', (req, res) => {
    // console.log(res);
    // res.setHeader('Cache-Control', 'public, max-age=864000');
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ nopostsfound: 'No Posts Found'}));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({'userId': req.params.user_id}, (err, posts) => {
        if (err) {
        } else {
            return res.json(posts);
        }
    }).sort({ date: -1 });
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
        const { errors, isValid } = validatePostInput(req.body);
        if (!isValid) {
            console.log(errors);
            return res.status(400).json(errors);
        }
        const newPost = new Post({
            title: req.body.title,
            body: req.body.body,
            imageUrl: req.body.imageUrl,
            userId: req.user.id,
            user: req.user.handle
        });

        console.log(newPost);
        newPost.save()
            .then(post => res.json(post))
            .catch(err => res.status(400).json(err));

    }
);
//we will want to create an authenticated route to delete posts, and perhaps some additional routes to add comments or likes.

module.exports = router;