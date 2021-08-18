import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import Product from './models/foodModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

//import sample data to database
const importData = async () => {
    try{
        await Product.deleteMany()




        const sampleProducts = products.map(product => {
            return { ...product}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    }catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

//destrom sample data from database
const destroyData = async () => {
    try{
      
        await Product.deleteMany()
        

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    }catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else {
    importData()
}