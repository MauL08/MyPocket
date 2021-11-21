const mongoose = require('mongoose');

const CashSchema = mongoose.Schema({
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Cash', CashSchema);