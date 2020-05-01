import { Request, Response } from 'express';

import Todo from './../todo';

export let todos = (req: Request, res: Response) => {
  Todo.find((err: any, todos: any) => {
    if (err) {
      res.send('Error!');
    } else {
      res.send(todos);
    }
  });
};

export let deleteTodo = (req: Request, res: Response) => {
  Todo.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Todo successfully deleted');
    }
  });
};

export let updateTodo = (req: Request, res: Response) => {
  console.log(req.body);
  Todo.findByIdAndUpdate(req.params.id, req.body, (err: any, todo: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Todo successfully updated!');
    }
  });
};

export let addTodo = (req: Request, res: Response) => {
  var todo = new Todo(req.body);

  todo.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(todo);
    }
  });
};
