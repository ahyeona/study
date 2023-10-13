const Sequelize = require("sequelize");
const config = require("../config");
const Product = require("./products");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;
db.Product = Product;
Product.init(sequelize);

module.exports = db;