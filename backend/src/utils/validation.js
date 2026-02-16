const Joi = require('joi');

// User validation schemas
const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required().messages({
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name cannot exceed 50 characters',
    'any.required': 'Name is required'
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email',
    'any.required': 'Email is required'
  }),
  password: Joi.string().min(6).max(128).required().messages({
    'string.min': 'Password must be at least 6 characters',
    'any.required': 'Password is required'
  }),
  role: Joi.string().valid('admin', 'project_manager', 'developer', 'viewer')
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Project validation schemas
const createProjectSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  description: Joi.string().trim().max(2000).required(),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')),
  tags: Joi.array().items(Joi.string()),
  location: Joi.object({
    address: Joi.string()
  })
});

const updateProjectSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100),
  description: Joi.string().trim().max(2000),
  status: Joi.string().valid('planning', 'active', 'on_hold', 'completed', 'cancelled'),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  tags: Joi.array().items(Joi.string())
}).min(1);

// Task validation schemas
const createTaskSchema = Joi.object({
  title: Joi.string().trim().min(2).max(200).required(),
  description: Joi.string().trim().max(5000),
  project: Joi.string().required(),
  priority: Joi.string().valid('low', 'medium', 'high', 'critical'),
  assignee: Joi.string(),
  dueDate: Joi.date().iso(),
  estimatedHours: Joi.number().min(0),
  tags: Joi.array().items(Joi.string())
});

const updateTaskSchema = Joi.object({
  title: Joi.string().trim().min(2).max(200),
  description: Joi.string().trim().max(5000),
  status: Joi.string().valid('todo', 'in_progress', 'in_review', 'done'),
  priority: Joi.string().valid('low', 'medium', 'high', 'critical'),
  assignee: Joi.string().allow(null),
  dueDate: Joi.date().iso().allow(null),
  estimatedHours: Joi.number().min(0),
  loggedHours: Joi.number().min(0),
  tags: Joi.array().items(Joi.string()),
  order: Joi.number()
}).min(1);

module.exports = {
  registerSchema,
  loginSchema,
  createProjectSchema,
  updateProjectSchema,
  createTaskSchema,
  updateTaskSchema
};
