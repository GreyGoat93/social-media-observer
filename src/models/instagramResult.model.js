const database = require("../config/database")

module.exports = class InstagramResultModel {
    constructor() {
        this.db = database;
    }

    async insertOne(insertObject) {
        const sqlQuery = `INSERT INTO instagram_result SET ?`
        return new Promise((resolve, reject) => {
            database.query(sqlQuery, insertObject, (err, res) => {
                if(err) { reject(err); return; }

                resolve(res);
            })
        })
    }

    async getLastByObserveeId(observeeId) {
        const sqlQuery = `SELECT * FROM instagram_result WHERE observee_id = ${observeeId} ORDER BY id DESC LIMIT 1`
        return new Promise((resolve, reject) => {
            database.query(sqlQuery, (err, res) => {
                if(err) { reject(err); return; }

                resolve(res[0]);
            })
        })
    }
}