// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
let mysql = require("mysql");

// Set up our connection information
let connection = mysql.createConnection({
  host: "q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ahzyt8d1n58u915i",
  password: "vfst1zllilpp0g5i", //take my randomly generated password for a database filled with burgers whose name reference TV shows, it'll be soooooo cool, I dare ya. In fact, you would probably be cooler than Bugz Bunny whenever he outwits Elmer Fudd.
  database: "pvyuibmi89xv7jwu"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;