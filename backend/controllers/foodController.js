import Food from '../models/foodModel.js'
import asyncHandler from 'express-async-handler'


const getFoods = asyncHandler(async (req, res) => {
    const food = await Food.find({})
    res.json(food)
  })



const getFoodbyID= asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)  

  if (food) {
  
  res.json(food)
  } else {
  res.status(404)
  throw new Error('food not found')
  
  }
  
})
  
  
  

  export { getFoods,getFoodbyID }