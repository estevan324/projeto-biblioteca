const { Op } = require('sequelize')
const database = require('../models')

class BookController {

    static async showBooks(req, res) {
        try {
            const allBooks = await database.Book.findAll({
                include: database.Author
            })
            return res.status(200).json(allBooks)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createBook(req, res) {
        const newBook = req.body

        try {
            const newBookCreated = await database.Book.create(newBook, {
                include: database.Author
            })
            return res.status(201).json(newBookCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateBook(req, res) {
        const { id } = req.params
        const newDatas = req.body

        try {
            await database.Book.update(newDatas, {
                where: {
                    id: Number(id)
                }
            })

            const updatedBook = await database.Book.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(updatedBook)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteBook(req, res) {
        const { id } = req.params

        try {
            await database.Book.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                message: `Book id: ${id} deleted!`
            })

        } catch(error) {
            return res.status(500).json(error.message)
        }
    } 
}

module.exports = BookController