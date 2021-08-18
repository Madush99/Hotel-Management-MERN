import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import path from 'path'



//routes
import roomRoutes from './routes/roomsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import restaurentsRoutes from './routes/restaurentRoutes.js'
import weddingRoutes from './routes/weddingRoutes.js'
import conferenceRoutes from './routes/conferenceRoutes.js'
import conInsideRoutes from './routes/conInsideRoute.js'
import uploadRoutes from './routes/uploadRoutes.js'
 

dotenv.config()

//connect database
connectDB()

const app = express()

app.use(cors())

if (process.env.NODE_ENV === 'development') {
      app.use(morgan('dev'))
}


app.use(express.json())

app.get('/', (req, res) => {
      res.send('API is running...')
})

//calling routes
app.use('/api/rooms', roomRoutes)
app.use('/api/users', userRoutes)
app.use('/api/restaurents', restaurentsRoutes)
app.use('/api/weddings', weddingRoutes)
app.use('/api/conference', conferenceRoutes)
app.use('/api/conInside', conInsideRoutes)
app.use('/api/uploads', uploadRoutes)

const __dirname = path.resolve()
app.use('/images', express.static(path.join(__dirname, '/images')))

//create port 
const PORT = process.env.PORT || 6500

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))
