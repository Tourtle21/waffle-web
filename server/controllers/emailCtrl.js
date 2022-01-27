require('dotenv').config();
const nodemailer = require('nodemailer');
module.exports = {
    email: (req, res) => {

        async function main() {
            console.log(req.body)
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
    
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
            host: "imap.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'waffletechs@gmail.com', // generated ethereal user
                pass: process.env.USERPASS, // generated ethereal password
            },
            tls: {rejectUnauthorized: false}
            });
        
            // send mail with defined transport object
            let info = await transporter.sendMail({
            from: '"WaffleTech" <waffletechs@gmail.com>', // sender address
            to: `User, waffletechs@gmail.com`, // list of receivers
            subject: req.body.name, // Subject line
            text: "", // plain text body
            html: `
            <h1>Name:&nbsp;</h1><span>${req.body.name}</span><br>
            <h1>Phone:&nbsp;</h1><span>${req.body.phone}</span><br>
            <h1>Email:&nbsp;</h1><span>${req.body.email}</span><br>
            <h1>Description:&nbsp;</h1><span>${req.body.description}</span><br>
            `, // html body
            });
        }
        main()
        .then(() => res.sendStatus(200)).catch(() => res.sendStatus(400));
    }
};