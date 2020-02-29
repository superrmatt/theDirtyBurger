  const orm = require("../config/orm");

const burger = {
    selectAllBurgers: (callback) => {
        orm.selectAll("burgers", callback);
    },
    addBurger: (burgerName, callback) => {
        orm.insertOne("burgers", "burger_name", "devoured", burgerName, false, callback);
    },
    updateBurger: (devoured, burgerID, callback) => {
        orm.updateOne("burgers", devoured, burgerID, callback);
    },
    deleteBurger: (burgerID, callback) => {
        orm.deleteOne("burgers", burgerID, callback);
    }
};

module.exports = burger;