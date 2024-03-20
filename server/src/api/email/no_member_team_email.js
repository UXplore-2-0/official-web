const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { google } = require('googleapis');
const CONSTANTS = require('./constants');
const fs = require('fs');
const csv = require('csv-parser');
const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });

const source_email = 'morauxplore@gmail.com';
const subject = 'Update: Continuing Forward with Mora UXplore 2.0';

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

async function createMailTrasport() {
  // const accessToken = await oAuth2Client.getAccessToken();
  const accessToken = `ya29.a0Ad52N3971LsHTkhMC5VapGhWmOsK7it1Aa7TXvncxFq_DgQw1C5VFLMrSrfNoKVOh1GBhkpHpdqmyW5wgGVhnk3AGon2IZnEwkMgVXjSMOYTPRYTybBLCP11EqFc2BIRRBfC03QYGTunpeGyqmser2KDwURKkT7kszDSaCgYKATkSARISFQHGX2MiTkE9cY86Mt5NaSOGhCrvQQ0171`;
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      ...CONSTANTS.auth,
      accessToken: accessToken,
    },
  });

  return transport;
}

async function sendMail(email, emailBody) {
  // get the transporter
  const transporter = await createMailTrasport();

  let mailOptions = {
    from: source_email,
    to: email,
    subject: subject,
    html: emailBody,
  };

  let info = await transporter.sendMail(mailOptions);
  return info;
}

// Define a function to read the CSV file and extract email list
function extractEmailListFromCSV(filePath, callback) {
  const emailList = [];

  fs.createReadStream(filePath)
    .pipe(csv(['email']))
    .on('data', (row) => {
      // Assuming the column names in your CSV file are 'team_name' and 'email'
      // If your CSV has different column names, adjust accordingly
      if (row.email) {
        emailList.push(row.email);
      }
    })
    .on('end', () => {
      callback(null, emailList);
    })
    .on('error', (error) => {
      callback(error, null);
    });
}

const filePath = './verified_teams.csv'; // Provide the path to your CSV file

extractEmailListFromCSV(filePath, (error, emailList) => {
  if (error) {
    console.error('Error reading CSV file:', error);
  } else {
    console.log(
      'read the CSV file successfully! total email adresses: ',
      emailList.length
    );

    let emailBody = '';
    // read the email body through the email html file syncronously
    fs.readFile('./email_template.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading email body:', err);
      } else {
        emailBody = data;

        let count = 0;
        // Send email to each email address in the list
        emailList.forEach((email) => {
          sendMail(email, emailBody)
            .then((info) => {
              console.log('Email sent successfully: ', ' to ', email);
              count++;
            })
            .catch((error) => {
              // log the emails to another csv file
              fs.appendFile('1.csv', `${email}\n`, (err) => {
                if (err) {
                  console.error('Error writing to failed_emails.csv:', err);
                }
              });
              console.error('Error sending email:', email, error);
            });
        });

        // console.log('Total emails sent:', count);
      }
    });
  }
});
