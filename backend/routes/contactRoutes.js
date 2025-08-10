const express = require('express');
const {
  createSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  deleteSubmission,
  getStats
} = require('../controllers/contactController');

const router = express.Router();

// Public routes
router.post('/', createSubmission);

// Admin routes (in a real app, these would be protected with authentication middleware)
router.get('/stats', getStats);
router.get('/', getSubmissions);
router.get('/:id', getSubmission);
router.put('/:id', updateSubmission);
router.delete('/:id', deleteSubmission);

module.exports = router;