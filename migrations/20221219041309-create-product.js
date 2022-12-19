'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      old_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      discount: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sub_category: {
        allowNull: true,
        type: Sequelize.STRING
      },
      promotion: {
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
    await queryInterface.dropTable('products')
  }
}
