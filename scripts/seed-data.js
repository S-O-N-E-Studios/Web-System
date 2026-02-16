/**
 * Database Seeding Script
 * Run: node scripts/seed-data.js
 *
 * Creates sample data for development and testing
 */

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', 'backend', '.env') });

// Import models (uncomment when models are ready)
// const User = require('../backend/src/models/User');
// const Project = require('../backend/src/models/Project');
// const Task = require('../backend/src/models/Task');
// const Sprint = require('../backend/src/models/Sprint');

const seedData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    // await User.deleteMany();
    // await Project.deleteMany();
    // await Task.deleteMany();
    // await Sprint.deleteMany();

    // Create users
    console.log('Creating users...');
    const users = [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin'
      },
      {
        name: 'Project Manager',
        email: 'pm@example.com',
        password: 'password123',
        role: 'project_manager'
      },
      {
        name: 'Developer One',
        email: 'dev1@example.com',
        password: 'password123',
        role: 'developer'
      },
      {
        name: 'Developer Two',
        email: 'dev2@example.com',
        password: 'password123',
        role: 'developer'
      }
    ];

    // const createdUsers = await User.create(users);
    // console.log(`Created ${createdUsers.length} users`);

    // Create projects
    console.log('Creating projects...');
    const projects = [
      {
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce application with payment integration',
        status: 'active',
        tags: ['react', 'node', 'mongodb']
      },
      {
        name: 'Mobile Banking App',
        description: 'Mobile banking application with real-time notifications',
        status: 'planning',
        tags: ['react-native', 'firebase']
      }
    ];

    // Create tasks
    console.log('Creating tasks...');
    const tasks = [
      {
        title: 'Set up project structure',
        description: 'Initialize the project with proper folder structure',
        status: 'done',
        priority: 'high'
      },
      {
        title: 'Implement user authentication',
        description: 'Add JWT-based authentication with login and register',
        status: 'in_progress',
        priority: 'critical'
      },
      {
        title: 'Design database schema',
        description: 'Create MongoDB schemas for all collections',
        status: 'todo',
        priority: 'medium'
      }
    ];

    console.log('');
    console.log('Seed data script ready.');
    console.log('Uncomment model imports and creation code when models are implemented.');
    console.log('');
    console.log('Sample data defined:');
    console.log(`- ${users.length} users`);
    console.log(`- ${projects.length} projects`);
    console.log(`- ${tasks.length} tasks`);

    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error.message);
    process.exit(1);
  }
};

seedData();
