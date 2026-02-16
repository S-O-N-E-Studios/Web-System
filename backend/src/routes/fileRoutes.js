const express = require('express');
const router = express.Router();
const { getFile, deleteFile } = require('../controllers/fileController');
// const { protect } = require('../middleware/auth');
// const upload = require('../middleware/upload');

// All routes below require authentication
// router.use(protect);

// router.post('/upload', upload.single('file'), uploadFile);
router.route('/:id').get(getFile).delete(deleteFile);
// router.get('/:id/download', downloadFile);

module.exports = router;
