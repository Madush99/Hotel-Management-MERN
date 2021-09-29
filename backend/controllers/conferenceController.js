import asyncHandler from 'express-async-handler'
import Conference from '../models/conferenceModel.js'

// const insertCon = asyncHandler(async(req, res) => {


//     const { 
//         conName,
//         conSeats,
//         conDes,
//         conImage,
//         conPrice,
//         conFeatures
//     } = req.body

//    const conference = await Conference.create({
//         conName,
//         conSeats,
//         conDes,
//         conImage,
//         conPrice,
//         conFeatures
//    })

//    if(conference) {
//        res.status(201).json({
//         _id: conference._id,
//         conName:  conference.conName,
//         conDes:  conference.conDes,
//         conSeats:  conference.conSeats,
//         conImage:  conference.conImage,
//         conPrice:  conference.conPrice,
//         conFeatures:  conference.conFeatures,
//        })
//    } else {
//        res.status(400)
//        throw new Error('Invalid Conference room data')
//    }

// })

const insertCon = asyncHandler(async (req, res) => {

    const { conName,
        conSeats,
        conDes,
        conPrice,
        conFeatures, conImg1, conImg2, conImg3  } = req.body


    const newconference = new Conference({
        conName,
        conSeats,
        conDes,
        conPrice,
        conFeatures,
        conImages: [conImg1, conImg2, conImg3]
        
    })
    
    try {
          await newconference.save()
          res.send('New Conference room Added Successfully')
    } catch (error) {
          return res.status(400).json({ error });
    }
})


const getAllConDetails = asyncHandler(async (req, res) => {
    const conference = await Conference.find({})
    res.json(conference)
})

const getConDetailsById = asyncHandler(async (req, res) => {
    const conference = await Conference.findById(req.params.id)

    if (conference) {
          res.json({
            _id: conference._id,
            conName:  conference.conName,
            conDes:  conference.conDes,
            conSeats:  conference.conSeats,
            conImages:  conference.conImages,
            conPrice:  conference.conPrice,
            conFeatures:  conference.conFeatures,
                
          })
    } else {
          res.status(404)
          throw new Error('Invalid Conference room data')
    }
})

const updateConDetails = asyncHandler(async (req, res) => {
    const {
        conName,
        conSeats,
        conDes,
        conPrice,
        conFeatures,
        conImg1,
        conImg2,
        conImg3
    } = req.body

    const conference = await Conference.findById(req.params.id)

    if (conference) {
          conference.conName = conName
          conference.conSeats = conSeats
          conference.conDes = conDes
          conference.conImages = [conImg1, conImg2, conImg3]
          conference.conPrice = conPrice
          conference.conFeatures = conFeatures

          
          const updateConference = await conference.save()
          res.json(updateConference)


    } else {

          res.status(404)
          throw new Error('Invalid wedding hall data')

    }
})

const deleteConDetails = asyncHandler(async (req, res) => {
    const conference = await Conference.findById(req.params.id)

    if (conference) {
          await conference.remove()
          res.json({ message: 'conference room Details removed' })
    } else {
          res.status(404)
          throw new Error('Conference room details not found')
    }

})

export { insertCon, getAllConDetails, getConDetailsById, updateConDetails, deleteConDetails }