import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// *******************************     IMPORTANT         **************************************
// The above 'nodemailer' is a npm package installed for the dev environment install it 
// seperately for the *PRODUCTION*
// npm install --save-dev @types/nodemailer
// Try by removing --save-dev before deploying it 

//                                  "nodemailer": "^6.9.16"

// Below is the syntax for dev env change accordingly for prod
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '91071bf737e4e0', // Ethereal test account
    pass: '9f266d71fbaf61', // Ethereal password
  },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, mobile, category, description } = req.body;

    try {
      // Send the email to the specific email address
      const mailToAdmin = {
        from: '"Feedback Bot" <noreply@dtales.tech>',
        to: 'hello@dtales.tech', // Replace with the email where feedback will be sent
        subject: 'New Feedback Received',
        text: `You have received new feedback from:

        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Category: ${category}
        Description: ${description}`,
        };

      // Send the thank-you email to the user
      const mailToUser = {
        from: '"Dtailor Team" <noreply@dtales.tech>',
        to: email,
        subject: 'Thank you for your feedback!',
        text: `Dear ${name},

        Thank you for taking the time to provide your feedback. We appreciate your input and will use it to improve our services.

        Best regards,
        DETAILOR
        (DETALES TECH)`,
      };

      // Send both emails
      await transporter.sendMail(mailToAdmin);
      await transporter.sendMail(mailToUser);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default handler;
