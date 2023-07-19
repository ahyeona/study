// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next)=>{
    try {
        const {access_token} = req.session;
        jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (e,decoded)=>{
            if (!e) {
                req.decoded = decoded;
                next();
            } else {
                console.log(e);
                return res.send("다시 로그인");
            }
        });
    } catch (error) {
        console.log(error);
    }
}