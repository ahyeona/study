const exp = require("constants");
const {User, Board} = require("../models");

exports.boardList = async (req, res) => {
    try {
        const data = await Board.findAll({
            include:[{model:User, attributes : ['name']}]
        });
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.editBoard = async (req, res) => {
    try {
        const {id, title, content} = req.body;
        await Board.update({
            title,
            content
        }, {where : {id}});
        res.redirect("http://127.0.0.1:5500/frontEnd/list.html");
    } catch (error) {
        console.log(error);
    }
}

exports.addBoard = async (req, res) => {
    try {
        const {title, content} = req.body;
        const {id} = req.acc_decoded;

        console.log(req.acc_decoded);

        await Board.create({
            title,
            content,
            UserId : id
        });

        res.redirect("http://127.0.0.1:5500/frontEnd/list.html");
    } catch (error) {
        console.log(error);
    }
}

exports.delBoard = async (req, res) => {
    try {
        const {id} = req.body;
        await Board.destroy({where : {id}});

        res.redirect("http://127.0.0.1:5500/frontEnd/main.html");

    } catch (error) {
        console.log(error);
    }
}