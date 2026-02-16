const Joi = require('joi');

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  PORT: Joi.number().default(5000),
  MONGODB_URI: Joi.string().required().description('MongoDB connection URI'),
  JWT_SECRET: Joi.string().required().description('JWT secret key'),
  JWT_EXPIRE: Joi.string().default('7d').description('JWT expiration time'),
  ALLOWED_ORIGINS: Joi.string().default('http://localhost:3000'),
  GOOGLE_MAPS_API_KEY: Joi.string().allow('').optional(),
  AWS_ACCESS_KEY_ID: Joi.string().allow('').optional(),
  AWS_SECRET_ACCESS_KEY: Joi.string().allow('').optional(),
  AWS_REGION: Joi.string().default('us-east-1'),
  AWS_S3_BUCKET: Joi.string().allow('').optional()
})
  .unknown()
  .required();

const validateEnv = () => {
  const { error, value } = envSchema.validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
};

module.exports = validateEnv;
