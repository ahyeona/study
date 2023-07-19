const Sequelize = require("sequelize");

class Board extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title : {
                type : Sequelize.STRING(20),
            },
            content : {
                type : Sequelize.STRING
            }
        }, {
            sequelize,
            modelName : "Board",
            tableName : "boards",
            charset : "utf8",
            collate : "utf8_general_ci",
            underscored : false,
            timestamps : true,
            underscored : false,
            paranoid : false
        });
    }

    static accosicate(db) {
        db.Board.belongsTo(db.User, {foriegnKey : "user_id", targetKey : "id"});
    }
}

module.exports = Board;