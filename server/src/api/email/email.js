const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { google } = require('googleapis');
const CONSTANTS = require('./constants');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

// function for generate the mail body of the email
function generateMailBody(verificationToken, team_name) {
  let mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Mora UXPlore 2.0',
      link: `${process.env.FRONT_END_URL}`,
    },
  });

  let email = {
    body: {
      name: `${team_name}`,
      intro:
        "Welcome to Your UXplore 2.0! We're very excited to have you on board.",
      action: {
        instructions: `To get started with Your Team ${team_name}, please click here:`,
        button: {
          color: 'dodgerblue',
          text: 'Confirm your account',
          link: `http://localhost:3000/verify/${team_name}/${verificationToken}`,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  return mailGenerator.generate(email);
}

function generateResetMailBody(token, team_id) {
  let mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Mora UXPlore 2.0',
      link: `${process.env.FRONT_END_URL}`,
    },
  });

  let email = {
    body: {
      intro:
        'You have received this email because a password reset request for your account was received.',
      action: {
        instructions:
          'If you did not request a password reset, no further action is required on your part.',
        button: {
          color: '#22BC66',
          text: 'Reset your password',
          link: `http://localhost:5000/api/v1/auth/forget-password/reset/${team_id}/${token}`,
        },
      },
      outro: 'If you have any questions, please contact us at',
    },
  };

  return mailGenerator.generate(email);
}

function createMailTrasport() {
  // const accessToken = await oAuth2Client.getAccessToken();
  const accessToken =
    'ya29.a0AfB_byAcPz6bfVPnSSMDii0In61QKheVEUgANH36tFxTr9lQLcDFechfaEzRifYGlcj-mpKdNjqcmr_40XLBPHFOFu-HjaiOALL2kLD13KSe-L1en5E7UDH-LO9wvbCGmyJM7cLkqKCTjIcg8FKUKOGXN5LWM6WQFQpB8QaCgYKAYMSARMSFQHGX2Mi2jS7ooX0qdgqFv_LwIOgQw0173';
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      ...CONSTANTS.auth,
      accessToken: accessToken,
    },
  });

  return transport;
}

async function sendMail(verificationToken, team_name, email) {
  // get the transporter
  const transporter = createMailTrasport();

  // Email options
  let mailOptions = {
    from: `${process.env.MAIL_TEST_HOST}`, // sender address
    to: email, // list of receivers
    subject: 'UXPlore 2.0 Registration', // Subject line
    html: generateMailBody(verificationToken, team_name), // html body
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log(
    'Message sent: %s',
    info.messageId,
    ' token: ',
    verificationToken
  );
  return info;
}

async function sendResetMail(token, email, team_id) {
  // get the transporter
  const transporter = createMailTrasport();

  let mailOptions = {
    from: `${process.env.MAIL_TEST_HOST}`,
    to: email,
    subject: 'Password Reset | Mora UXPlore 2.0',
    html: generateResetMailBody(token, team_id),
  };

  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId, ' token: ', token);

  return info;
}

module.exports = {
  sendMail,
  sendResetMail,
};
