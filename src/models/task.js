import mongoose, { Schema } from "mongoose";

const { schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  tags: String,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
