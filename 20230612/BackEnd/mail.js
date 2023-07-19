const nodeemailer = require("nodemailer");

const smtpTransport = nodeemailer.createTransport({
    service : "Gmail",
    auth : {
        user: "interNodeToy@gmail.com",
        pass: "rozaxmrarajqdsoj"
    },
    tls : {
        rejectUnauthorized : false
    }
});

exports.sendEmail = () => {
    const mailOptions = {
        from : "interNodeToy@gmail.com",
        to : "ahhyeon741@gmail.com",
        subject : "테스트1",
        text : "인증번호어쩌구"
    }

    smtpTransport.sendMail(mailOptions, (error,response) => {
        if (error) {
            console.log(error);
        } else {
            console.log("성공");
        }
        smtpTransport.close();
    });
}
