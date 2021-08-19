import Food from '../models/foodModel.js'
import asyncHandler from 'express-async-handler'

//retrive food items
const getFoods = asyncHandler(async (req, res) => {
    const food = await Food.find({})
    res.json(food)
  })


//retrive food items by ID
const getFoodbyID= asyncHandler(async (req, res) => {
  const food = await Food.findById(req.params.id)  

  if (food) {
  
  res.json(food)
  } else {
  res.status(404)
  throw new Error('food not found')
  
  }
 
})
//create food items
/*const createFood = asyncHandler(async (req, res) => {
  const food = new Food({
      name: 'Sample name',
      description: 'must have an alt prop, either with meaningful text, or an empty string for decorative ima',
      price: 0,
      category: 'Sample category',
      image: '/images/las.jpg',
  })

  const createdFood = await food.save()
  res.status(201).json(createdFood)
})*/
  

const createFood = asyncHandler(async(req, res) => {  
    const { 
       name,     
       description,     
       price,     
       category,
       image    
  } = req.body 
      const food = await Food.create({  
        name,
        description,     
        price,     
        category,
        image  
         
     }) 
        if(food) 
      {    
           res.status(201).json({   
               _id: food._id,    
              name: food.name,
              description: food.description,
              price:food.price,
              category:food.category,
              image:food.image   
           })  
       } else {   
            res.status(400)     
            throw new Error('Invalid food data') 
         }
      })


  
  
  export { getFoods,getFoodbyID,createFood }