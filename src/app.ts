import express, { Request, Response } from 'express';

import * as bookController from './controllers/todoController';

// Our Express APP config
const app = express();
app.set('port', process.env.PORT || 3000);

// API Endpoints
app.get('/', (req: Request, res: Response) => res.send('hi'));

// API Endpoints
app.get('/todos', bookController.todos);
app.post('/todo', bookController.addTodo);
app.put('/book/:id', bookController.updateTodo);
app.delete('/book/:id', bookController.deleteTodo);

const server = app.listen(app.get('port'), () => {
  console.log('App is running on http://localhost:%d', app.get('port'));
});
