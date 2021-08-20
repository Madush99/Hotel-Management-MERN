import asyncHandler from 'express-async-handler'
import ConferenceInside from '../models/conInsideModel.js'

const insertConInside = asyncHandler(async(req, res) => {


    const { 
        conInDate,
        conInTime,
        conInNoOfHrs,
    } = req.body

   const conferenceInside = await ConferenceInside.create({
    conInDate,
    conInTime,
    conInNoOfHrs,
   })

   if(conferenceInside) {
       res.status(201).json({
        _id: conferenceInside._id,
        conInDate: conferenceInside.conInDate,
        conInTime: conferenceInside.conInTime,
        conInNoOfHrs:  conferenceInside.conInNoOfHrs,
       })
   } else {
       res.status(400)
       throw new Error('Invalid Conference room inside data')
   }

})

export { insertConInside }