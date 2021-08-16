import express from 'express'

const router = express.Router()

import { getAllRooms, getRoomsById } from '../controllers/roomsController.js'

router.get('/allrooms', getAllRooms)
router.get('/:id', getRoomsById)

export default router