const mongoose = require('mongoose');

const PocketSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    detail: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Pocket', PocketSchema);
