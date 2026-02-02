import nodemailer from 'nodemailer';


export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_LOGIN, // generated ethereal user
    pass: process.env.EMAIL_PASS, // generated ethereal password
  },
});

