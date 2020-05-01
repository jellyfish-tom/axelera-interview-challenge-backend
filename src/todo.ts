import mongoose = require('mongoose');

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Successfully Connected!');
  }
});

export interface ITodo extends mongoose.Document {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

export const TodoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);
export default Todo;
