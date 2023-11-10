const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const ratingSchema = new mongoose.Schema({
    objid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
});


const User = mongoose.model('User', ratingSchema);

module.exports = User;
