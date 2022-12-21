'use strict'

const { BUYING, states } = require('../src/constants/product')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('buys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fk_userid: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      total_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      state: {
        type: Sequelize.ENUM,
        values: states,
        defaultValue: BUYING,
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
    await queryInterface.dropTable('buys')
  }
}
