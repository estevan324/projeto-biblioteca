const { Op } = require('sequelize')
const database = require('../models')

class AuthorController{

    static async showAuthors(req, res) {
        try {
            const allAuthors = await database.Author.findAll({
                include: database.Book
            })
            return res.status(200).json(allAuthors)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createAuthor(req, res) {
        const newAuthor = req.body

        try {
            const newAuthorCreated = await database.Author.create(newAuthor, {
                include: database.Book
            })
            return res.status(201).json(newAuthorCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateAuthor(req, res) {
        const { id } = req.params
        const newDatas = req.body

        try {
            await database.Author.update(newDatas, {
                where: {
                    id: Number(id)
                }
            })

            const updatedAuthor = await database.Author.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(updatedAuthor)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteAuthor(req, res) {
        const { id } = req.params

        try {
            await database.Author.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                message: `Author id: ${id} deleted!`
            })

        } catch(error) {
            return res.status(500).json(error.message)
        }
    } 
}

module.exports = AuthorController