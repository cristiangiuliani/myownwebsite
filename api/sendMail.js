const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const SMTP_USER = 'warlokko@gmail.com';
const SMTP_PASS = 'akicane2003';

app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact', (req, res) => {
    
    let smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS
        }
    });

    let mailOpts = {
        from: `${req.body.name} <${req.body.email}>`,
        to: SMTP_USER,
        subject: `New message from website [${req.body.email}]`,
        text: `Inviato da: ${req.body.name} <${req.body.email}>\n
                Email: ${req.body.email}\n
                Messaggio: ${req.body.message}`,
        html: `<b>Inviato da:</b> ${req.body.name} &lt;${req.body.email}&gt;<br>
                <b>Email:</b> ${req.body.email} <br>
                <b>Messaggio:</b> ${req.body.message}` 
    }
    smtpTrans.sendMail(mailOpts, (error, response) => {
        error ? res.render('contact-failure') : res.render('contact-success');
        
    })

});

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening port ${port}...`))