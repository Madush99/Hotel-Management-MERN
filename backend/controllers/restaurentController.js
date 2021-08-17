import Restaurent from '../models/restaurentModel.js'
import asyncHandler from 'express-async-handler'


const getRestaurents = asyncHandler(async (req, res) => {
    const restaurents = await Restaurent.find({})
    res.json(restaurents)
  })


  const getRestaurantById = asyncHandler(async(req, res) => {
    const restaurant = await Restaurent.findById(req.params.id)
 
    if(restaurant){
        res.json({
         _id: restaurant._id,
         name: restaurant.name,
         type: restaurant.type,
         tables: restaurant.tables,
         phoneNo: restaurant.phoneNo,
         email: restaurant.email,
         location: restaurant.location,
         image: restaurant.image,
         description: restaurant.description,
        })
         
    }else {
        res.status(404)
        throw new Error('Restaurant not found')
    }
 
 })


  export { getRestaurents , getRestaurantById }