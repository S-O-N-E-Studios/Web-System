const mongoose = require('mongoose');
const { SPRINT_STATUS } = require('../config/constants');

const SprintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a sprint name'],
      trim: true,
      maxlength: [100, 'Sprint name cannot be more than 100 characters']
    },
    goal: {
      type: String,
      maxlength: [500, 'Sprint goal cannot be more than 500 characters']
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project',
      required: [true, 'Sprint must belong to a project']
    },
    status: {
      type: String,
      enum: Object.values(SPRINT_STATUS),
      default: SPRINT_STATUS.PLANNING
    },
    startDate: {
      type: Date,
      required: [true, 'Please add a start date']
    },
    endDate: {
      type: Date,
      required: [true, 'Please add an end date']
    },
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

// Virtual populate tasks
SprintSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'sprint',
  justOne: false
});

module.exports = mongoose.model('Sprint', SprintSchema);
