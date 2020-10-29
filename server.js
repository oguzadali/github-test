const express = require('express')
const app = express()
const path = require('path');
var favicon = require('serve-favicon');


const port = 3000

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


const main = require("./routes/main")


app.use()
app.use("/", main)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})