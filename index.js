const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());

// Routes
const pocketRoute = require('./routes/pocketRoute');
app.use('/main', pocketRoute);

// Connect MongoDB
mongoose.connect(process.env.MONGODB_CONNECT, () => {
    console.log('Deez Nutz!');
});

app.listen(5000, () => {
    console.log('app run on port 5000');
});