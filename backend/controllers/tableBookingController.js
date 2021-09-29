import asyncHandler from 'express-async-handler'
import moment from 'moment'
import Reservation from '../models/tableBookingModel.js'
import Restaurant from '../models/restaurentModel.js'




const createTBooking = asyncHandler(async (req, res) => {
    const {
        userid,
        userName,
        restaurantid,
        restaurantName,
        date,
        phoneNo,
        adults,
        childrens,
        time

    } = req.body

    const newReserve = new Reservation({

        userid,
        userName,
        restaurantid,
        restaurantName,
        date:moment(date).format("DD-MM-YYYY"),
        phoneNo,
        adults,
        childrens,
        time,
        status: 'booked'

    })
    try {
        await newReserve.save()
        res.send('Successfully')
    } catch (error) {
        return res.status(400).json({ error });
    }
})



const getAlltableBookings = asyncHandler(async (req, res) => {
    const Tbookings = await Reservation.find({})
    res.json(Tbookings)
})


const getUserTableBookings = asyncHandler(async (req, res) => {
    
    const { userid } = req.body;
    try {
          const bookings = await Reservation.find({ userid: userid }).sort({ _id: -1 })
          res.send(bookings)
    } catch (error) {
          return res.status(400).json({ message: "Error" })
    }
     
})




const cancelBooking = asyncHandler(async (req, res) => {
    const { bookingid } = req.body

    try {
          const booking = await Reservation.findOne({ _id: bookingid })
          booking.status = 'cancelled'
          await booking.save();
        //   const table = await Restaurant.findOne({ _id: restaurantid })
        //   const bookings = table.currentBookings
        //   const temp = bookings.filter(booking => typeof booking.bookingid == "undefined" || booking.bookingid.toString() !== bookingid)
        //   console.log(temp);
        //   table.currentBookings = temp;
        //   await table.save()

          res.send('Bookings cancelled sucessfully')
    } catch (error) {
          console.log(error);
          return res.status(400).json({ message: "error" })
    }
})



export { createTBooking, getAlltableBookings, getUserTableBookings, cancelBooking }