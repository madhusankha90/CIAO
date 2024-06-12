const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const authRoutes = require('./routes/auth.routes')
const messageRoutes = require('./routes/message.routes')
const dbconnect = require("./db/dbConnect")

dotenv.config()

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)



const port = process.env.PORT || 5000
app.listen(port, ()=>{ 
    dbconnect()
    console.log(`server is running on port ${port}`)})