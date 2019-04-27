import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose.connection);

const classeSchema = mongoose.Schema(
  {
    number: Number,
    title: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    formations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Formation" }]
  },
  {
    timestamps: true
  }
);

classeSchema.plugin(autoIncrement.plugin, {
  model: 'Classe',
  field: 'number',
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("Classe", classeSchema);
