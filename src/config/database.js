const mysql = require('mysql');

module.exports = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'cursonodecoders'
    });

}