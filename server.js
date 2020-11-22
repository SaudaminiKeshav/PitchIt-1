const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes/api");
const users = require("./routes/api");
const app = express();
require('dotenv').config();
const CreateTripModel = require("./models/CreateTrip.js");
const User = require("./models/User");

//ADDED NEW STUFF START
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const crypto = require("crypto");
//ADDED NEW STUFF END

// DB Config
// const db = process.env.mongoURI;
const db = "mongodb+srv://user_atlas:KaP23G43H5JjcPm@cluster0.lhnjo.mongodb.net/Pitchit?retryWrites=true&w=majority";


const apiKey = process.env.apiKey;

// Connect to MongoDB
mongoose.connect(
  db , {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false

}).then(() => 
// ADDED NEW STUFF START
{
 gfs = Grid(mongoose.connection.db, mongoose.mongo);
 gfs.collection('uploads');
 console.log("MongoDB successfully connected!");
}
// ADDED NEW STUFF END
)
.catch(err => console.log(err + " => Error while connecting to mongo !!!!"));

// }).then(() => console.log("MongoDB successfully connected", db))
// .catch(err => console.log(err + " => Error while connecting to mongo !!!!"));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
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
  CreateTripModel.find()
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
app.put('/api/update/:id', function(req, res) {
  console.log("req:", req.params.id);
  console.log("review", req.body.review);

  CreateTripModel.updateOne({ _id: req.params.id }, { $set: { completed: true, review: req.body.review } }, { upsert: false })
    .exec()
    .then(doc => {
      res.send(doc)
    })
    .catch()
});

app.delete('/api/delete/:id', function(req, res) {
  console.log("req:", req.params.id);
  console.log("review", req.body.review);
  CreateTripModel.deleteOne({ _id: req.params.id })
    .exec()
    .then(doc => {
      res.send(doc)
    })
    .catch()
});

// app.put("/api/workouts/:id", (req, res) => {
//   db.Workout.findByIdAndUpdate(
//       { _id: req.params.id },
//       { $push: { exercises: req.body } },
//       function(err, result) {
//           if (err) {
//               console.log("error", err);
//               res.send(err);
//           } else {
//               res.send(result);
//           }
//       }
//   );
// });
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


// app.post('/api/user', upload.single('img'), (req, res, err) => {
//   if (err) throw err
//   console.log(res);
//   res.status(201).send()
//   console.log(res)
// })
// .save()
// .then(() => {
//   res.send('Profile picture sent')
// })

// app.get('/api/user/:id', function(req, res){
//   User.findOne({ _id: user.id })
//     .exec()
//     .then(doc => {
//       res.send(doc)
//     })
//     .catch()
//   console.log(user);
// });

app.put('/api/user/:id', (req, res, err) => {
  if (err) throw err
  console.log(res);
  console.log(req);
  res.status(201).send();
  console.log(res);

  User.update({ _id: req.params.id }, { $set: { profilePic: req.data } }, { upsert: false })
})
.save()
.then(() => {
  res.send('Profile picture sent')
})

// Create storage engine
const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})

const upload = multer({ storage })

app.post('/', upload.single('progileImg'), (req, res, err) => {
  if (err) throw err
  res.status(201).send()
})

let gfs;

app.get('/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists',
      })
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    } else {
      res.status(404).json({
        err: 'Not an image',
      })
    }
  })
})
//ADDED NEW STUFF END


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  // const path = require('path');
  app.use(routes)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
