import mongoose from 'mongoose'

const WeddingSchema = mongoose.Schema({

      wedHallName: {
            type: String,
            required: true
      },
      wedSeats: {
            type: String,
            required: true
      },
      wedDes: {
            type: String,
            required: true
      },
      wedImages: []
})

const Wedding = mongoose.model('Wedding', WeddingSchema)

export default Wedding