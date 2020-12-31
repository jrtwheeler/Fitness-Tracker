const router = require("express").Router();
const WorkoutController = require('../../controllers/WorkoutController')

router.route("/")
  .get(WorkoutController.findAll)
  .post(WorkoutController.create)

router.put("/:id", WorkoutController.addExercise)
router.get("/range", WorkoutController.findAll)

//Get all workouts
// router.get("/",);

//Create new workout
// router.post("/",);

//Update all workouts
// router.put("/api/workouts", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//Get workout for seven days
// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
