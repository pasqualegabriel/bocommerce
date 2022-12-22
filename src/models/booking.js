'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      models.Booking.belongsTo(models.Order, { foreignKey: 'fk_orderid', targetKey: 'id' })
    }
  }
  Booking.init({
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
    modelName: 'Booking',
    tableName: 'bookings',
    underscored: true
  })
  return Booking
}
