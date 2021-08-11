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
            required: "What is the exercise called?"
        },
        weight: {
            type: Number,
            required: "Enter a weight"
        },
        sets: {
            type: Number,
            required: "Enter number of sets"
        },
        reps: {
            type: Number,
            required: "Enter number of reps"
        },
        duration: {
            type: Number,
            required: "Enter duration"
        }, 
        distance: {
            type: Number,
            required: "Enter distance"
        },
    },
],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;