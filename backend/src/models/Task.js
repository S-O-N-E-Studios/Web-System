const mongoose = require('mongoose');
const { TASK_STATUS, TASK_PRIORITY } = require('../config/constants');

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a task title'],
      trim: true,
      maxlength: [200, 'Task title cannot be more than 200 characters']
    },
    description: {
      type: String,
      maxlength: [5000, 'Description cannot be more than 5000 characters']
    },
    status: {
      type: String,
      enum: Object.values(TASK_STATUS),
      default: TASK_STATUS.TODO
    },
    priority: {
      type: String,
      enum: Object.values(TASK_PRIORITY),
      default: TASK_PRIORITY.MEDIUM
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: [true, 'Task must belong to a project']
    },
    sprint: {
      type: mongoose.Schema.ObjectId,
      ref: 'Sprint'
    },
    assignee: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    reporter: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    dueDate: {
      type: Date
    },
    estimatedHours: {
      type: Number,
      min: [0, 'Estimated hours cannot be negative']
    },
    loggedHours: {
      type: Number,
      default: 0,
      min: [0, 'Logged hours cannot be negative']
    },
    tags: [String],
    attachments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'File'
      }
    ],
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Index for efficient querying
TaskSchema.index({ project: 1, status: 1 });
TaskSchema.index({ assignee: 1, status: 1 });

module.exports = mongoose.model('Task', TaskSchema);
