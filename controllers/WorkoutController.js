const Workout = require("../models/workout");

module.exports = {
    findAll: (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log("Error Starts Here")
                res.status(400).json(err);
            });
    },
    create: async ({ body }, res) => {
        try {
            const dbWorkout = await Workout.create(body)
            res.json(dbWorkout)
        } catch (error) {
            res.sendStatus(500)
        }
    },
    addExercise: async ({ body, params }, res) => {
        try {
            const dbWorkout = await Workout.findByIdAndUpdate(params.id, {
                $push: { exercises: body }
            })
            res.json(dbWorkout)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }
}