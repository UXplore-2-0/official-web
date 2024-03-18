const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const { google } = require('googleapis');
const CONSTANTS = require('./constants');
const fs = require('fs');
const csv = require('csv-parser');
const dotenv = require('dotenv');
dotenv.config({ path: '../../../.env' });

const source_email = 'morauxplore@gmail.com';
const subject = 'Urgent action required for valid team registration';

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });

async function createMailTrasport() {
  //   const accessToken = await oAuth2Client.getAccessToken();
  const accessToken = `ya29.a0Ad52N38SgcY7eRBTjGtTZmqkYsqJomoUKjrAT2ly2OGa35o7o6bavLY-0AhhS8q4Hw4lsscQ08CRBW8E24LJc8g5Ipaqt0MADpUgowwaM8cNSmKJH8fvfcAE-XGRnPweNSKRYbGV2j7LtxVjZWYr-OfYx_4Z_ik39qVIaCgYKAZ4SARISFQHGX2MidLrglqAqmCpFRE8caZ3_kw0171`;
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
    .pipe(csv(['team_name', 'email']))
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

const filePath = './non_member_team_index.csv'; // Provide the path to your CSV file
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
              console.log(
                'Email sent successfully: ',
                info.response,
                ' to ',
                email
              );
              count++;
            })
            .catch((error) => {
              console.error('Error sending email:', error);
            });
        });

        console.log('Total emails sent:', count);
      }
    });
  }
});
