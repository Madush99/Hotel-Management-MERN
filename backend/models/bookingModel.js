import mongoose from 'mongoose'

const bookingSchema = mongoose.Schema({
      rooms: {
            type: String,
            required: true
      },
      roomid: {
            type: String,
            required: true
      },
      userid: { type: String, required: true },
      fromdate: {
            type: String,
            required: true,
      },
      todate: {
            type: String,
            required: true,
      },
      totalDays: {
            type: String,
            required: true,
      },
      totalAmount: {
            type: String,
            required: true,
      },
      transactionId: {
            type: String,
            required: true,
      },
      status: {
            type: String,
            required: true,
            default: 'booked'
      },

}, {
      timestamps: true
})

const Bookings = mongoose.model('bookings', bookingSchema)

export default Bookings