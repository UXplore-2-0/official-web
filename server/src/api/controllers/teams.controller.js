const { Team, Member, Question, QA } = require('../models');
const { validateMember, validateBeverage } = require('../validations/member');
const { validateQuestion } = require('../validations/QA');
const { Op } = require('sequelize');

const MAX_MEMBERS = 3;

async function getAllTeams(req, res, next) {
  const team = await Team.findAll({
    attributes: [
      'team_id',
      'team_name',
      'email',
      'university',
      'is_verified',
      'role',
      'createdAt',
      'updatedAt',
    ],
  });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  return res.status(201).json(team);
}

async function addMember(req, res, next) {
  const id = req.user.team_id;

  const { error } = validateMember(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  var { name, email, nic, uni_index, contact_no, beverages, is_leader } =
    req.body;

  if (is_leader) {
    // check whether there is another leader
    const leader = await Member.findOne({
      where: {
        team_id: id,
        is_leader: true,
      },
    });

    if (leader) return res.status(400).json({ error: 'Leader already exists' });
  }

  const team = await Team.findOne({ where: { team_id: id } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  // fetch the number of members in the database
  const memberCount = await Member.count({
    where: {
      team_id: id,
    },
  });

  if (memberCount >= MAX_MEMBERS) {
    return res
      .status(400)
      .json({ status: false, message: 'Member count exceeded' });
  }

  // check whether if the member is already add to the system
  const member = await Member.findOne({
    where: {
      [Op.or]: [{ name: name }, { email: email }],
    },
  });

  if (member) {
    return res
      .status(400)
      .json({ status: false, message: 'Member already in the system' });
  }

  const newMember = await Member.create({
    team_id: id,
    name,
    email,
    uni_index,
    contact_no,
    beverages,
    nic,
    is_leader: is_leader ? is_leader : false,
  });

  return res.json({ member: newMember, count: memberCount + 1 });
}

async function getMember(req, res, next) {
  const tid = req.user.team_id;
  const mid = req.params.member_id;

  // first check whether the team exists
  const team = await Team.findOne({
    where: { team_id: tid },
    attributes: [
      'team_id',
      'team_name',
      'email',
      'university',
      'is_verified',
      'role',
      'createdAt',
      'updatedAt',
    ],
  });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  // find the member with the id
  const member = await Member.findOne({ where: { member_id: mid } });
  if (!member) {
    return res.status(404).json({ error: 'Member not found' });
  }
  return res.json({
    team: team,
    member: member,
  });
}

async function updateMember(req, res, next) {
  const tid = req.user.team_id;
  const mid = req.params.member_id;

  // validate the request body
  const { error } = validateMember(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  var { name, email, nic, uni_index, contact_no, beverages } = req.body;

  // first check whether the team exists
  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  // find the member with the id
  const member = await Member.findOne({ where: { member_id: mid } });
  if (!member) {
    return res.status(404).json({ error: 'Member not found' });
  }

  const updateMember = await member.update({
    name,
    email,
    nic,
    uni_index,
    contact_no,
    beverages,
  });
  return res.json(updateMember);
}

async function deleteMember(req, res, next) {
  const tid = req.user.team_id;
  const mid = req.params.member_id;

  // first check whether the team exists
  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  // find the member with the id
  const member = await Member.findOne({ where: { member_id: mid } });
  if (!member) {
    return res.status(404).json({ error: 'Member not found' });
  }
  // delete the member
  const deleteMember = member.destroy();
  return res.status(201).json({ message: 'Member Delete Successfull' });
}

async function getTeam(req, res, next) {
  const tid = req.user.team_id;

  const team = await Team.findOne({
    where: { team_id: tid },
    attributes: [
      'team_id',
      'team_name',
      'email',
      'university',
      'is_verified',
      'role',
      'createdAt',
      'updatedAt',
    ],
  });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  // get the members of the team
  const members = await Member.findAll({ where: { team_id: tid } });

  // get the memebr count of the team
  const memberCount = await Member.count({
    where: {
      team_id: tid,
    },
  });

  return res.json({ team: team, members: members, count: memberCount });
}

async function addBeverage(req, res, next) {
  const tid = req.user.team_id;
  const mid = req.params.member_id;

  const { error } = validateBeverage(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { beverages } = req.body;

  // first check whether the team exists
  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  // find the member with the id
  const member = await Member.findOne({ where: { member_id: mid } });
  if (!member) {
    return res.status(404).json({ error: 'Member not found' });
  }

  member.set({
    beverages: beverages,
  });
  await member.save();

  // member.update({ beverages: beverages });
  return res.json({ message: 'Beverages Add' });
}

async function addSubmission(req, res, next) {
  const tid = req.user.team_id;
  const { question, is_submitted, submission_link } = req.body;

  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  const newQuestion = await Question.create({
    question,
    team_id: tid,
    is_submitted,
    submission_link,
  });
  console.log('User created successfully:', newQuestion.toJSON());

  return res.json({ message: 'Question Added' });
}

function addQuestion(req, res, next) {}

async function getQuestion(req, res, next) {
  const tid = req.user.team_id;

  const question = await Question.findOne({ where: { team_id: tid } });
  if (!question) {
    return res.status(404).json({ error: 'Team not found' });
  }
  return res.json(question);
}

// function getSubmissions(req, res, next) { }

async function addQA(req, res, next) {
  const id = req.user.team_id;
  const { error } = validateQuestion(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  var { question } = req.body;

  const team = await Team.findOne({ where: { team_id: id } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  const newQA = QA.build({
    team_id: id,
    question: question,
  });
  await newQA.save();
  res.json(newQA);
}

async function getQA(req, res, next) {
  const tid = req.user.team_id;
  const qid = req.params.qa_id;

  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }
  const qa = await QA.findOne({ where: { qa_id: qid } });
  if (!qa) {
    return res.status(404).json({ error: 'Team not found' });
  }
  return res.json({ status: qa.answer ? true : false, answer: qa.answer });
}

async function getQAs(req, res, next) {
  const tid = parseInt(req.user.team_id);

  const qa = await QA.findAll({ where: { team_id: tid } });
  return res.json(qa);
}

async function addAnswer(req, res, next) {
  const tid = req.param.team_id;
  const qid = req.params.qa_id;

  const team = await Team.findOne({ where: { team_id: tid } });
  if (!team) {
    return res.status(404).json({ error: 'Team not found' });
  }

  const qa = await QA.findOne({ where: { qa_id: qid } });
  if (!qa) {
    return res.status(404).json({ error: 'Team not found' });
  }
  qa.set({
    is_answered: true,
    answer: req.body.answer,
  });
  await qa.save();
  return res.json(qa);
}

function addQAs(req, res, next) {}

module.exports = {
  addMember,
  getMember,
  updateMember,
  deleteMember,
  getTeam,
  addBeverage,
  addSubmission,
  getQuestion,
  addQAs,
  addQA,
  getQA,
  getQAs,
  getAllTeams,
  addQuestion,
  // getSubmissions,
  addAnswer,
};
