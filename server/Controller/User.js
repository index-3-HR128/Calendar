const User = require('../../database/User.js')

module.exports = {
  get: (req,res) =>{
    console.log('in server GET user loop');
    User.find({ id: req.params.id})
    .then((data) => {
      console.log("Get User send")
      res.send(data);
    })
    .catch((e) =>{
      console.log("error in get request: "+ err)
      res.sendStatus(400);
    })
  },
  createBooking: (req,res) =>{
    console.log('Post loop on booking');
    let bookingRecord = req.body;
    User.updateOne(
      {id: req.params.id},
      {$push: { bookings: bookingRecord}}
    )
    .then((data) => {
      console.log("Record got pushed!")
      res.sendStatus(201);
    })
    .catch((e) =>{
      console.log("error in get request: "+ err)
      res.sendStatus(400);
    })
  },
  modifyBooking: (req,res) =>{
    console.log("in patch loop");
    bookingID = req.params.bookingid;
    userID = req.params.userid;
    console.log(`${userID} ${bookingID}`)
    let modify = {
      guests: {
          "adults": req.body.adults,
          "children": req.body.children,
          "infants": req.body.infants
      },
      "placeid": req.body.placeid,
      "checkin": "2020-08-04T07:00:00.000Z",
      "checkout": "2020-08-07T07:00:00.000Z"
    }
    console.log(modify);
    User.updateOne(
      {"bookings._id": bookingID },
      {"$set": { "bookings.$": modify}}
    )
    .then(()=> {
      console.log("data corrected saved");
      res.sendStatus(200)
    })
    .catch((e)=> {
      console.log("error in post request: "+ e);
      res.sendStatus(400);
    })
  },
  deleteBooking: (req,res) =>{
    console.log("in delete loop");
    bookingID = req.params.bookingid;
    userID = req.params.userid;
    User.updateOne(
      {id: userID},
      {$pull: {"bookings": {"_id": bookingID}}}
    )
    .then(()=> {
      console.log("record deleted");
      res.sendStatus(200)
    })
    .catch((e)=> {
      console.log("error in delete request: "+ e);
      res.sendStatus(400);
    })
  }
}
