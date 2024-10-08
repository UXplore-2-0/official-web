module.exports = (sequelize, DataTypes) => {
  const QA = sequelize.define('QA', {
    qa_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_answered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    answer: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  });

  QA.associate = (models) => {
    // setup the association between the QA and Team models
    QA.belongsTo(models.Team, {
      foreignKey: {
        name: 'team_id',
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };

  return QA;
};
