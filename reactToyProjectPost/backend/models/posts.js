const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Post",
        tableName: "posts",
        timestamps: true,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}

module.exports = Post;
