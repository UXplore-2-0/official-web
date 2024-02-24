const auth = {
  type: 'OAuth2',
  user: 'shavinanjithakom@gmail.com',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: 'MoraUXPlore 2.0 <morauxplore2.0@gmail.com>',
  subject: 'Mora UXPlore 2.0 Registration',
};

module.exports = {
  auth,
  mailoptions,
};
