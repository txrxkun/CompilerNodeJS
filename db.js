class db {
    connection(mysql) {
        var con = mysql.createPool({
            connectionLimit: 100,
            host: '127.0.0.1:51992',
            user: 'prasetyo',
            password: 'hmtif18',
            database: 'compiler',
            port: '3306',
            multipleStatement: true
        });
        return con;
    }
}
module.exports = new db();
