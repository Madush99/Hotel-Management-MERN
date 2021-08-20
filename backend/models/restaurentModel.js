import mongoose from 'mongoose'

const restaurentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    tables:{
        type: Number,
        required: true,
        default: 0
    },
    phoneNo:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    images:[],
    description:{
        type: String,
        required: true,
    },
   
}, {
    timestamps: true
})

const Restaurent = mongoose.model('restaurent', restaurentSchema)

export default Restaurent
