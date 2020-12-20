const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');

require('../../config/passport')(passport);

const Prospect = require('../../models/prospect');
const validateProspectInput = require('../../validation/prospect');

router.get('/', (req, res) => {
    Prospect.find()
        .sort({ date: -1 })
        .then(prospects => res.json(prospects))
        .catch(err => res.status(404).json({ noprospectsfound: 'No Prospects Found'}));
});

router.get('/:id', (req, res) => {
    Prospect.findById(req.params.id)
        .then(prospect => res.json(prospect))
        .catch(err =>
            res.status(404).json({ noprospectfound: 'No prospect found with that ID'})
        );
});

router.prospect('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateProspectInput(req.body);
        if (!isValid) {
            console.log(errors);
            return res.status(400).json(errors);
        }
        const newProspect = new Prospect({
            email: req.body.email
        });

        console.log(newProspect);
        newProspect.save()
            .then(prospect => res.json(prospect))
            .catch(err => res.status(400).json(err));

    }
);
//we will want to create an authenticated route to delete posts, and perhaps some additional routes to add comments or likes.

module.exports = router;