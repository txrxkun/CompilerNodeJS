class db {
    connection(mysql) {
        var con = mysql.createPool({
            connectionLimit: 100,
            host: '127.0.0.1',
            user: 'azure',
            password: '6',
            database: 'compiler',
            port: '51992',
            multipleStatement: true
        });
        return con;
    }
}
module.exports = new db();
