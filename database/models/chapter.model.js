const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema(
  {
    title: {
      type: String,
      required: [true, "Le titre est requis"],
      minlength: [3, "Trop court"],
      maxlength: [3, "Trop long"],
    },
    difficulty: {
      type: Number,
      min: 1,
      max: 10,
    },
    nbrOfLesson: { type: Number, required: true },
    index: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

chapterSchema.pre("save", function () {
  return Chapters.countDocuments()
    .exec()
    .then((nbr) => (this.index = nbr + 1));
});

const Chapters = mongoose.model("chapters", chapterSchema);

module.exports = Chapters;
