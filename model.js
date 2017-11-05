
let mongoose = require('mongoose'),
    monk     = require('monk'),
    db       = monk("mongodb://localhost:27017/alc");

module.exports = db;