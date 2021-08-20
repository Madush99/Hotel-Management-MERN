import express from 'express'

const router = express.Router()

import { bookRoom, getallbookings } from '../controllers/bookingContoller.js'

router.post('/bookroom', bookRoom)
router.get('/allBookings', getallbookings)

export default router