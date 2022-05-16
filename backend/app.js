const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config()

app.use(express.json())

const port = 3001;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server Listening on PORT '+port))
    }catch(error){
        console.log(error)
    }
}

start()

app.use('/', tasks)
