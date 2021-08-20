import asyncHandler from 'express-async-handler'
import Bookings from '../models/bookingModel.js'
import Rooms from '../models/roomModel.js'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51JPWGjSI37Hyu4LSE4vX93j1azAOjpcgYNLvdh9avZuqoUElA7PO2w8xquKa0Z4yt8Ad1lEdRMH4HRxiicAW3Gyc00IVYrwUME');


const bookRoom = asyncHandler(async (req, res) => {


      const { rooms, userid, fromdate, todate, totalDays, totalAmount, token } = req.body

      try {

            const customer = await stripe.customers.create({
                  email: token.email,
                  source: token.id,
            });

            console.log(customer.id);


            const payment = await stripe.charges.create(
                  {
                        amount: totalAmount * 100,
                        currency: "inr",
                        customer: customer.id,
                        receipt_email: token.email,
                  },
                  {
                        idempotencyKey: uuidv4(),
                  }
            );


            if (payment) {
                  try {
                        const newbooking = new Bookings({

                              rooms: rooms.name,
                              roomid: rooms._id,
                              userid,
                              totalDays: totalDays,
                              fromdate: moment(fromdate).format("DD-MM-YYYY"),
                              todate: moment(todate).format("DD-MM-YYYY"),
                              totalAmount: totalAmount,
                              transactionId: "1234",
                              status: 'booked'
                        });

                        const booking = await newbooking.save()

                        const roomtemp = await Rooms.findOne({ _id: rooms._id })

                        roomtemp.currentBookings.push({
                              booking: booking._id,
                              fromdate: moment(fromdate).format("DD_MM_YYYY"),
                              todate: moment(todate).format("DD-MM-YYYY"),
                              userid: userid,
                              status: booking.status
                        })


                        await roomtemp.save()

                        // (async (err, bookings) => {
                        //       const oldroom = await Rooms.findOne({ _id: rooms._id });

                        //       oldroom.currentBookings.push({
                        //             bookings: bookings._id,
                        //             fromdate: moment(fromdate).format("DD-MM-YYYY"),
                        //             todate: moment(todate).format("DD-MM-YYYY"),
                        //             userid: user._id,
                        //             status: 'booked'
                        //       });
                        //       await oldroom.save();
                        // });



                        res.send("Room Booked Successfully");

                  } catch (error) {
                        console.log(error);
                        return res.status(400).json({ message: error });
                  }
            } else {
                  res.send("Payment failed");
            }

      } catch (error) {
            return res.status(400).json({ message: "Something went wrong" + error });
      }


})

export { bookRoom }