import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const courSchema = mongoose.Schema(
  {
    number: Number,
    title: String,
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    formation: { type: mongoose.Schema.Types.ObjectId, ref: "Formation" }
  },
  {
    timestamps: true
  }
);

courSchema.plugin(autoIncrement.plugin, {
  model: "Cour",
  field: "number",
  startAt: 1,
  incrementBy: 1
});

courSchema.post("save", cour => {
  Formation.findByIdAndUpdate(cour.formation, {
    $push: { cours: cour._id }
  }).catch(err => {
    console.error(err.message);
    throw new Error(err.message);
  });
});

courSchema.post("findOneAndRemove", cour => {
  Formation.findByIdAndUpdate(cour.formation, {
    $pull: { cours: cour._id }
  }).catch(err => {
    console.error(err.message);
    throw new Error(err.message);
  });
});

export default mongoose.model("Cour", courSchema);
