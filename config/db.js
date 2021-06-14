const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    console.log('Server connected to MongoDB ✅'.green)
  } catch (error) {
    console.log('Failed to connect to MongoDB')
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = connectDB
