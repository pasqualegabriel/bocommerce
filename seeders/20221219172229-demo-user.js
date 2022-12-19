const { adminUser: { firstName, lastName, email } } = require('../config/variables')
const { ADMIN } = require('../src/constants/user')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first_name: firstName,
      last_name: lastName,
      role: ADMIN,
      email,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
