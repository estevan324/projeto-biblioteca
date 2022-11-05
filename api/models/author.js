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
      Author.hasMany(models.BookHasAuthors, {
        foreignKey: 'author_id',
        onUpdate: 'cascade',
        onDelete: 'restrict'
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
    tableName: 'author'
  });
  return Author;
};