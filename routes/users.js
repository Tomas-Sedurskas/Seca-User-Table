const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

const User = require('../models/user.model');

router.get('/', (req, res) => {

    let chunkLimit = 30;
    let chunkStart = Number(req.query.chunk)*chunkLimit;
    User.find({'$or':[
        {'firstName' : { '$regex' : req.query.search, }},
        {'lastName' : { '$regex' : req.query.search, }}
        ]}, (err, users) => {
        err ? res.send('No users found.') : res.send(users);
    }).skip(chunkStart).limit(chunkLimit);
});
router.get('/search', (req, res) => {
    let chunkLimit = 30;
    let chunkStart = 0;
    User.find({'$or':[
        {'firstName' : { '$regex' : req.query.search, }},
        {'lastName' : { '$regex' : req.query.search, }}
        ]}, 
        (err, users) => {
        err ? res.send('No users found.') : res.send(users);
    }).skip(chunkStart).limit(chunkLimit);
});




module.exports = router;