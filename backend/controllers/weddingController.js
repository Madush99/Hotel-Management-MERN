import asyncHandler from 'express-async-handler'
import Wedding from '../models/weddingModel.js'


// const insertWedding = asyncHandler(async(req, res) => {


//     const { wedHallName,
//         wedSeats,
//         wedDes,
//         wedImage
//     } = req.body

//    const wedding = await Wedding.create({
//     wedHallName,
//     wedSeats,
//     wedDes,
//     wedImage
//    })

//    if(wedding) {
//        res.status(201).json({
//         _id: wedding._id,
//         wedHallName: wedding.wedHallName,
//         wedSeats: wedding.wedSeats,
//         wedDes: wedding.wedDes,
//         wedImage: wedding.wedImage,
//        })
//    } else {
//        res.status(400)
//        throw new Error('Invalid wedding hall data')
//    }

// })

const insertWedding = asyncHandler(async (req, res) => {

    const { wedHallName, wedSeats, wedDes, wedimg1, wedimg2, wedimg3 } = req.body

    const newwedding = new Wedding({
        wedHallName,
        wedSeats,
        wedImages: [wedimg1, wedimg2, wedimg3],
        wedDes,
        
    })
    
    try {
          await newwedding.save()
          res.send('New Wedding Added Successfully')
    } catch (error) {
          return res.status(400).json({ error });
    }
})

const getAllWedDetails = asyncHandler(async (req, res) => {
    const wedding = await Wedding.find({})
    res.json(wedding)
})

const getWedDetailsById = asyncHandler(async (req, res) => {
    const wedding = await Wedding.findById(req.params.id)

    if (wedding) {
          res.json({
                _id: wedding._id,
                wedHallName: wedding.wedHallName,
                wedSeats: wedding.wedSeats,
                wedDes: wedding.wedDes,
                wedImages: wedding.wedImages,
                
          })
    } else {
          res.status(404)
          throw new Error('Invalid wedding hall data')
    }
})

const updateWedDetails = asyncHandler(async (req, res) => {
    const {
        wedHallName,
        wedSeats,
        wedDes,
        wedimg1,
        wedimg2,
        wedimg3
    } = req.body

    const wedding = await Wedding.findById(req.params.id)

    if (wedding) {
          wedding.wedHallName = wedHallName
          wedding.wedSeats = wedSeats
          wedding.wedDes = wedDes
          wedding.wedImages = [wedimg1, wedimg2, wedimg3]
          const updateWedding = await wedding.save()
          res.json(updateWedding)


    } else {

          res.status(404)
          throw new Error('Invalid wedding hall data')

    }
})

const deleteWedDetails = asyncHandler(async (req, res) => {
    const wedding = await Wedding.findById(req.params.id)

    if (wedding) {
          await wedding.remove()
          res.json({ message: 'Wedding Details removed' })
    } else {
          res.status(404)
          throw new Error('Wedding details not found')
    }

})

export { insertWedding, getAllWedDetails, getWedDetailsById, updateWedDetails, deleteWedDetails }