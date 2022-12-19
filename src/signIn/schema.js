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
      password: {
        type: 'string',
        description: 'password',
        minLength: 8
      }
    },
    required: [
      'email',
      'crm',
      'clientId',
      'accountId'
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
