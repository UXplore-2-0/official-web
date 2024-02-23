module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_submitted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    submission_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    submitted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date(),
    },
  });

  Question.associate = (models) => {
    // setup the association between the Question and Team models
    Question.belongsTo(models.Team, {
      foreignKey: {
        name: 'team_id',
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });
  };

  return Question;
};
