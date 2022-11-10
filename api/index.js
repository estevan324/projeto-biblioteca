const express = require('express')
const routes = require('./routes')
const port = 3001
const server = express()

routes(server)

server.get('/', (req, res) => {
    return res.status(200).json({
        "message": "API is running..."
    })
})

server.listen(port, () => {
    console.log(`Server running in port ${port}`)
})

module.exports = server