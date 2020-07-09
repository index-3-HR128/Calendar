const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const cors = require('cors');
const Controller = require('./Controller.js');

const Calendar = require('../database/Calendar.js');

const app = express();
const port = 3001;

app.use(cors());
app.use('/calendar/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));


// get request
app.get('/api/:placeID', Controller.find);
// patch request
app.post('/api/:placeID', Controller.create);
//post request to create a new place.
app.patch('/api', Controller.modify);
//delete request to delete a new place
app.delete('/api/:placeID',Controller.del);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));