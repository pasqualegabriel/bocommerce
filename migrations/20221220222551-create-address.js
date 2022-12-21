'use strict'

const { ADDRESS, states } = require('../src/constants/buy')

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_userid: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      fk_buyid: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'buys',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM,
        values: states,
        defaultValue: ADDRESS,
        allowNull: false
      },
      cp: {
        allowNull: false,
        type: Sequelize.STRING
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING
      },
      details: {
        allowNull: false,
        type: Sequelize.STRING
      },
      doorbell: {
        allowNull: true,
        type: Sequelize.STRING
      },
      main: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('addresses')
  }
}
