const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema(
  {
    title: String,
    nbrOfLesson: { type: Number, require: true },
    index: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Chapters = mongoose.model("chapters", chapterSchema);

module.exports = Chapters;
