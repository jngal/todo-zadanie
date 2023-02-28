import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  flag: { type: String, required: true },
  created: { type: Date, required: false },
  deadline: { type: Date, required: false },
});

export const TaskModel = mongoose.model('Task', TaskSchema);

export interface Task extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  flag: string;
  created: Date;
  deadline: Date;
}
