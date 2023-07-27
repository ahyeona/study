const { User, Case, Category, Finished, Interested, sequelize } = require("../models");

exports.getUser = async (req, res) => {
    try {
        const { id } = req.decoded;

        // 설문 완료한 판례
        const finished = await Finished.findAll({
            attributes : ['id', 'user_id', 'case_id', 'result',
            // [sequelize.fn(), 'result_str'],
            ],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            },
        ],
            where : {user_id : id}
        });

        // 관심 판례
        const interested = await Interested.findAll({
            attributes : ['id', 'user_id', 'case_id'],
            include : [{
                model : Case,
                include : [ {model: Category, attributes : ['name']}],
            }],
            where : {user_id : id}
        });


        return res.json({finished, interested});
    } catch (error) {
        console.log(error);
        return res.json({error})
    }
}