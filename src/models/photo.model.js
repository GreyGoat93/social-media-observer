const database = require("../config/database");

module.exports = class UrlModel {
    constructor() {
        this.db = database;
    }

    async checkIfUrlExists(photoString) {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM photo WHERE photo = "${photoString}"`;
            database.query(query, (err, res) => {
                if (err) { reject(err); return;}

                resolve(res[0]);
            })
        });
    }

    async insertOne(photoString) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO photo SET ?`;
            database.query(query, {photo: photoString}, (err, res) => {
                if (err) { reject(err); return;}

                resolve(res);
            })
        });
    }
}