const express = require('express');
const bodyParser = require('body-parser');
const exphbs =require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const sendGrid = require('sendgrid')(process.env.U, process.env.PASSWORD);

const app = express();

// View engine setup.
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Static folder.
// app.use('/public',express.static(path.join(__dirname,'public')));

// Body Parser middleware.
app.use(bodyParser.json()); // fetching the json data from the body. 
app.use(bodyParser.urlencoded({ extended: false})); 

// app.get('/',(req,res) => {
//     res.render('contact');
// });


// app.post('/send',(req,res) => {
// const output = `
// <p>you have a new contact request</p>
// <h3>Contact Details</h3>
// <ul>
// <li>Name: ${req.body.name}</li>
// <li>Company: ${req.body.company}</li>
// <li>email: ${req.body.email}</li>
// <li>phone: ${req.body.phone}</li>
// </ul>
// <h3>Message</h3>
// <p>${req.body.message}</p>
// `;

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'siddharthpadwal3@gmail.com', // generated ethereal user
//         pass: '' // generated ethereal password
//     }
// });

// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"siddharth Padwal" <siddharthpadwal3@gmail.com>', // sender address
//     to: 'yashdamani1997@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//      console.log('Message sent: %s', info.messageId);
//      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//      res.render('contact',{msg: 'email sent'});
// });
// });

app.listen(8000,() => console.log('Server started....'));