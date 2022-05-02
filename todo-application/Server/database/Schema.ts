import mongoose, { Schema } from "mongoose";

export interface ITodoSchema extends mongoose.Document {
  Id: string,
  Title: string,
  Description: string,
  DueDate: Date,
  Creation: Date,
  Completed: boolean,
}

export const TodoSchema = new Schema({
  Id: String,
  Title: String,
  Description: String,
  DueDate: Date,
  Creation: Date,
  Completed: Boolean,
});

export const ToDoModel = mongoose.model<ITodoSchema>('todo', TodoSchema, 'todoitems');
