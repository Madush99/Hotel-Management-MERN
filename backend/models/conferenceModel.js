import mongoose from 'mongoose'

const ConferenceSchema = mongoose.Schema({

      conName: {
            type: String,
            required: true
      },
      conSeats: {
            type: String,
            required: true
      },
      conDes: {
            type: String,
            required: true
      },
      conImage: {
            type: String,
      },
      conPrice: {
        type: Number,
        required: true
      },
      conFeatures: {
        type: String,
        required: true
      },
})

const Conference = mongoose.model('Conference', ConferenceSchema)

export default Conference