const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// day : date

exercises: [
    {
        type: {
            type: String,
            trim: true
        },
        name: {},
        weight: {},
        sets: {},
        reps: {},
        duration: {}, 
        distance: {},
    }
]
