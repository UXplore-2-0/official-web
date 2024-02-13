const { Team } = require('../models');
const logger = require('../start/logger');
const log = require('../start/logger');

async function createRootAdmin() {
  const rootAdmin = await Team.findOne({
    where: {
      team_name: `${process.env.ROOT_USER}`,
    },
  });
  if (rootAdmin) {
    log.info('Root admin already exists');
    return;
  }
  try {
    const rootAdmin = await Team.build({
      team_name: `${process.env.ROOT_USER}`,
      email: `${process.env.ROOT_EMAIL}`,
      role: 'admin',
      password: `${process.env.ROOT_PASSWORD}`,
      is_verified: true,
      verification_token: 'verified',
    });
    // save the root admin to the database
    await rootAdmin.save();
  } catch (error) {
    console.log('Error creating root admin', error);
    logger.error('Error creating root admin', error);
    logger.error('Shutting down the server...');
    process.exit(1);
  }
}

module.exports = createRootAdmin;
