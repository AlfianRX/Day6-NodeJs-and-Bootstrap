// import express
const express = require('express')

// use express
const app = express()

// endpoimt

app.get('/', function (req, res) {
    res.send('Welcome to My World')
})

// port
const port = 3000
app.listen(port, function () {
    console.log(`server running on port : ${port}`);
})