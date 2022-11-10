const bodyParser = require('body-parser')
const cors = require('cors')

const books = require('./booksRoute')
const authors = require('./authorsRoute')

module.exports = (server) => {
    server.use(bodyParser.json())
    server.use(cors())
    
    server.use(books)
    server.use(authors)
}

