const Sequelize = require("sequelize")

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id : {
                    type: Sequelize.STRING,
                    allowNull : false
                },
                user_pw : {
                    type : Sequelize.STRING,
                    allowNull : false
                }
            },
            {
                sequelize,
                modelName : "User",
                tableName : "users",
                timestamps : true,
                paranoid : false,
                charset : "utf8",
                collate : "utf8_general_ci"
            }
        )

    }

    static associate(db) {
        db.User.hasMany(db.Board, {foreignKey : "writer", sourceKey : "id"});
    }
}

module.exports = User;