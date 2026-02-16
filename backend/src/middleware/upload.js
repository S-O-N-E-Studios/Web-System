const multer = require('multer');
const { FILE_UPLOAD } = require('../config/constants');

// Configure multer for memory storage (for S3/Azure upload)
const storage = multer.memoryStorage();

// File filter
const fileFilter = (req, file, cb) => {
  if (FILE_UPLOAD.ALLOWED_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(`File type '${file.mimetype}' is not allowed`), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: FILE_UPLOAD.MAX_SIZE
  }
});

module.exports = upload;
