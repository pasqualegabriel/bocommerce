'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      models.Category.hasMany(models.Product, { foreignKey: 'fk_categoryid', sourceKey: 'id' })
    }
  }
  Category.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
    underscored: true
  })
  return Category
}
