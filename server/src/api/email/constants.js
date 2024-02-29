const auth = {
  type: 'OAuth2',
  user: 'morauxplore@gmail.com',
  clientId: process.env.GMAIL_CLIENT_ID,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  refreshToken: process.env.GMAIL_REFRESH_TOKEN,
};

const mailoptions = {
  from: 'MoraUXPlore 2.0 <morauxplore@gmail.com>',
  subject: 'Mora UXPlore 2.0 Registration',
};

module.exports = {
  auth,
  mailoptions,
};
