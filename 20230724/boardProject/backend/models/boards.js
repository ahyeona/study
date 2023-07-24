const Sequelize = require("sequelize");

class Board extends Sequelize.Model{
    static init(sequelize) {
        return super.init(
            {
                title: {
                    type: Sequelize.STRING,
                    allowNull : false
                },
                content : {
                    type : Sequelize.TEXT,
                    allowNull : false
                }
            },
            {
                sequelize,
                modelName : "Board",
                tableName : "boards",
                timestamps : true,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }

        )
    }

    static associate(db) {
        db.Board.belongsTo(db.User, {targetKey : "id", foreignKey : "writer"})
    }
}


module.exports = Board;