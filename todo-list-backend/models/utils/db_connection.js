'use strict'

const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config');

mongoose.connection.on('error', err => {
    console.log('Connection error: ', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb at', mongoose.connection.name);
});

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;