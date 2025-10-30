const { Schema, default: mongoose } = require("mongoose");


const jobSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    crime: { type: String, required: true },
    reward: { type: Number, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true },
    lastSeen: { type: String, required: true },
})

module.exports = mongoose.model('Job', jobSchema, 'jobs');