'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_has_authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book_has_authors.init({
    AuthorId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_has_authors',
  });
  return book_has_authors;
};