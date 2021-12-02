const express = require('express');
const router = express.Router();

// Model
const Cash = require('../models/Cash');

// Cash Route
router.post('/post', async (req, res) => {
    const cash = new Cash({
        total: req.body.total,
    });

    try {
        const saveCash = await cash.save();
        res.json(saveCash);
    } catch(err) {
        res.json(err);
    }
});

router.get('/get', async (req, res) => {
    try {
        const getCash = await Cash.find();
        res.json(getCash);
    } catch(err) {
        res.json(err);
    }
});

router.patch('/update/:ID', async (req, res) => {
    try {
        const updateCash = await Cash.updateOne(
            {_id: req.params.ID},
            {$set: {
                total: req.body.total,
            }
        });
        res.json(updateCash);
    } catch(err) {
        res.json(err);
    }
});

module.exports = router;