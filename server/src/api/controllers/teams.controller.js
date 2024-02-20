const { Team, Member, Question, QA } = require('../models')

async function getAllTeams(req, res, next) {
  try {
    const team = await Team.findAll()
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(201).json(team);
  } catch (error) {
    next(error)
  }
}

async function addMember(req, res, next) {
  const id = req.params.team_id
  var {
    name,
    email,
    university,
    uni_index,
    contact_no,
    beverages
  } = req.body;

  try {
    const team = await Team.findOne({ where: { team_id: id } })
    console.log(team);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const newMember = await Member.create({
      team_id: id,
      name,
      email,
      university,
      uni_index,
      contact_no,
      beverages,
    });
    console.log('User created successfully:', newMember.toJSON());
    res.status(201).json(newMember);
  } catch (error) {
    next(error)
  }
}

async function getMember(req, res, next) {
  const tid = req.params.team_id
  const mid = req.params.member_id
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const member = await Member.findOne({ where: { member_id: mid } })
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(201).json([team, member]);
  } catch (error) {
    next(error)
  }

}

async function updateMember(req, res, next) {
  const tid = req.params.team_id
  const mid = req.params.member_id
  var {
    name,
    email,
    university,
    uni_index,
    contact_no,
    beverages
  } = req.body;

  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const member = await Member.findOne({ where: { member_id: mid } })
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    const updateMember = await member.update({
      name,
      email,
      university,
      uni_index,
      contact_no,
      beverages,
    });
    console.log('Member Updated successfully:', updateMember.toJSON());
    res.status(201).json(updateMember);
  } catch (error) {
    next(error)
  }
}

async function deleteMember(req, res, next) {
  const tid = req.params.team_id
  const mid = req.params.member_id
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const member = await Member.findOne({ where: { member_id: mid } })
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    const deleteMember = member.destroy();
    res.status(201).json({ message: "Member Delete Successfull" });
  } catch (error) {
    next(error)
  }

}

async function getTeam(req, res, next) {
  const tid = req.params.team_id
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(201).json(team);
  } catch (error) {
    next(error)
  }
}

async function addBeverage(req, res, next) {
  const tid = req.params.team_id
  const mid = req.params.member_id
  const { beverages } = req.body
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const member = await Member.findOne({ where: { member_id: mid } })
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    console.log(beverages);
    member.set({
      beverages: beverages,
    });
    await member.save();
    res.status(201).json({ message: "Beverages Add" });
  } catch (error) {
    next(error)
  }
}

// function updateBeverages(req, res, next) { }

async function addSubmission(req, res, next) {
  const tid = req.params.team_id
  const {
    question,
    is_submitted,
    submission_link,
  } = req.body
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
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

    res.status(201).json({ message: "Question Added" });
  } catch (error) {
    next(error)
  }
}

// ?
function addQuestion(req, res, next) {

}

async function getQuestion(req, res, next) {
  const tid = req.params.team_id
  try {
    const question = await Question.findAll({ where: { team_id: tid } })
    if (!question) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(201).json(question);
  } catch (error) {
    next(error)
  }
}

// function getSubmissions(req, res, next) { }

async function addQA(req, res, next) {
  const id = req.params.team_id
  var {
    question,
    is_answered,
    answer,
  } = req.body;

  try {
    const team = await Team.findOne({ where: { team_id: id } })
    console.log(team);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const newQA = await QA.create({
      team_id: id,
      question,
      is_answered,
      answer
    });
    console.log('QA created successfully:', newQA.toJSON());
    res.status(201).json(newQA);
  } catch (error) {
    next(error)
  }
}

async function getQA(req, res, next) {
  const tid = req.params.team_id
  const qid = req.params.qa_id
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const qa = await QA.findOne({ where: { qa_id: qid } })
    if (!qa) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(201).json(qa.answer);
  } catch (error) {
    next(error)
  }
}

async function getQAs(req, res, next) {
  const tid = req.params.team_id
  try {
    const qa = await QA.findAll({ where: { team_id: tid } })
    if (!qa) {
      return res.status(404).json({ error: 'Team not found' });
    }
    res.status(201).json(qa);
  } catch (error) {
    next(error)
  }
}



async function addAnswer(req, res, next) {
  const tid = req.params.team_id
  const qid = req.params.qa_id
  try {
    const team = await Team.findOne({ where: { team_id: tid } })
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    const qa = await QA.findOne({ where: { qa_id: qid } })
    if (!qa) {
      return res.status(404).json({ error: 'Team not found' });
    }
    qa.set({
      is_answered: true,
      answer: req.body.answer
    })
    qa.save();
    res.status(201).json(qa);
  } catch (error) {
    next(error)
  }
}


function addQAs(req, res, next) { }

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
