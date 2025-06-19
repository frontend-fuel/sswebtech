const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'yarrusasi@gmail.com',
    from: email,
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
