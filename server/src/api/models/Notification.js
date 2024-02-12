module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    notification_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message_title: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      validate: {
        len: [1, 1024],
      },
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Notification;
};
