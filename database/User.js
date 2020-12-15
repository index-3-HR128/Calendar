const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema ({
  id: Number,
  name: String,
  bookings: [{
    placeid: Number,
    checkin: Date,
    checkout: Date,
    guests: {
        adults: Number,
        children: Number,
        infants: Number
      }
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User;