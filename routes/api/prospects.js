const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');

require('../../config/passport')(passport);

const Prospect = require('../../models/prospect');
const validateProspectInput = require('../../validation/prospects');

router.get('/', (req, res) => {
    Prospect.find()
        .sort({ date: -1 })
        .then(prospects => res.json(prospects))
        .catch(err => res.status(404).json({ noprospectsfound: 'No Prospects Found'}));
});

router.get('/prospect/:email', (req, res) => {
    Prospect.find({'email': req.params.email}, (err, prospect) => {
        console.log(err);
        console.log(prospect);
        if (err) {
            return res.status(400).json(err)
        } else {
            return res.json(prospect);
        }
    });
});

router.get('/:id', (req, res) => {
    Prospect.findById(req.params.id)
        .then(prospect => res.json(prospect))
        .catch(err =>
            res.status(404).json({ noprospectfound: 'No prospect found with that ID'})
        );
});

router.post('/',
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

router.delete('/prospect', (req, res) => {
    //credits to https://coursework.vschool.io/mongoose-crud/
    Prospect.findOneAndRemove(req.params.email, (err, email) => {
        if (err) return res.status(500).send(err);

        const response =  {
            message: "Prospect successfully deleted",
            id: prospect._id
        };
    });
})

module.exports = router;