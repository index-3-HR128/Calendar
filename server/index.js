const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

//link to controller:
const PlaceController = require('./Controller/Place.js');
const UserController = require('./Controller/User.js');

app.use(cors());
app.use('/calendar/', express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


// get places request
app.get('/api/place/:id', PlaceController.get);
// // patch request
// app.post('/api/:placeID', PlaceController.create);
// //post request to create a new place.
// app.patch('/api', PlaceController.modify);
// //delete request to delete a new place
// app.delete('/api/:placeID',PlaceController.del);

//get user request
app.get('/api/user/:id', UserController.get);
//post booking to user
app.post('/api/user/:id', UserController.createBooking);
//patch booking info
app.patch('/api/user/:userid/booking/:bookingid', UserController.modifyBooking);
//delete booking
app.delete('/api/user/:userid/booking/:bookingid',
UserController.deleteBooking)




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));