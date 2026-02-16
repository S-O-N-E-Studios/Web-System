const express = require('express');
const router = express.Router();

// Import route modules (will be created in Sprint 2-4)
// const authRoutes = require('./authRoutes');
// const projectRoutes = require('./projectRoutes');
// const taskRoutes = require('./taskRoutes');
// const userRoutes = require('./userRoutes');
// const fileRoutes = require('./fileRoutes');

// Mount routes
// router.use('/auth', authRoutes);
// router.use('/projects', projectRoutes);
// router.use('/tasks', taskRoutes);
// router.use('/users', userRoutes);
// router.use('/files', fileRoutes);

// Temporary test route
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'API is working!',
    version: '1.0.0'
  });
});

module.exports = router;
