import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'

dotenv.config()

//connect database
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
      app.use(morgan('dev'))
}


app.use(express.json())

app.get('/', (req, res) => {
      res.send('API is running...')
})


//create port 
const PORT = process.env.PORT || 6000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))
