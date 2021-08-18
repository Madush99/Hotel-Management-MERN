import mongoose from 'mongoose'

const ConferenceInsideSchema = mongoose.Schema({

      conInDate: {
            type: Date,
            required: true
      },
      conInTime: {
            type: String,
            required: true
      },
      conInNoOfHrs: {
            type: Number,
            required: true
      },
})

const ConferenceInside = mongoose.model('ConferenceInside', ConferenceInsideSchema)

export default ConferenceInside