const database = require("../config/database")

module.exports = class InstagramObserveeModel {
    constructor() {
        this.db = database;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const sqlQuery = "SELECT * FROM instagram_observee";
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `SELECT * FROM instagram_observee WHERE id = ${id}`;
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res[0]);
            });
        })
    }

    insertOne(observeeGroupId, username) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `INSERT INTO instagram_observee (observee_group_id, username) VALUES (${observeeGroupId}, "${username}")`;
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    updateLastChecked(observeeId, datetime = new Date()) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `UPDATE instagram_observee SET last_checked = ? WHERE id = ?`;
            this.db.query(sqlQuery, [datetime, observeeId], (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    getPastTimeObserveesForCron() {
        return new Promise((resolve, reject) => {
            const sqlQuery = `
                SELECT
                    id,
                    username
                FROM smo.instagram_observee
                WHERE TIMESTAMPDIFF(SECOND, NOW(), DATE_ADD(last_checked, INTERVAL check_interval_in_seconds SECOND)) < 0 = true;
            `;

            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }
}