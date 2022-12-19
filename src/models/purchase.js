'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate(models) {
      // define association here
    }
  }
  Purchase.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    productId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchase',
    tableName: 'purchases',
    underscored: true
  })
  return Purchase
}
