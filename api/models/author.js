'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Author.belongsToMany(models.Book, {
        through: models.book_has_authors
      })
    }
  }
  Author.init({
    name: DataTypes.STRING(45),
    birthDate: DataTypes.DATE,
    gender: DataTypes.ENUM({
      values: ['masculino', 'feminino', 'não identificado']
    })
  }, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors'
  });
  return Author;
};