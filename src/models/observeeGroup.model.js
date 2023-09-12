const database = require("../config/database")

module.exports = class ObserveeGroupModel {
    constructor() {
        this.db = database;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const sqlQuery = "SELECT * FROM observee_group";
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    insertOne(name) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `INSERT INTO observee_group (name) VALUES ("${name}")`;
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }

    renameGroup(id, name) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `UPDATE observee_group SET name = "${name}" WHERE id = ${id}`;
            this.db.query(sqlQuery, (err, res) => {
                if(err) {reject(err); return;} 

                resolve(res);
            });
        })
    }
}