const mysql = require("./config");

// 테이블 초기화(사용자, 게시판)
exports.tableInit = async () =>{
    try {
        await mysql.query("SELECT * FROM user");
    } catch (error) {
        await mysql.query("CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20))");
        await mysql.query("CREATE TABLE post (id INT AUTO_INCREMENT PRIMARY KEY, content VARCHAR(20), userID INT)");
        await mysql.query("ALTER Table post ADD CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user (id);");
    }
}

// 유저 추가
exports.insertUser = async (name) => {
    try {
        await mysql.query("INSERT INTO user (name) VALUES (?)", [name]);
    } catch (error) {
        console.log(error);
    }
}


// 게시판 글 추가
exports.insertPost = async (content, userID) => {
    try {
        await mysql.query("INSERT INTO post (content, userID) VALUES (?,?)", [content, userID]);
    } catch (error) {
        console.log(error);
    }
}


// 유저 정보 불러오기
exports.userList = async () => {
    try {
        const [data] = await mysql.query("SELECT * FROM user");
        return data;
    } catch (error) {
        console.log(error);
    }
}

// 유저별 게시판 글 불러오기
exports.postList = async (user_id) => {
    try {
        const [data] = await mysql.query("SELECT * FROM user INNER JOIN post ON user.id=post.userID WHERE user.id=?",[user_id]);
        return data;
    } catch (error) {
        console.log(error);

    }
}

// 전체 게시판 글 가져오기
exports.getAllPost = async () => {
    try {
        try {
            const [data] = await mysql.query("SELECT * FROM user INNER JOIN post ON user.id=post.userID");
            return data;
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);

    }
}
