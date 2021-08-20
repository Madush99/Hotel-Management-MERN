import express from 'express'
const  router = express.Router()
import { getFoods,getFoodbyID,createFood } from '../controllers/foodController.js'


router.get('/', getFoods)
router.get('/:id', getFoodbyID)
router.post('/addfood', createFood)


export default router 