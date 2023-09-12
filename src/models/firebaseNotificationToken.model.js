const database = require("../config/database")

module.exports = class FirebaseNotificationTokenModel {
    constructor() {
        this.db = database;
    }

    async getAll() {
        const sqlQuery = `SELECT * FROM firebase_notification_token`
        return new Promise((resolve, reject) => {
            database.query(sqlQuery, (err, res) => {
                if(err) { reject(err); return; }

                resolve(res);
            })
        })
    }

    async insertOne(token) {
        const sqlQuery = `INSERT IGNORE INTO firebase_notification_token (token) VALUES (?)`
        return new Promise((resolve, reject) => {
            database.query(sqlQuery, [token], (err, res) => {
                if(err) { reject(err); return; }

                resolve(res);
            })
        })
    }
}