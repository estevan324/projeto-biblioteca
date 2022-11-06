const { Router } = require('express')
const routes = Router()
const bookController = require('../controllers/BookController')

routes.get('/books', bookController.showBooks)
routes.post('/books', bookController.createBook)
routes.patch('/books/id/:id', bookController.updateBook)
routes.delete('/books/id/:id', bookController.deleteBook)

module.exports = routes