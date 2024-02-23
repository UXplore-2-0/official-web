module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    member_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [1, 255],
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 255],
        isEmail: true,
      },
    },
    nic: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 15],
      },
    },
    uni_index: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },
    contact_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beverages: {
      type: DataTypes.ENUM('non-veg', 'veg'),
      allowNull: true,
    },
    is_leader: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });

  Member.associate = (models) => {
    // setup the association between Team and Member
    Member.belongsTo(models.Team, {
      foreignKey: {
        name: 'team_id',
        allowNull: false,
      },
    });
  };

  return Member;
};
