const express = require('express')
const app = express()
const path = require('path');
const favicon = require('serve-favicon');
const moment = require('moment');


const port = 3000


app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



//Routes
const main = require("./routes/main")

app.use("/", main)
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})