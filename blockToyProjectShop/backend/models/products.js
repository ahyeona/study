const Sequelize = require("sequelize");

class Product extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            blockNumber : {
                type : Sequelize.TEXT,
                allowNull : false
            },
            url : {
                type : Sequelize.TEXT,
                allowNull : true
            }
        }, {
            sequelize,
            timestamps : true,
            modelName : "Product",
            tableName : "products",
            paranoid: false,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }
}

module.exports = Product;