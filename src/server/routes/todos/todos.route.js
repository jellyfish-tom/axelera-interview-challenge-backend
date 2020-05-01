import express from 'express'
import validate from 'express-validation'
import todoCtrl from '../../controllers/todo.controller'
import authCtrl from '../../controllers/auth.controller'

const router = express.Router() // eslint-disable-line new-cap

router.route('/').get(authCtrl.checkAuth, todoCtrl.list).post(authCtrl.checkAuth, todoCtrl.add)

router.route('/:id').put(authCtrl.checkAuth, todoCtrl.update).delete(authCtrl.checkAuth, todoCtrl.remove)

export default router
