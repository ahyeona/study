const Sequelize = require("sequelize");

class Case extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        case_num: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
        },
        detail: {
          type: Sequelize.TEXT,
        },
        reason: {
          type: Sequelize.TEXT,
        },
        result: {
          type: Sequelize.INTEGER,
        },
        view_count :{
          type: Sequelize.INTEGER,
          defaultValue : 0
        }
      },
      {
        sequelize,
        modelName: "Case",
        tableName: "cases",
        timestamps: true,
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Case.hasMany(db.Finished, { foreignKey: "case_id", sourceKey: "id" });
    db.Case.hasMany(db.Interested, { foreignKey: "case_id", sourceKey: "id" });
    db.Case.belongsTo(db.Category, { foreignKey: "category_id", targetKey: "id" });
  }
}

module.exports = Case;
