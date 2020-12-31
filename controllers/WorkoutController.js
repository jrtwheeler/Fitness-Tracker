const Workout = require("../models/workout");

module.exports = {
    findAll: async (req, res) => {
        try {
            const dbWorkout = await Workout.find({})
            res.json(dbWorkout);
        } catch (error) {
            res.sendStatus(500)
        }
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