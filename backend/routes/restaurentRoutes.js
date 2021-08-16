import express from 'express'
const  router = express.Router()
import { getRestaurents } from '../controllers/restaurentController.js'


router.get('/', getRestaurents)


export default router