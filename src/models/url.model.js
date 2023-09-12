const database = require("../config/database");

module.exports = class UrlModel {
    constructor() {
        this.db = database;
    }

    async checkIfUrlExists(url) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM urls WHERE url = "${url}"`;
            database.query(query, (err, res) => {
                if (err) { reject(err); return;}

                resolve(res[0]);
            })
        });
    }

    async insertOne(url) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO urls SET ?`;
            database.query(query, {url}, (err, res) => {
                if (err) { reject(err); return;}

                resolve(res);
            })
        });
    }
}