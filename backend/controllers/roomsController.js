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
                  rentperday: rooms.rentperday,
                  imageUrls: rooms.imageUrls,
                  currentBookings: rooms.currentBookings,
                  type: rooms.type,
                  description: rooms.description,

            })

      } else {
            res.status(404)
            throw new Error('room not found')
      }
})

const roomById = asyncHandler(async (req, res) => {
      const roomid = req.body.roomid

      try {
            const rooms = await Rooms.findOne({ '_id': req.body.roomid })
            res.json(rooms)
      } catch (error) {
            return res.status(400).json({ message: error });
      }

})

const createRooms = asyncHandler(async (req, res) => {

      const { name,
            rentperday, maxcount, features1, features2, features3, features4, features5, description, type, imageUrl1, imageUrl2, imageUrl3 } = req.body

      const newroom = new Rooms({
            name, maxcount, rentperday, features1, features2, features3, features4, features5, type, imageUrls: [imageUrl1, imageUrl2, imageUrl3], description, currentbookings: []
      })
      try {
            await newroom.save()
            res.send('New Room Added Successfully')
      } catch (error) {
            return res.status(400).json({ error });
      }
})


export { getAllRooms, getRoomsById, roomById, createRooms }