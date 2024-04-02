const mongoose = require("mongoose")
const ramenSchema = mongoose.Schema({
ramen_type: String,
calorie: Number,
cost: Number
})
module.exports = mongoose.model("ramen",ramenSchema)
