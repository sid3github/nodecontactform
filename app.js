const express = require('express');
const bodyParser = require('body-parser');
const exphbs =require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();


app.listen(8000,() => console.log('Server started....'));