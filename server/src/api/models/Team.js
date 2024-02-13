module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    team_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50],
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
    password: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    is_verrified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verification_token: {
      type: DataTypes.STRING(1024),
      defaultValue: '',
    },
    role: {
      type: DataTypes.ENUM('team', 'admin'),
      defaultValue: 'team',
    },
  });

  Team.associate = (models) => {
    // setup the association between Team and Member
    Team.hasMany(models.Member, {
      foreignKey: {
        name: 'team_id',
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };

  return Team;
};
