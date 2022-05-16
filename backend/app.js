const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

app.use(express.json())

const port = 3000;
app.listen(port, console.log('Listening on PORT '+port))


app.use('/', tasks)
