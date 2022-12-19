const {
  database: { user: username, password, db: database, host, dialect }
} = require('./variables')

module.exports = {
  username,
  password,
  database,
  host,
  dialect
}
