const config = {
    dev : {
        username : "root",
        password : "1234",
        database : "test001",
        host : "127.0.0.1",
        // username : process.env.NAME,
        // password : process.env.PASSWORD,
        // database : process.env.DATABASE,
        // host : process.env.HOST,
        // // 사용하는 데이터베이스
        dialect : "mysql"
    }
}
console.log(config)

module.exports = config;