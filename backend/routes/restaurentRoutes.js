import express from 'express'
const  router = express.Router()
import { getRestaurents, getRestaurantById, createRestaurant  } from '../controllers/restaurentController.js'


router.get('/', getRestaurents)
router.get('/:id', getRestaurantById)
router.post('/create', createRestaurant )


export default router