const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile('E:/masaüstü/git-test/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})