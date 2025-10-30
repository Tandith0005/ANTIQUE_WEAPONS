const { Schema, default: mongoose } = require("mongoose");

const sellSchema = new Schema({
  user: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String },
}, {
  timestamps: true
});




module.exports = mongoose.model('Sell', sellSchema, 'sells');