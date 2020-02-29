const connection = require('./connection');

let table = "burgers";

const orm = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM " + table, (err, result) => {
            cb(err, result);
        });
    },
    insertOne: (name, devoured, cb) => {
        connection.query("INSERT INTO " + table + " (burger_name, devoured) VALUES (\"" + name + "\" ," + devoured +");", (err, result) => {
            cb(err, result);
        });
    },
    updateOne: (devoured, burgerID, cb) => {
        connection.query("UPDATE " + table + " SET devoured = " + devoured + " WHERE id = " + burgerID, (err, result) => {
            cb(err, result);
        });
    }
};

module.exports = orm;