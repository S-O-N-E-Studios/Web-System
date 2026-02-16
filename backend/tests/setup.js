// Jest Test Configuration
// Sets up the test environment

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.PORT = 5001;
process.env.MONGODB_URI = process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/project_management_test';
process.env.JWT_SECRET = 'test_jwt_secret_key';
process.env.JWT_EXPIRE = '1d';

// Global test timeout
jest.setTimeout(30000);

// Clean up after all tests
afterAll(async () => {
  // Close any open connections
});
