const schema = {
  tags: ['user'],
  summary: 'SignIn',
  description: 'Log in',
  body: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'email',
        format: 'email'
      },
      code: {
        type: 'string',
        description: 'password',
        minLength: 4
      }
    },
    required: [
      'email',
      'code'
    ]
  },
  response: {
    200: {
      type: 'object',
      properties: {
        jwt: { type: 'string' }
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
