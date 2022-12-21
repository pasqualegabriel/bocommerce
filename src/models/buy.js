'use strict'
const { Model } = require('sequelize')
const { states, BUYING } = require('../constants/product')

module.exports = (sequelize, DataTypes) => {
  class Buy extends Model {
    static associate(models) {
      models.Buy.hasMany(models.Purchase, { foreignKey: 'fk_buyid', sourceKey: 'id' })
      models.Buy.belongsTo(models.User, { foreignKey: 'fk_userid', targetKey: 'id' })
      models.Buy.hasOne(models.Address, { foreignKey: 'fk_buyid', sourceKey: 'id' })
    }
  }
  Buy.init({
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
    modelName: 'Buy',
    tableName: 'buys',
    underscored: true
  })
  return Buy
}
