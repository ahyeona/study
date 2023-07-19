const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(40),
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: "user_id", sourceKey: "id" });
  }
}

module.exports = User;
