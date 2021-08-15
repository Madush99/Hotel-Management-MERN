import mongoose from 'mongoose'

const connectDB = async () => {
      //database connection
      try {
            const conn = await mongoose.connect(process.env.MONGO_URI, {
                  useUnifiedTopology: true,
                  useNewUrlParser: true,
                  useCreateIndex: true
            })
            //database connected alert
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
      } catch (error) {
            console.error(`Error: ${error.message}`.red.underline.bold) //database not connected message
            process.exit(1)
      }
}

export default connectDB  //exporting database