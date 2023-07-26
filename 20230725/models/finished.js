const Sequelize = require("sequelize");

class Finished extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                result : {
                    type : Sequelize.INTEGER
                },
            },
            {
                sequelize,
                modelName : "Finished",
                tableName : "finisheds",
                timestamps : true,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        db.Finished.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
        db.Finished.belongsTo(db.Case, {foreignKey : "case_id", targetKey : "id"});
    }
}

module.exports = Finished;