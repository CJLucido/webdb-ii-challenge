
const server = require('./server')

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log(`Listening to port ${PORT}`)
})