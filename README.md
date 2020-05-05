# Axelra Challenge (custom backend server)

## API Endpoints

### /todos

- GET - gets all user Todos
  - requires uid (userId) querystring parameter
  - requires user to be authenticated

```
  Request URL:    http://localhost:4040/todos?uid=5ead89a1e25dae28a31b9d06
  Request Method: GET
```

- POST - adds new Todo to user Todos
  - new Todo object should be sent in body.
  - all fields are required
  - requires user to be authenticated

```
  Request URL:    http://localhost:4040/todos
  Request Method: POST
  BODY: {
    uid: "5ead89a1e25dae28a31b9d06",
    title: "test",
    completed: false
  }
```

### /todo/:id

- PUT - updates user Todo
  - Todo update object should be sent in body
  - uid and \_id fields are required
  - requires user to be authenticated

```
  Request URL:    http://localhost:4040/todos/5eb1b4063287744b7ec77298
  Request Method: PUT
  BODY: {
    completed: true
    title: "test"
    uid: "5ead89a1e25dae28a31b9d06"
    _id: "5eb1b4063287744b7ec77298"
  }
```

- DELETE - removes user Todo
  - removes user Todo
  - - requires user to be authenticated

```
Request URL:    http://localhost:4040/todos/5eb02e364bda396bb95cebf2
Request Method: DELETE
```

## Models

### Todo

```
type Todo = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};
```

In the project directory, you can run:

### `yarn`

To install dependencies

### `yarn run dev`

Runs the app in the development mode.<br>
Open [http://localhost:4040](http://localhost:4040) to view it in the browser.
