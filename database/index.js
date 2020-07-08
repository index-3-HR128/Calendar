const mongoose = require('mongoose');
// const mongoUri = 'mongodb://172.17.0.2/calendar';
// const db = mongoose.connect(mongoUri);

mongoose.connect('mongodb://localhost/calendar', {
  useNewUrlParser: true,
  useUnifiedTopology: true  });

const db = mongoose.connection;


module.exports = db;
