import express from 'express'
import userRoutes from './user/user.route'
import todosRoutes from './todos/todos.route'
import authRoutes from './auth/auth.route'

const router = express.Router() // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'))

// define api routes
router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/todos', todosRoutes)

export default router
