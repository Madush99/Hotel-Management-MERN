import express from 'express'
const  router = express.Router()
import { getFoods,getFoodbyID } from '../controllers/foodController.js'


router.get('/', getFoods)
router.get('/:id',getFoodbyID)


export default router