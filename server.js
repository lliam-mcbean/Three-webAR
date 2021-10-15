const express = require('express')
const app = express()
const path = require('path')

app.set("/", "html")
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render
})

app.listen(8080, () => {
    console.log("Listening on localhost:8080")
})