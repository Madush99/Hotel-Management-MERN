import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      maxcount: {
            type: Number,
            required: true
      },
      features1: {
            type: String,
            required: true
      },
      features2: {
            type: String,
            required: true
      },
      features3: {
            type: String,
            required: true
      },
      features4: {
            type: String,
            required: true
      },
      features5: {
            type: String,
            required: true
      },
      rentperday: {
            type: Number,
            required: true
      },
      imageUrls: [],
      currentBookings: [],
      type: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: true
      },
}, {
      timestamps: true,
})

const Rooms = mongoose.model('rooms', roomSchema)

export default Rooms