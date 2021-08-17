import express from 'express'

const router = express.Router()

import { getAllRooms, getRoomsById, roomById } from '../controllers/roomsController.js'

router.get('/allrooms', getAllRooms)
router.get('/:id', getRoomsById)
router.post('/roomsbyId', roomById)

export default router