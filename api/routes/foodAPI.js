const express = require("express");
const axios = require('axios')
const router = express.Router();

// Url to our food api endpoint
const urlProduct = 'https://www.foodrepo.org/api/v3/products';
// We put here our token from foodrepo so we can change it if necessary
const token = '598eab83dde568bd783743a303213645';

// An api endpoint that returns a short list of items
router.get('/', (req, res) => {
    axios.get(urlProduct, {
        headers: { 'Authorization': `Token token=${token}` }
    })
    .then(function (response) {
        // console.log(response.data)
        res.json(response.data)
    })
    .then(function (error) {
        console.log(error)
    })
});

module.exports = router;