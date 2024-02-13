const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

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
          color: '#22BC66',
          text: 'Confirm your account',
          link: `http://localhost:3000/api/v1/auth/verify/${team_name}/${verificationToken}`,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  return mailGenerator.generate(email);
}

async function sendMail(verificationToken, team_name, email) {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    host: `${process.env.MAIL_TEST_HOST}`,
    port: process.env.MAIL_TEST_PORT, // replace with your email provider
    auth: {
      user: `${process.env.MAIL_TEST_USER}`, // replace with your email
      pass: `${process.env.MAIL_TEST_PASSWORD}`, // replace with your password
    },
  });

  // Email options
  let mailOptions = {
    from: `${process.env.MAIL_TEST_HOST}`, // sender address
    to: email, // list of receivers
    subject: 'UXPlore 2.0', // Subject line
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
  return true;
}

module.exports = sendMail;
