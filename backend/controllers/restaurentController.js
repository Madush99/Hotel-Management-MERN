import Restaurent from '../models/restaurentModel.js'
import asyncHandler from 'express-async-handler'


const getRestaurents = asyncHandler(async (req, res) => {
    const restaurents = await Restaurent.find({})
    res.json(restaurents)
  })


  export { getRestaurents }