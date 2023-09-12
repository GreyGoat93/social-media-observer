const mysql = require('mysql');
const EnvValues = require('../constants/envValues');

const database = (() => {
    const env = new EnvValues();

    const connection = mysql.createConnection({
        database: env.DB_DATABASE,
        host: env.DB_HOST,
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
    });

    return connection;
})();

module.exports = database;