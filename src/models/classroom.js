import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

autoIncrement.initialize(mongoose.connection);

const classSchema = mongoose.Schema(
  {
    number: Number,
    title: String,
    capacity: Number,
    description: String,
  },
  {
    timestamps: true
  }
);

classSchema.plugin(autoIncrement.plugin, {
  model: 'Classroom',
  field: 'number',
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model('Classroom', classSchema);
