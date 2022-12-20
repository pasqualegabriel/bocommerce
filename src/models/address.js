'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      // define association here
    }
  }
  Address.init({
    cp: {
      allowNull: false,
      type: DataTypes.DATE
    },
    street: {
      allowNull: false,
      type: DataTypes.STRING
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nro: {
      allowNull: false,
      type: DataTypes.STRING
    },
    province: {
      allowNull: false,
      type: DataTypes.STRING
    },
    details: {
      allowNull: false,
      type: DataTypes.STRING
    },
    doorbell: {
      allowNull: true,
      type: DataTypes.STRING
    },
    main: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
    modelName: 'Address',
    tableName: 'addresses',
    underscored: true
  })
  return Address
}
