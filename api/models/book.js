'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasMany(models.BookHasAuthors, {
        foreignKey: 'book_id',
        onUpdate: 'cascade',
        onDelete: 'restrict'
      })
    }
  }
  Book.init({
    title: DataTypes.STRING(45),
    publicationDate: DataTypes.DATE,
    subtitle: DataTypes.STRING(45)
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'book'
  });
  return Book;
};