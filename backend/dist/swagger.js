import swaggerJSDoc from 'swagger-jsdoc';
const definition = {
    openapi: '3.0.1',
    info: {
        title: 'aSync – Corporate Social Network API',
        description: 'Backend REST API for the internal corporate social network.',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Generated server url'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: {
            RegisterRequest: {
                type: 'object',
                required: ['email', 'name', 'password'],
                properties: {
                    name: { type: 'string', maxLength: 120, minLength: 2 },
                    email: { type: 'string', maxLength: 180 },
                    password: { type: 'string', minLength: 8 }
                }
            },
            LoginRequest: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string' },
                    password: { type: 'string' }
                }
            },
            AuthResponse: {
                type: 'object',
                properties: {
                    token: { type: 'string' },
                    tokenType: { type: 'string', example: 'Bearer' }
                }
            },
            MessageResponse: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
            UpdateUserProfileRequest: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: { type: 'string', maxLength: 120 },
                    avatarUrl: { type: 'string', maxLength: 500, nullable: true }
                }
            },
            UserProfileResponse: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    name: { type: 'string' },
                    email: { type: 'string' },
                    avatarUrl: { type: 'string', nullable: true }
                }
            },
            PostRequest: {
                type: 'object',
                required: ['subject', 'content', 'topics'],
                properties: {
                    subject: { type: 'string', maxLength: 200 },
                    content: { type: 'string', maxLength: 2000 },
                    topics: { type: 'array', items: { type: 'string' } },
                    imageUrl: { type: 'string', maxLength: 500, nullable: true }
                }
            },
            PostResponse: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    userId: { type: 'integer', format: 'int64' },
                    authorName: { type: 'string' },
                    authorAvatarUrl: { type: 'string', nullable: true },
                    subject: { type: 'string' },
                    content: { type: 'string' },
                    topics: { type: 'array', items: { type: 'string' } },
                    imageUrl: { type: 'string', nullable: true },
                    createdAt: { type: 'string', format: 'date-time' },
                    updatedAt: { type: 'string', format: 'date-time' },
                    commentsCount: { type: 'integer' },
                    likeCount: { type: 'integer' },
                    loveCount: { type: 'integer' }
                }
            },
            CreateCommentRequest: {
                type: 'object',
                required: ['postId', 'comment'],
                properties: {
                    postId: { type: 'integer', format: 'int64' },
                    comment: { type: 'string', maxLength: 1000 }
                }
            },
            CommentResponse: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    postId: { type: 'integer', format: 'int64' },
                    userId: { type: 'integer', format: 'int64' },
                    authorName: { type: 'string' },
                    authorAvatarUrl: { type: 'string', nullable: true },
                    comment: { type: 'string' },
                    createdAt: { type: 'string', format: 'date-time' }
                }
            },
            ReactionRequest: {
                type: 'object',
                required: ['postId', 'type'],
                properties: {
                    postId: { type: 'integer', format: 'int64' },
                    type: { type: 'string', enum: ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'] }
                }
            },
            ReactionResponse: {
                type: 'object',
                properties: {
                    id: { type: 'integer', format: 'int64' },
                    postId: { type: 'integer', format: 'int64' },
                    userId: { type: 'integer', format: 'int64' },
                    type: { type: 'string', enum: ['LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY'] }
                }
            }
        }
    },
    security: [{ bearerAuth: [] }],
    paths: {
        '/auth/register': {
            post: {
                tags: ['Authentication'],
                summary: 'Register a new user',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/RegisterRequest' } } }, required: true },
                responses: { '201': { description: 'User registered', content: { 'application/json': { schema: { $ref: '#/components/schemas/MessageResponse' } } } } },
                security: []
            }
        },
        '/auth/login': {
            post: {
                tags: ['Authentication'],
                summary: 'Login and receive a JWT token',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } }, required: true },
                responses: { '200': { description: 'Authentication successful', content: { 'application/json': { schema: { $ref: '#/components/schemas/AuthResponse' } } } } },
                security: []
            }
        },
        '/auth/verify': {
            get: {
                tags: ['Authentication'],
                summary: 'Verify e-mail address',
                parameters: [{ name: 'token', in: 'query', required: true, schema: { type: 'string' } }],
                responses: { '200': { description: 'E-mail verified', content: { 'application/json': { schema: { $ref: '#/components/schemas/MessageResponse' } } } } },
                security: []
            }
        },
        '/auth/resend-verification': {
            post: {
                tags: ['Authentication'],
                summary: 'Resend verification email',
                parameters: [{ name: 'email', in: 'query', required: true, schema: { type: 'string' } }],
                responses: { '200': { description: 'Verification email resent', content: { 'application/json': { schema: { $ref: '#/components/schemas/MessageResponse' } } } } },
                security: []
            }
        },
        '/users/me': {
            put: {
                tags: ['Users'],
                summary: 'Update current user profile',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/UpdateUserProfileRequest' } } }, required: true },
                responses: { '200': { description: 'Profile updated', content: { 'application/json': { schema: { $ref: '#/components/schemas/UserProfileResponse' } } } } }
            }
        },
        '/posts': {
            get: {
                tags: ['Posts'],
                summary: 'List all posts',
                responses: { '200': { description: 'List of posts', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/PostResponse' } } } } } }
            },
            post: {
                tags: ['Posts'],
                summary: 'Create a new post',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/PostRequest' } } }, required: true },
                responses: { '201': { description: 'Post created', content: { 'application/json': { schema: { $ref: '#/components/schemas/PostResponse' } } } } }
            }
        },
        '/posts/{id}': {
            get: {
                tags: ['Posts'],
                summary: 'Get post by id',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { '200': { description: 'Post', content: { 'application/json': { schema: { $ref: '#/components/schemas/PostResponse' } } } } }
            },
            put: {
                tags: ['Posts'],
                summary: 'Update an existing post (owner only)',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/PostRequest' } } }, required: true },
                responses: { '200': { description: 'Post updated', content: { 'application/json': { schema: { $ref: '#/components/schemas/PostResponse' } } } } }
            },
            delete: {
                tags: ['Posts'],
                summary: 'Delete a post (owner only)',
                parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { '200': { description: 'Post deleted', content: { 'application/json': { schema: { $ref: '#/components/schemas/MessageResponse' } } } } }
            }
        },
        '/comments': {
            post: {
                tags: ['Comments'],
                summary: 'Add a comment to a post',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateCommentRequest' } } }, required: true },
                responses: { '201': { description: 'Comment created', content: { 'application/json': { schema: { $ref: '#/components/schemas/CommentResponse' } } } } }
            }
        },
        '/comments/{postId}': {
            get: {
                tags: ['Comments'],
                summary: 'List all comments for a post',
                parameters: [{ name: 'postId', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: { '200': { description: 'Comment list', content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/CommentResponse' } } } } } }
            }
        },
        '/reactions': {
            post: {
                tags: ['Reactions'],
                summary: 'React to a post',
                requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/ReactionRequest' } } }, required: true },
                responses: { '201': { description: 'Reaction saved', content: { 'application/json': { schema: { $ref: '#/components/schemas/ReactionResponse' } } } } }
            }
        }
    }
};
export const swaggerSpec = swaggerJSDoc({
    definition,
    apis: []
});
