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

 const createRestaurant = asyncHandler(async(req, res) => {  
      const { 
        name,     
        type,     
        tables,     
        phoneNo,
        email,
        location,
        image,
        description  
    } = req.body 

        const rest = await Restaurent.create({  
        name,     
        type,     
        tables,     
        phoneNo,
        email,
        location,
        image,
        description   
           
       }) 
          if(rest) 
        {    
             res.status(201).json({   
                 _id:rest._id,    
                name:rest.name,
                type: rest.type,
                tables:rest.tables,
                phoneNo:rest.phoneNo,
                email:rest.email,
                location:rest.location,
                image:rest.image,
                description:rest.description
             })  
         } else {   
              res.status(400)     
              throw new Error('Invalid food data') 
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


  export { getRestaurents , getRestaurantById , createRestaurant, deleteRest }