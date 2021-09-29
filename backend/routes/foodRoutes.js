import express from 'express'
const  router = express.Router()
import { getFoods,getFoodbyID,createFood, deleteFood,updateFood } from '../controllers/foodController.js'


router.get('/', getFoods)
router.get('/:id', getFoodbyID)
router.post('/addfood', createFood)
router.delete('/:id', deleteFood)
router.put('/:id',updateFood)


export default router 