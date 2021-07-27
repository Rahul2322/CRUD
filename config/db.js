require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = ()=>{
    //Database Connection
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
    })
    
    const db = mongoose.connection;
    db.once('open',()=>console.log('Database Connected'))
    .catch(err=>console.log('Connection failed'))
}

module.exports = connectDB