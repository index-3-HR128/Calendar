const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = new mongoose.Schema ({
  name: String,
  bookings: [{id: String}]
})

const User = mongoose.model('User', userSchema)

module.exports = User;