const { getPageParams, substring } = require('../helpers')
const { pickBy } = require('lodash')

module.exports = (fastify) => {
  const { Product, Image, Sequelize: { Op } } = fastify.db

  async function products(query) {
    try {
      const { limit, offset } = getPageParams(query)
      const { count, rows: products } = await getProducts(query, offset, limit)
      return {
        products,
        totalPages: limit ? Math.ceil(count / limit) : 1
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  function getProducts({ title, stock: stockQuery, minPrice = 0.0, maxPrice, promotion, category, field = 'created_at', order: orderBy = 'desc' }, offset, limit) {
    const order = field && orderBy ? [[field, orderBy]] : []
    const stock = stockQuery ? { [Op.gt]: 0 } : 0
    const price = maxPrice ? {
      [Op.and]: {
        [Op.gte]: minPrice,
        [Op.lte]: maxPrice
      }
    } : { [Op.gte]: minPrice }
    const where = pickBy({
      title: substring(title),
      price,
      category,
      stock,
      promotion
    })
    return Product.findAndCountAll({
      where,
      ...pickBy({ offset, limit }),
      include: [{ model: Image }],
      order
    })
  }

  return {
    products
  }
}
