const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userName:     { type: String, required: true },

  review:    { type: Number, required: true },

  note: { type: String, required: false }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;