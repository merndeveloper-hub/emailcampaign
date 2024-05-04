
const fs = require('fs');
const csv = require('csv-parser');

const nodemailer = require('nodemailer');


const sendEamil = (req, res) => {

  console.log(req.body, "body");
  console.log(req.file, "file");

  const emails = [];
  console.log(emails, "emails");
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', (row) => {
      console.log(row, "row");
      emails.push(row.Email);
    })
    .on('end', () => {


      const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,

        auth: {
          user: "testy028@zohomail.com",
          pass: "WangChao"
        },
        connectionTimeout: 60000,
        tls: {
          rejectUnauthorized: false,
        },
      });


      const mailOptions = {
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.message
      };
      console.log(mailOptions, "mailOptions");

      emails.forEach((email) => {
        mailOptions.to = email;
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error occurred:', error, info);
          } else {
            console.log('Email sent:', info.response);
          }
        });
      });


      fs.unlinkSync(req.file.path);

      res.send('Emails sent successfully');
    });
};

module.exports = sendEamil

