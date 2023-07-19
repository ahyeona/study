const {User} = require("../models");

exports.getUser = async (req, res) => {
    console.log("실행됨");
    try {
        const {decoded} = req;

        const user = await User.findOne({where : {id:decoded.id}});
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}

exports.editUser =  async (req, res) => {
    try {
        const {file, body} = req;
        console.log(file, body);
        // 데이터베이스에 이미지의 경로를 추가
        // /img/파일경로

        await User.update({
            user_img : "img/"+ file.filename
        }, {
            where : {id : req.decoded.id}
        });

        res.send("파일 저장됨");

    } catch (error) {
        console.log(error);
    }
}