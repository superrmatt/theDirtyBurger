const orm = require("../config/orm");

const burger = {
    selectAllBurgers: (callback) => {
        orm.selectAll(callback);
    },
    addBurger: (burgerName, devoured, callback) => {
        orm.insertOne(burgerName, devoured, callback);
    },
    updateBurger: (devoured, burgerID, callback) => {
        orm.updateOne(devoured, burgerID, callback);
    }
};

module.exports = burger;