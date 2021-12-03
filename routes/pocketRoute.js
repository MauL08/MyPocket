const express = require('express');
const router = express.Router();

// Model
const Pocket = require('../models/Pocket');

// Detail Route
router.post('/add', async (req, res) => {
    const pocket = new Pocket({
        title: req.body.title,
        status: req.body.status,
        detail: req.body.detail,
    });

    try {
        const savePocket = await pocket.save();
        res.json(savePocket);
    } catch(err) {
        res.json(err);
    }
});

router.get('/get', async (req, res) => {
    try {
        const getPocket = await Pocket.find();
        res.json(getPocket);
    } catch(err) {
        res.json(err);
    }
});

router.delete('/delete/:ID', async (req, res) => {
    try {
        const deletePocket = await Pocket.deleteOne({_id: req.params.ID});
        res.json(deletePocket);
    } catch(err) {
        res.json(err);
    }
});

router.patch('/update/:ID', async (req, res) => {
    try {
        const updatePocket = await Pocket.updateOne(
            {_id: req.params.ID},
            {$set: {
                title: req.body.title,
                status: req.body.status,
                detail: req.body.detail,
            }
        });
        res.json(updatePocket);
    } catch(err) {
        res.json(err);
    }
});

module.exports = router;