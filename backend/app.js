const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
const cors = require('cors')
require('dotenv').config()

app.use(cors({
    origin:'*'
}))
app.use(express.json())

const port = 3005;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server Listening on PORT '+port))
    }catch(error){
        console.log(error)
    }
}

start()

app.use('/profile/', tasks)
