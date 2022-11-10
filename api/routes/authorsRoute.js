const { Router } = require('express')
const routes = Router()
const authorController = require('../controllers/AuthorController')

routes.get('/authors', authorController.showAuthors)
routes.post('/authors', authorController.createAuthor)
routes.patch('/authors/id/:id', authorController.updateAuthor)
routes.delete('/authors/id/:id', authorController.deleteAuthor)

module.exports = routes