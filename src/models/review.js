'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    rated: DataTypes.STRING,
    commentary: DataTypes.FLOAT,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    name: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
    underscored: true
  })
  return Review
}
