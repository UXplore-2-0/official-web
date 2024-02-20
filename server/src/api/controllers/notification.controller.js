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
  const { message_title, message } = req.body;
  
    const notification = await Notification.create({
      message_title,
      message,
    });
    res.status(201).json(notification);
  
}
  
module.exports = {
  getAllNotification,
  addNotification,
};
