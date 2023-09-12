const database = require("../config/database")

module.exports = class TwitterObserveeModel {
    constructor() {
        this.db = database;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const sqlQuery = "SELECT * FROM twitter_observee";
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    insertOne(observeeGroupId, username) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `INSERT INTO twitter_observee (observee_group_id, username) VALUES (${observeeGroupId}, "${username}")`;
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }
}