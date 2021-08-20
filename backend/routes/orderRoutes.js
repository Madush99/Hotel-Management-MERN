import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders, getOrders } from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


//Order Routes
router.route('/').post(protect, addOrderItems).get(protect, getOrders) //add order
router.route('/myorders').get(protect, getMyOrders) // get orders in profile
router.route('/:id').get(protect, getOrderById) // get order by id
router.route('/:id/pay').put(protect, updateOrderToPaid) //payment


export default router