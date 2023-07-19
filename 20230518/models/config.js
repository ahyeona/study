const mysql2 = require("mysql2/promise");
const mysql = mysql2.createPool({
    user:"root",
    password:"root",
    database:"test15",
    multipleStatements:false
});

module.exports = mysql;