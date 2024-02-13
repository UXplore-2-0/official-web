const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

function generateMailBody(verificationToken) {
  let mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Mora UXPlore 2.0',
      link: 'https://uxplore.com/',
    },
  });

  let email = {
    body: {
      name: 'John Doe',
      intro:
        "Welcome to Your UXplore 2.0! We're very excited to have you on board.",
      action: {
        instructions:
          'To get started with Your Product Name, please click here:',
        button: {
          color: '#22BC66',
          text: 'Confirm your account',
          link: `http://localhost:3000/api/v1/auth/verify/${verificationToken}`,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  return mailGenerator.generate(email);
}

async function sendMail(verificationToken, email) {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525, // replace with your email provider
    auth: {
      user: '86a2a3063d8427', // replace with your email
      pass: 'ad224d680ae018', // replace with your password
    },
  });

  // Email options
  let mailOptions = {
    from: '', // sender address
    to: email, // list of receivers
    subject: 'UXPlore 2.0', // Subject line
    text: 'Hello world?', // plain text body
    html: generateMailBody(verificationToken), // html body
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  console.log('Message sent: %s', info.messageId);
  return true;
}

module.exports = sendMail;
