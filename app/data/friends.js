const mysql = require("mysql");

let friends = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friendfinder_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  connection.query("SELECT * FROM friends;", function(err, data) {
      if (err) throw (err);
      
      data.forEach(function(data) {
          friends.push({
              "name": data.name,
              "photo": data.profile_pic,
              "scores": [data.qOne, data.qTwo, data.qThree, data.qFour, data.qFive, data.qSix, data.qSeven, data.qEight, data.qNine, data.qTen]
            })
        })

  });


module.exports = friends;