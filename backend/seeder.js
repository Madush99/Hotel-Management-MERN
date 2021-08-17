import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import Food from './models/foodModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Food.deleteMany()

        const sampleProducts= products.map(product => {
            return {...product  }
        })

        await Food.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
     
}

const destroyData = async () => {
    try {
        await Food.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
     
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}