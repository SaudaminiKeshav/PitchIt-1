const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes/api");
const app = express();
require('dotenv').config();
const CreateTripModel = require("./models/CreateTrip.js");
const User = require("./models/User");

// DB Config
const db = process.env.mongoURI;
const apiKey = process.env.apiKey;

// Connect to MongoDB
mongoose.connect(
  db , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err + "Error while connecting to mongo !!!!"));

// Bodyparser middleware
app.use(bodyParser.json({limit: '500mb', extended: true}));
app.use(
  bodyParser.urlencoded({limit: '500mb',
    extended: false
  })
);

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api", routes);


app.post("/api/create", (req, res) => {
  console.log(req.body);
  CreateTripModel.create(req.body)
  .then(dbCreateTrip => {
    console.log(dbCreateTrip);
    res.json(dbCreateTrip);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});

app.get('/api/all', function(req, res){
  CreateTripModel.find().sort({_id:-1})
    .exec()
    .then(doc => {
      res.send(doc)
    })
    .catch()
});

app.get('/api/completed', function(req, res){
  CreateTripModel.find({ completed: true })
    .exec()
    .then(doc => {
      res.send(doc)
    })
    .catch()
});

//NOT DONE
app.get('/api/update/:id', function(req, res) {
  CreateTripModel.updateOne({ _id: ':id' }, { $set: { completed: true } }, { upsert: false })
    .exec()
    .then(doc => {
      res.send(doc)
    })
    .catch()
});
//NOT DONE

app.post("/api/forma", (req, res)=>{
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(apiKey)
  const msg = {
  to: 'haroldzuluaga@aol.com',// Change to your recipient
  from: 'haroldzuluaga@aol.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    res.send('Email sent2')
  })
  .catch((error) => {
    res.send(error)
  })
});

//Upload Profile Picture
app.put("/api/profile", (req, res) => {
  console.log(req.body);
  User.update(req.body)
  .then(dbUserUpdate => {
    console.log(dbUserUpdate);
    res.json(dbUserUpdate);
  })
  .catch(err => {
    console.log(err);
    res.send(err);
  });
});


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));