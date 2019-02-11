class db {
    connection(mysql) {
        var con = mysql.createPool({
            connectionLimit: 100,
            host: 'compilerhmtif.mysql.database.azure.com',
            user: 'hmtif_prasetyo@compilerhmtif',
            password: 'Bakrie2018@@',
            database: 'compiler',
            port: '3306',
            multipleStatement: true
        });
        return con;
    }
}
module.exports = new db();
