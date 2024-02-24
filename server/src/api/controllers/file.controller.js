const fs = require('fs');
const { Team, Question } = require('../models');
const { uploadFileToBlob } = require('../utils/fileUpload');

async function uploadFile(req, res, next) {
  const team_id = req.user.team_id;
  const file = req.file;

  // fetch the team name from the database
  const team = await Team.findOne({
    where: {
      team_id: team_id,
    },
    attributes: ['team_name'],
  });

  const fileUrl = await uploadFileToBlob(
    file.originalname,
    team_id,
    team.team_name,
    file
  );

  if (fileUrl.error) {
    return res.status(500).json({ error: fileUrl.error });
  }

  // uplaod the file url to the browser
  const question = await Question.findOne({
    where: {
      team_id: team_id,
    },
  });

  // update the question with the file url
  const updatedQuestion = await question.update({
    submission_link: fileUrl,
    is_submitted: true,
  });

  return res.json({
    message: 'File uploaded successfully',
    data: updatedQuestion,
  });
}

module.exports = {
  uploadFile,
};
