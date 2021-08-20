import express from 'express'
const  router = express.Router()
import { getFoods,getFoodbyID,createFood, deleteFood } from '../controllers/foodController.js'


router.get('/', getFoods)
router.get('/:id', getFoodbyID)
router.post('/addfood', createFood)
router.delete('/:id', deleteFood)


export default router 