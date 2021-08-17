import express from 'express'
const  router = express.Router()
import { getRestaurents, getRestaurantById } from '../controllers/restaurentController.js'


router.get('/', getRestaurents)
router.get('/:id', getRestaurantById)


export default router