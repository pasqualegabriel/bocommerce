'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    static associate(models) {
      models.Image.belongsTo(models.Product, { foreignKey: 'fk_productid', targetKey: 'id' })
    }
  }
  images.init({
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'images',
    modelName: 'Image',
    underscored: true
  })
  return images
}
