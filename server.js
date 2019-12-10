const express = require('express');

const carRouter = require('./cars/carsRouter')

const server = express();

server.use(express.json())

server.use('/api/cars', carRouter)

server.get('/', (req, res)=>{
    res.send('<h3>It has begun!<h3>')
})

module.exports = server;