# Axelra Challenge (custom backend server)

## API Endpoints

### /todos

- GET - /todos # returns all todos
- DELETE - /todos/:id # deletes a book with given id

### /todo

- POST - /todo # inserts a new todo into todos collection
- PUT - /todo/:id # updates todo with given id

## Models

- todo

```
type Todo = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};
```
