'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // models.file.hasMany(models.request, { foreignKey: 'fk_fileid', sourceKey: 'id' })
    }
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    underscored: true
  })
  return Product
}
