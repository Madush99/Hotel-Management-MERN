import asyncHandler from 'express-async-handler'
import Rooms from '../models/roomModel.js'

// @desc    Fetch all rooms
// @route   GET /api/rooms
// @access  Public
const getAllRooms = asyncHandler(async (req, res) => {

      const rooms = await Rooms.find({})
      res.json(rooms)
})

const getRoomsById = asyncHandler(async (req, res) => {
      const rooms = await Rooms.findById(req.params.id)

      if (rooms) {
            res.json({

                  _id: rooms._id,
                  name: rooms.name,
                  maxcount: rooms.maxcount,
                  features1: rooms.features1,
                  features2: rooms.features2,
                  features3: rooms.features3,
                  features4: rooms.features4,
                  features5: rooms.features5,
                  phonenumber: rooms.phonenumber,
                  rentperday: rooms.rentperday,
                  imageurls: rooms.imageurls,
                  currentBookings: rooms.currentBookings,
                  type: rooms.type,
                  description: rooms.description,

            })

      } else {
            res.status(404)
            throw new Error('room not found')
      }
})



export { getAllRooms, getRoomsById }