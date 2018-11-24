const nodemailer = require('nodemailer');

module.exports = function sendMail(password, email) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dhhtestnimail@gmail.com',
            pass: 'lozinka1234'
        }
    });

    var mailOptions = {
        from: 'dhhtestnimail@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: password
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}