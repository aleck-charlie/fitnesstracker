const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema ({
    day: { 
        type: Date, 
        default: () => new Date() 
    },
exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Exercise required"
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        duration: {
            type: Number
        }, 
        distance: {
            type: Number
        },
    },
],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;