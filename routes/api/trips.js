const router = require("express").Router();
const CreateTripModel = require("../../models/CreateTrip");

router.post("/create", ({body}, res) => {
    CreateTripModel.create(body)
    .then(dbCreateTrip => {
      res.json(dbCreateTrip);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// router.post("/api/transaction/bulk", ({body}, res) => {
//   Transaction.insertMany(body)
//     .then(dbCreateTrip => {
//       res.json(dbCreateTrip);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

// router.get("/api/create", (req, res) => {
//     CreateTripModel.find({}).sort({date: -1})
//     .then(dbCreateTrip => {
//       res.json(dbCreateTrip);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

module.exports = router;