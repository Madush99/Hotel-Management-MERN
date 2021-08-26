import express from 'express'
const  router = express.Router()
import { createTBooking, getAlltableBookings } from '../controllers/tableBookingController.js'
import { protect, admin } from '../middleware/authMiddleware.js'



router.route('/').post(createTBooking).get(getAlltableBookings)



export default router