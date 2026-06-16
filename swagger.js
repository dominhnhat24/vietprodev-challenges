// Swagger describes the API contract so you can test endpoints in /api-docs.
const swaggerSpec = {
    openapi: '3.0.0',
    info: {
        title: 'VietProDev Online Training API',
        version: '1.0.0',
        description: 'Challenge 2 APIs for courses and classes'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server'
        }
    ],
    components: {
        schemas: {
            Course: {
                type: 'object',
                properties: {
                    course_id: { type: 'integer', example: 1 },
                    course_name: { type: 'string', example: 'Node.js Backend' },
                    description: { type: 'string', nullable: true, example: 'Build REST APIs with Express and Sequelize' }
                }
            },
            Class: {
                type: 'object',
                properties: {
                    class_id: { type: 'integer', example: 1 },
                    course_id: { type: 'integer', example: 1 },
                    class_name: { type: 'string', example: 'Node.js Backend K01' }
                }
            },
            CreateCourseRequest: {
                type: 'object',
                required: ['course_name'],
                properties: {
                    course_name: { type: 'string', example: 'Node.js Backend' },
                    description: { type: 'string', nullable: true, example: 'Build REST APIs with Express and Sequelize' }
                }
            },
            CreateClassRequest: {
                type: 'object',
                required: ['course_id', 'class_name'],
                properties: {
                    course_id: { type: 'integer', example: 1 },
                    class_name: { type: 'string', example: 'Node.js Backend K01' }
                }
            },
            SuccessResponse: {
                type: 'object',
                properties: {
                    status: { type: 'string', example: 'success' },
                    message: { type: 'string', example: 'Operation completed successfully' },
                    data: { type: 'object', nullable: true }
                }
            },
            ErrorResponse: {
                type: 'object',
                properties: {
                    status: { type: 'string', example: 'error' },
                    message: { type: 'string', example: 'Validation failed' },
                    violations: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                field: { type: 'string', example: 'course_name' },
                                message: { type: 'string', example: 'course_name is required' }
                            }
                        }
                    }
                }
            }
        }
    },
    paths: {
        '/api/courses': {
            get: {
                tags: ['Courses'],
                summary: 'Get all courses',
                responses: {
                    200: { description: 'Courses retrieved successfully' }
                }
            },
            post: {
                tags: ['Courses'],
                summary: 'Create a course',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/CreateCourseRequest' }
                        }
                    }
                },
                responses: {
                    201: { description: 'Course created successfully' },
                    400: { description: 'Validation failed' }
                }
            }
        },
        '/api/courses/{id}': {
            get: {
                tags: ['Courses'],
                summary: 'Get a course by id',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: 'Course retrieved successfully' },
                    404: { description: 'Course not found' }
                }
            },
            put: {
                tags: ['Courses'],
                summary: 'Update a course',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/CreateCourseRequest' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Course updated successfully' },
                    400: { description: 'Validation failed' },
                    404: { description: 'Course not found' }
                }
            },
            delete: {
                tags: ['Courses'],
                summary: 'Delete a course',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: 'Course deleted successfully' },
                    404: { description: 'Course not found' },
                    409: { description: 'Course still has classes' }
                }
            }
        },
        '/api/classes': {
            get: {
                tags: ['Classes'],
                summary: 'Get all classes',
                responses: {
                    200: { description: 'Classes retrieved successfully' }
                }
            },
            post: {
                tags: ['Classes'],
                summary: 'Create a class',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/CreateClassRequest' }
                        }
                    }
                },
                responses: {
                    201: { description: 'Class created successfully' },
                    400: { description: 'Validation failed' }
                }
            }
        },
        '/api/classes/{id}': {
            get: {
                tags: ['Classes'],
                summary: 'Get a class by id',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: 'Class retrieved successfully' },
                    404: { description: 'Class not found' }
                }
            },
            put: {
                tags: ['Classes'],
                summary: 'Update a class',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/CreateClassRequest' }
                        }
                    }
                },
                responses: {
                    200: { description: 'Class updated successfully' },
                    400: { description: 'Validation failed' },
                    404: { description: 'Class not found' }
                }
            },
            delete: {
                tags: ['Classes'],
                summary: 'Delete a class',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: 'Class deleted successfully' },
                    404: { description: 'Class not found' },
                    409: { description: 'Class still has enrollments' }
                }
            }
        }
    }
};

module.exports = swaggerSpec;
