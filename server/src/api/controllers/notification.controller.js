const { Notification } = require('../models');
const { validateNotification } = require('../validations/notification');
/**
 * Retrieves all notifications.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function getAllNotification(req, res, next) {
  const notifications = await Notification.findAll();
  res.status(200).json(notifications);
}

/**
 * Adds a notification.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
async function addNotification(req, res, next) {
  const { error } = validateNotification(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const { message_title, message } = req.body;

  const notification = await Notification.create({
    message_title: message_title,
    message: message,
    added_at: new Date(),
  });

  res.status(201).json({ status: true, notification });
}

module.exports = {
  getAllNotification,
  addNotification,
};
