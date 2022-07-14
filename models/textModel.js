const mongoose = require("mongoose")

const newText = mongoose.Schema

const textSchema = new newText({
    text: {
        type: String
    },
    date: {
        type:Date,
        default: Date.now()
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("textSchema", textSchema)