module.exports = (sequelize, DataTypes) => {
  const Properties = sequelize.define('Properties', {
    property_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    property_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    property_value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Properties;
};
