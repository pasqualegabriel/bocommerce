'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      models.Review.belongsTo(models.Product, { foreignKey: 'fk_productid', targetKey: 'id' })
    }
  }
  Review.init({
    rated: {
      allowNull: false,
      type: DataTypes.STRING
    },
    commentary: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.BIGINT,
      field: 'user_id'
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'Review',
    tableName: 'reviews',
    underscored: true
  })
  return Review
}
