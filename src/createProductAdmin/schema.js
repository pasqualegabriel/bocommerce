const schema = {
  tags: ['products'],
  summary: 'Create product',
  description: 'Create product',
  body: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        description: 'title',
        minLength: 1
      },
      description: {
        type: 'string',
        description: 'description'
      },
      price: {
        type: 'number',
        description: 'price'
      },
      stock: {
        type: 'integer',
        description: 'stock'
      }
    },
    required: [
      'title',
      'price',
      'stock'
    ]
  },
  response: {
    200: {
      type: 'object',
      properties: {
        status: {
          type: 'string'
        }
      }
    },
    400: {
      description: 'Bad request',
      type: 'object',
      properties: {
        error: { type: 'string' },
        message: { type: 'string' }
      }
    },
    403: {
      description: 'Forbidden',
      type: 'object',
      properties: {
        error: { type: 'string' },
        message: { type: 'string' }
      }
    },
    404: {
      description: 'Could not provision',
      type: 'object',
      properties: {
        error: { type: 'string' },
        message: { type: 'string' }
      }
    },
    500: {
      description: 'Generic server error',
      type: 'object',
      properties: {
        error: { type: 'string' },
        message: { type: 'string' }
      }
    }
  }
}

module.exports = schema
