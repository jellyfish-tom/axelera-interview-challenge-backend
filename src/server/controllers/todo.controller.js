import Todo from './../models/todo.model'

function list(req, res) {
  const { limit = 50, skip = 0, uid } = req.query

  Todo.list({ limit, skip, uid }).then(todos => res.json(todos)).catch(e => next(e))
}

function remove(req, res) {
  Todo.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      res.send(err)
    } else {
      res.send('Todo successfully deleted')
    }
  })
}

function update(req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
    if (err) {
      res.send(err)
    } else {
      res.send('Todo successfully updated!')
    }
  })
}

function add(req, res) {
  var todo = new Todo(req.body)

  todo.save(err => {
    if (err) {
      res.send(err)
    } else {
      res.send(todo)
    }
  })
}

export default { list, add, update, remove }
