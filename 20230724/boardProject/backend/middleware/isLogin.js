const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next) => {
    try {
        const {access_token} = req.session;

        jwt.verify(access_token, process.env.ACCESSTOKEN_KEY, (err, decoded)=>{
            if (decoded) {
                req.decoded = decoded;
                next();
            } else {
                console.log("decoded");
                return res.json({error:"액세스토큰"})
            }
        })
    } catch (error) {
        console.log("islogin error : ",error);
        return res.json({error:"액세스토큰 에러"})
    }
}