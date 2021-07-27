require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT

const connectDB = require('./config/db')()

const app= express()

app.use(express.urlencoded({extended:false}))
app.use('/api',require('./Routes/index'))

app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))