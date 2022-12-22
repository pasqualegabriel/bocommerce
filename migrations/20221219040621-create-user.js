'use strict'

const { roles, USER } = require('../src/constants/user')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      first_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      last_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dni: {
        allowNull: true,
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM,
        values: roles,
        defaultValue: USER,
        allowNull: false
      },
      invalidation_date: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}
