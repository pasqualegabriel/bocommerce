'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    static associate(models) {
      models.Purchase.belongsTo(models.Buy, { foreignKey: 'fk_buyid', targetKey: 'id' })
    }
  }
  Purchase.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    productId: {
      allowNull: false,
      type: DataTypes.BIGINT,
      field: 'product_id'
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'Purchase',
    tableName: 'purchases',
    underscored: true
  })
  return Purchase
}
