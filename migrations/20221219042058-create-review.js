'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      rated: {
        allowNull: false,
        type: Sequelize.STRING
      },
      commentary: {
        allowNull: false,
        type: Sequelize.STRING
      },
      product_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('reviews')
  }
}
