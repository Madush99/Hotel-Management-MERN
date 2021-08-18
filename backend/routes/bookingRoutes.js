import express from 'express'

const router = express.Router()

import { bookRoom } from '../controllers/bookingContoller.js'

router.post('/bookroom', bookRoom)

export default router