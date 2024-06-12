const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message)
    }
}

module.exports = dbconnect