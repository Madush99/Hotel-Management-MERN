import express from 'express'
const  router = express.Router()
import { createTBooking, getAlltableBookings, getUserTableBookings, cancelBooking } from '../controllers/tableBookingController.js'
import { protect, admin } from '../middleware/authMiddleware.js'



router.route('/').post(createTBooking).get(protect, getAlltableBookings)
router.post('/tableReservations',  getUserTableBookings)
router.put('/tableReservations/cancel', cancelBooking)

export default router