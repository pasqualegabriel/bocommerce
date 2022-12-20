module.exports = (fastify) => {
  const { Product } = fastify.db

  async function createProduct(body) {
    try {
      await Product.create(body)
      return {
        status: 'ok'
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    createProduct
  }
}
