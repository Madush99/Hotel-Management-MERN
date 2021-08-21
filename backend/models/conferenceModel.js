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
      conPrice: {
            type: Number,
            required: true
          },

      conFeatures: {
            type: String,
            required: true
          },

      conImages: []


      
})

const Conference = mongoose.model('Conference', ConferenceSchema)

export default Conference