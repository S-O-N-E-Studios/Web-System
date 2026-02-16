// Task Controller
// Handles task management logic

// const Task = require('../models/Task');

/**
 * @desc    Get all tasks
 * @route   GET /api/v1/tasks
 * @access  Private
 */
const getTasks = async (req, res, next) => {
  try {
    // TODO: Implement get all tasks with filtering by project, status, assignee
    res.status(200).json({
      success: true,
      message: 'Get tasks endpoint - To be implemented in Sprint 3'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single task
 * @route   GET /api/v1/tasks/:id
 * @access  Private
 */
const getTask = async (req, res, next) => {
  try {
    // TODO: Implement get single task
    res.status(200).json({
      success: true,
      message: 'Get task endpoint - To be implemented in Sprint 3'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create new task
 * @route   POST /api/v1/tasks
 * @access  Private
 */
const createTask = async (req, res, next) => {
  try {
    // TODO: Implement create task
    res.status(201).json({
      success: true,
      message: 'Create task endpoint - To be implemented in Sprint 3'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update task
 * @route   PUT /api/v1/tasks/:id
 * @access  Private
 */
const updateTask = async (req, res, next) => {
  try {
    // TODO: Implement update task (including status changes for Kanban)
    res.status(200).json({
      success: true,
      message: 'Update task endpoint - To be implemented in Sprint 3'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete task
 * @route   DELETE /api/v1/tasks/:id
 * @access  Private
 */
const deleteTask = async (req, res, next) => {
  try {
    // TODO: Implement delete task
    res.status(200).json({
      success: true,
      message: 'Delete task endpoint - To be implemented in Sprint 3'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
