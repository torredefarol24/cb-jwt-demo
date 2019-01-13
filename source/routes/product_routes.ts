import { Router } from 'express'
import productController from '../controllers/products/'
import checkJWT from '../middleware/check_jwt'


const router = Router()

router.get("/", checkJWT, productController.getAll)

export default router