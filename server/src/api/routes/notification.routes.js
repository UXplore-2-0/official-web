const express = require('express');
const { auth, admin } = require('../middleware/auth');
const {
  getAllNotification,
  addNotification,
} = require('../controllers/notification.controller');

// create a router for handle the notification routes
const router = express.Router();

router.get('/', auth, getAllNotification);
router.post('/', auth, admin, addNotification);

module.exports = router;
