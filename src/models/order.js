'use strict'
const { Model } = require('sequelize')
const { states, BUYING } = require('../constants/product')

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      models.Order.hasMany(models.Booking, { foreignKey: 'fk_orderid', sourceKey: 'id' })
      models.Order.belongsTo(models.User, { foreignKey: 'fk_userid', targetKey: 'id' })
      models.Order.hasOne(models.Address, { foreignKey: 'fk_orderid', sourceKey: 'id' })
    }
  }
  Order.init({
    code: {
      allowNull: true,
      type: DataTypes.STRING
    },
    total_price: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    user_id: {
      allowNull: false,
      type: DataTypes.BIGINT
    },
    state: {
      type: DataTypes.ENUM,
      values: states,
      defaultValue: BUYING,
      allowNull: false
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
    modelName: 'Order',
    tableName: 'orders',
    underscored: true
  })
  return Order
}
