const {
  Sequelize: { Op }
} = require('../models')

exports.generateNewPassword = (size = -10) =>
  Math.random()
    .toString(36)
    .slice(size)

exports.generateNewCode = () => exports.generateNewPassword(-8)

exports.getPageParams = ({ page: currentPage = 0, limit: currentLimit = 0 }) => {
  const page = parseInt(currentPage)
  const limit = parseInt(currentLimit)
  const offset = (page - 1) * limit
  return { page, limit, offset: offset < 0 ? 0 : offset }
}

exports.substring = field => field && { [Op.substring]: field }
