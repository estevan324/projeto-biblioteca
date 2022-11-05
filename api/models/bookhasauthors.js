'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookHasAuthors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookHasAuthors.belongsTo(models.Author, {
        foreignKey: 'id'
      })
      BookHasAuthors.belongsTo(models.Book, {
        foreignKey: 'id'
      })
    }
  }
  BookHasAuthors.init({
    author_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookHasAuthors',
    tableName: 'book_has_authors'
  });
  return BookHasAuthors;
};