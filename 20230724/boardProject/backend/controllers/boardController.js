const {Board, User} = require("../models");

// 게시글 전체
exports.getAllBoards = async (req, res) => {
    try {
        const list = await Board.findAll()

        return res.json(list)
    } catch (error) {
        console.log(error)
        return res.json({error})
    }
}

// 게시글 상세
exports.getDetailBoard = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("게시글 상세",id)
        const current_user = req.decoded.id;

        const board = await Board.findOne({where : {id}, include : {model:User, attributes:['user_id']} });
        console.log(board);
        let writer;
        if (board.writer == current_user) {
            writer = true;
        } else {
            writer = false;
        }

        return res.json({board, writer});
    } catch (error) {
        console.log(error)
        return res.json({error})

    }
}


// 게시글 등록
exports.postBoard = async (req, res) => {
    try {
        const {title, content} = req.body;
        const current_user = req.decoded.id;
        console.log(req.decoded)
        const board = await Board.create({title, content, writer:current_user});

        console.log(board);

        // board에 아이디 포함되어있는지 확인하고 클라이언트에서 상세페이지로 이동
        return res.json(board);
    } catch (error) {
        console.log(error)
        return res.json({error})

    }
}

// 게시글 수정
exports.editBoard = async (req, res) => {
    try {
        const {title, content} = req.body;
        const {id} = req.params

        await Board.update({title, content}, {where : {id}});

        return res.json();

    } catch (error) {
        console.log(error)
        return res.json({error})

    }
}

// 게시글 삭제
exports.deleteBoard = async (req, res) => {
    try {
        const {id} = req.params
        await Board.destroy({where:{id}});
        return res.json();
    } catch (error) {
        console.log(error)
        return res.json({error})

    }
}
