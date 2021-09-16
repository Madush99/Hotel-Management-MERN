import Restaurent from '../models/restaurentModel.js'
import asyncHandler from 'express-async-handler'


const getRestaurents = asyncHandler(async (req, res) => {
  const restaurents = await Restaurent.find({})
  res.json(restaurents)
})


const getRestaurantById = asyncHandler(async (req, res) => {
  const restaurant = await Restaurent.findById(req.params.id)

  if (restaurant) {
    res.json({
      _id: restaurant._id,
      name: restaurant.name,
      type: restaurant.type,
      tables: restaurant.tables,
      phoneNo: restaurant.phoneNo,
      email: restaurant.email,
      location: restaurant.location,
      images: restaurant.images,
      description: restaurant.description,
    })

  } else {
    res.status(404)
    throw new Error('Restaurant not found')
  }

})

const createRestaurant = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    image1,
    image2,
    image3,
    description
  } = req.body

  const newrest = new Restaurent({
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    images:
      [image1,
        image2,
        image3],
    description

  })
  try {
    await newrest.save()
    res.send('New Restaurant Added Successfully')
  } catch (error) {
    return res.status(400).json({ error });
  }
})



const deleteRest = asyncHandler(async (req, res) => {
  const rest = await Restaurent.findById(req.params.id)

  if (rest) {
    await rest.remove()
    res.json({ message: 'Restaurant removed' })
  } else {
    res.status(404)
    throw new Error('Restaurant not found')
  }
})


const updateRestaurant = asyncHandler(async (req, res) => {

  const {
    name,
    type,
    tables,
    phoneNo,
    email,
    location,
    image1,
    image2,
    image3,
    description
  } = req.body

  const restaurants = await Restaurent.findById(req.params.id)

  if (restaurants) {
    restaurants.name = name,
    restaurants.type = type,
    restaurants.tables = tables,
    restaurants.phoneNo = phoneNo,
    restaurants.email = email,
    restaurants.location = location,
    restaurants.images = [image1, image2, image3],
    restaurants.description = description

    const updateRestaurant = await restaurants.save()
    res.json(updateRestaurant)

  } else {
    res.status(404)
    throw new Error("Restaurant Not Found")
  }

})


export { getRestaurents, getRestaurantById, createRestaurant, deleteRest, updateRestaurant }