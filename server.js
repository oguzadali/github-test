const express = require('express')
const app = express()
const path = require('path');
const favicon = require('serve-favicon');



const port = 3000


app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



//Routes
const main = require("./routes/main")

app.use("/", main)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})