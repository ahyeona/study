const {User} = require("../models");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
    try {
        const {user_id, user_pw} = req.body;
        const hash = bcrypt.hashSync(user_pw, 10);

        const user = await User.findOne({where:{user_id}});
        if (user != null) {
            console.log(user);
            return res.send("중복되는 아이디");
        }

        User.create({
            user_id, user_pw : hash
        });

        return res.redirect("http://127.0.0.1:5500/frontEnd/login.html");

    } catch (error) {
        console.log(error);
    }
}