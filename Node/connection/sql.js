var sql = require('mysql')

var connection = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "se",
    multipleStatements: true
  });
  
  connection.connect(function(err) {
    if (err) console.log("Error DataBase could not be connected",err);
    else
    console.log("Connected!");
  });

  module.exports = connection;

