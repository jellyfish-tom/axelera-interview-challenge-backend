import User from '../models/user.model'

function load(req, res, next, id) {
  User.get(String(id))
    .then(user => {
      req.user = user // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

function get(req, res) {
  return res.json(req.user)
}

function update(req, res, next) {
  const user = req.user
  user.email = req.body.email

  user.save().then(savedUser => res.json(savedUser)).catch(e => next(e))
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query

  User.list({ limit, skip }).then(users => res.json(users)).catch(e => next(e))
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
  const user = req.user
  user.remove().then(deletedUser => res.json(deletedUser)).catch(e => next(e))
}

export default { load, get, update, list, remove }
