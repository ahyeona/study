const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize) {
        // 첫번째 매개변수 컬럼의 내용, 두번째 테이블의 내용
        return super.init({
            msg : {
                type : Sequelize.STRING(100),
                allowNull:false
            }
        },{
            sequelize,
            timestamps:true,
            modelName:"Post",
            tableName:"posts",
            charset:"utf8",
            collate:"utf8_general_ci"
        });
    }

    static associate(db) {

        // 1:N : 예) 하나의 유저가 여러 개의 글을 만드는 경우

        // 1: N 관계
        // 시퀄라이즈에서 1: N 관계를 hasMany 메서드로 정의한다.
        // hasMany 메서드는 테이블의 관계를 정의해준다.
        // sourceKey : user 테이블 안에서 어떤 키를 foreignKey와 연결해줄지
        // hasMany 메서드의 첫번째 매개변수로 넘긴 테이블이 foreignKey에 연결되고 이름은 user_id

        // belongsTo 메서드를 사용해서 user의 id를 foreignKey로 연결한다.
        // user의 id가 따라갈 키. 참조키는 user_id
        db.Post.belongsTo(db.User, {foreignKey : "user_id", targetKey:"id"});
    }
}

module.exports = Post;