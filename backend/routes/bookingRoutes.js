import express from 'express'

const router = express.Router()

import { bookRoom, cancelBookings, getAllBookedRooms, getallbookings, getUserBookings } from '../controllers/bookingContoller.js'

router.post('/bookroom', bookRoom)
router.get('/allBookings', getallbookings)
router.post('/userBookings', getUserBookings)
router.post('/cancelbookings', cancelBookings)
router.get('/booked', getAllBookedRooms)

export default router