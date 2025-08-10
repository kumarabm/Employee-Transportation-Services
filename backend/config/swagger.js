
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TransportPro API',
      version: '1.0.0',
      description: 'Employee Transportation Services API with MongoDB',
      contact: {
        name: 'TransportPro Support',
        email: 'support@transportpro.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
      {
        url: 'https://your-production-domain.com',
        description: 'Production server'
      }
    ],
    components: {
      schemas: {
        ContactSubmission: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'phone', 'company', 'employeeCount', 'serviceTypes'],
          properties: {
            _id: {
              type: 'string',
              description: 'Unique identifier for the submission'
            },
            firstName: {
              type: 'string',
              maxLength: 50,
              description: 'First name of the contact person'
            },
            lastName: {
              type: 'string',
              maxLength: 50,
              description: 'Last name of the contact person'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email address of the contact person'
            },
            phone: {
              type: 'string',
              description: 'Phone number of the contact person'
            },
            company: {
              type: 'string',
              maxLength: 100,
              description: 'Company name'
            },
            employeeCount: {
              type: 'string',
              enum: ['1-10', '11-50', '51-200', '201-500', '500+'],
              description: 'Number of employees in the company'
            },
            serviceTypes: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['Employee Shuttles', 'Corporate Cars', 'Airport Transfers', 'Event Transportation']
              },
              description: 'Types of services requested'
            },
            message: {
              type: 'string',
              maxLength: 1000,
              description: 'Additional message or requirements'
            },
            status: {
              type: 'string',
              enum: ['new', 'contacted', 'quoted', 'closed'],
              default: 'new',
              description: 'Status of the submission'
            },
            notes: {
              type: 'string',
              maxLength: 500,
              description: 'Internal notes (admin only)'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Creation timestamp'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Last update timestamp'
            }
          }
        },
        ApiResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              description: 'Indicates if the request was successful'
            },
            message: {
              type: 'string',
              description: 'Response message'
            },
            data: {
              type: 'object',
              description: 'Response data'
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string'
                  },
                  message: {
                    type: 'string'
                  }
                }
              },
              description: 'Validation errors (if any)'
            }
          }
        },
        Stats: {
          type: 'object',
          properties: {
            total: {
              type: 'number',
              description: 'Total number of submissions'
            },
            recent: {
              type: 'number',
              description: 'Number of submissions in the last 30 days'
            },
            byStatus: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string'
                  },
                  count: {
                    type: 'number'
                  }
                }
              }
            },
            byServiceType: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string'
                  },
                  count: {
                    type: 'number'
                  }
                }
              }
            },
            byEmployeeCount: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string'
                  },
                  count: {
                    type: 'number'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js', './controllers/*.js']
};

const specs = swaggerJSDoc(options);

module.exports = { specs, swaggerUi };
