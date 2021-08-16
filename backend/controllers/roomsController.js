import asyncHandler from 'express-async-handler'
import Rooms from '../models/roomModel.js'

// @desc    Fetch all rooms
// @route   GET /api/rooms
// @access  Public
const getAllRooms = asyncHandler(async (req, res) => {

      const rooms = await Rooms.find({})
      res.json(rooms)
})


export { getAllRooms }