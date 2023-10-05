const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json()); // This will parse JSON payloads
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var api_key = '30061417c1e11d4a9b02e4a4d961cbbc-28e9457d-5a4a5cce';
var domain = 'sandbox282ab01c1b844a418689913e8543c93c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.post('/', (req, res) => {
    const email = req.body.email;
    console.log(email);

    var data = {
        from: `Ethan <${email}>`,
        to: email,
        subject: `Hello ${email.split('@')[0]}`,
        text: 'Welcome to the DevLink newsletter!'
    };

    mailgun.messages().send(data, (error, body) => {
        if (error) {
            console.log(error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});