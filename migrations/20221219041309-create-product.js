'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      fk_categoryid: {
        type: Sequelize.BIGINT,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
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
        type: Sequelize.FLOAT,
        defaultValue: 0.0
      },
      discount: {
        allowNull: false,
        type: Sequelize.FLOAT,
        defaultValue: 0.0
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
      url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      brand: {
        allowNull: true,
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
    await queryInterface.dropTable('products')
  }
}
