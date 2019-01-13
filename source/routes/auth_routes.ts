import { Router } from 'express'
import AuthController from '../controllers/auth/auth_controller'

const router: Router = Router()

router.get("/login", AuthController.login)


export default router
