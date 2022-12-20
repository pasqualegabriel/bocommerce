module.exports = (fastify) => {
  const { Product, Image } = fastify.db

  async function createProduct(body) {
    try {
      const product = await Product.create(body)
      const id = product.id || product.dataValues.id
      await Image.bulkCreate(body.images.map(url => ({ fk_productid: id, url })))
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
