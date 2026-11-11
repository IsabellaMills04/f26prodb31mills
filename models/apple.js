const mongoose = require("mongoose")
const appleSchema = mongoose.Schema({
    variety: String,
    color: String,
    weight: Number
})

module.exports = mongoose.model("Apple", appleSchema)