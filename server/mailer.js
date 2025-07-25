// const nodemailer = require('nodemailer');


// // Create transporter
// const transporter = nodemailer.createTransporter({
//   service: 'gmail', // or other email service
//   auth: {
//     user: 'ac8826251@gmail.com',
//     pass: 'tueq ngyj oxec mzou' // Use app password, not regular password
//   }
// });

// // Function to send email
// async function sendEmail(to, subject, text, html) {
//   try {
//     const mailOptions = {
//       from: 'ac8826251@gmail.com',
//       to: to,
//       subject: subject,
//       text: text,
//       html: html
//     };

//     const result = await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully:', result.messageId);
//     return result;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// }

// module.exports = { sendEmail };