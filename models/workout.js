const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["cardio", "resistance"],
                trim: true,
                required: "Choose an exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Choose an exercise type"
            },
            duration: {
                type: Number,
                required: "Enter an amount"
            },
            distance: {
                type: Number,
                required: function(){
                    return this.type === "cardio"
                }
            },
            weight: {
                type: Number,
                required: function(){
                    return this.type === "resistance"
                }
            },
            sets: {
                type: Number,
                required: function(){
                    return this.type === "resistance"
                }
            },
            reps: {
                type: Number,
                required: function(){
                    return this.type === "resistance"
                }
            },
        }
    ]
});


const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;