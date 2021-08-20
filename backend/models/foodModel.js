import mongoose from 'mongoose'

const foodSchema = mongoose.Schema({

   
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: String,
        required: true,
    },
    images:[]
   
}, {
    timestamps: true
})

const Food = mongoose.model('food', foodSchema)
 
export default Food
