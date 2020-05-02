import httpStatus from 'http-status'
import passport from 'passport'
import APIError from '../helpers/APIError'
import User from '../models/user.model'

function login(req, res) {
  return res.json(req.user)
}

function logout(req, res) {
  req.logout()

  return res.json({})
}
function register(req, res, next) {
  User.register(new User({ email: req.body.email, key: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      console.log(err)
      const error = new APIError('Authentication error', httpStatus.UNAUTHORIZED)
      next(error)
    }

    return passport.authenticate('local')(req, res, () => {
      return res.json({ user })
    })
  })
}
function checkAuth(req, res, next) {
  if (!req.cookies.ajs_user_id) {
    const error = new APIError('Authentication error', httpStatus.UNAUTHORIZED)
    next(error)
  }

  next()
}

export default { login, register, checkAuth, logout }
