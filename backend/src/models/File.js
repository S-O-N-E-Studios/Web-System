const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema(
  {
    originalName: {
      type: String,
      required: [true, 'File must have an original name']
    },
    fileName: {
      type: String,
      required: [true, 'File must have a stored file name']
    },
    mimeType: {
      type: String,
      required: [true, 'File must have a MIME type']
    },
    size: {
      type: Number,
      required: [true, 'File must have a size']
    },
    storageUrl: {
      type: String,
      required: [true, 'File must have a storage URL']
    },
    storageKey: {
      type: String,
      required: [true, 'File must have a storage key']
    },
    uploadedBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    project: {
      type: mongoose.Schema.ObjectId,
      ref: 'Project'
    },
    task: {
      type: mongoose.Schema.ObjectId,
      ref: 'Task'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('File', FileSchema);
