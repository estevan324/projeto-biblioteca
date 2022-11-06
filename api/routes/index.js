const bodyParser = require('body-parser')

const books = require('./booksRoute')
const authors = require('./authorsRoute')

module.exports = (server) => {
    server.use(bodyParser.json())
    
    server.use(books)
    server.use(authors)
}

