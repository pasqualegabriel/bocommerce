'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      models.Product.hasMany(models.Image, { foreignKey: 'fk_productid', sourceKey: 'id' })
      models.Product.hasMany(models.Review, { foreignKey: 'fk_productid', sourceKey: 'id' })
    }
  }
  Product.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    oldPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'old_price',
      defaultValue: 0.0
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subCategory: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'sub_category'
    },
    promotion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
  }, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    underscored: true
  })
  return Product
}
