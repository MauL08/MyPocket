const express = require('express');
const router = express.Router();

// Modules
const Cash = require('../models/Cash');
const Pocket = require('../models/Pocket');

// Cash Route
router.post('/add/cash', (req, res) => {
    
});

router.get('/get/cash', (req, res) => {
    
});

router.patch('/update/cash', (req, res) => {

});

// Detail Route
router.post('/add', (req, res) => {

});

router.get('/fetch', (req, res) => {
    
});

router.delete('/delete/:userID', (req, res) => {
    
});

router.patch('/update/:userID', (req, res) => {
    
});

module.exports = router;