import express from 'express'

const router = express.Router()

import { getAllRooms } from '../controllers/roomsController.js'

router.get('/allrooms', getAllRooms)

export default router