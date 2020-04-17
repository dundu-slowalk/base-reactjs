const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  no: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  writeDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
