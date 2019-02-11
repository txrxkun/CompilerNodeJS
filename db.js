class db {
    connection(mysql) {
        var con = mysql.createPool({
            connectionLimit: 100,
            host: '23.101.125.65',
            user: 'hmtifub_prasetyo',
            password: '21051999',
            database: 'compiler',
            port: '3306',
            multipleStatement: true
        });
        return con;
    }
}
module.exports = new db();
