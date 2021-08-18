import express from 'express'
const  router = express.Router()
import { getRestaurents, getRestaurantById, createRestaurant  } from '../controllers/restaurentController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.get('/', getRestaurents)
router.get('/:id', getRestaurantById)
router.post('/create', protect, admin, createRestaurant )


export default router