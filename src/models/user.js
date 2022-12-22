'use strict'
const { Model } = require('sequelize')
const { roles, USER } = require('../constants/user')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasMany(models.Order, { foreignKey: 'fk_userid', sourceKey: 'id' })
      models.User.hasMany(models.Address, { foreignKey: 'fk_userid', sourceKey: 'id' })
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      allowNull: true,
      type: DataTypes.STRING
    },
    dni: {
      allowNull: true,
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM,
      values: roles,
      defaultValue: USER,
      allowNull: false
    },
    invalidationDate: {
      type: DataTypes.DATE,
      field: 'invalidation_date',
      defaultValue: new Date()
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
    modelName: 'User',
    underscored: true,
    tableName: 'users'
  })
  return User
}
