const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id : {
                type : Sequelize.STRING,
                allowNull : false
            },
            user_pw : {
                type : Sequelize.STRING,
                allowNull : false
            },
            user_img : {
                type : Sequelize.STRING,
                defaultValue : "img/loading_1685411109589.gif",
                allowNull : false
            },
        }, {
            sequelize,
            modelName : "User",
            tableName : "users",
            underscored : false,
            timestamps : true,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = User;