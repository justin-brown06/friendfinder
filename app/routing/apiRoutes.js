const friends = require("../data/friends.js");
const mysql = require("mysql");

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
  });


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        connection.query("INSERT INTO friends (name, profile_pic, qOne, qTwo, qThree, qFour, qFive, qSix, qSeven, qEight, qNine, qTen) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.name, req.body.photo, req.body.scores[0], req.body.scores[1], req.body.scores[2], req.body.scores[3], req.body.scores[4], req.body.scores[5], req.body.scores[6], req.body.scores[7], req.body.scores[8], req.body.scores[9]])
        //grabs the new friend's scores to compare with friends in friends array
        var newScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        console.log(req.body)
        console.log(newScores)

        //runs through all current friends in list
        friends.forEach(function(friends) {
            var scoresDiff = 0;
            // run through scores to compare friends
            newScores.forEach(function(newScores, j){
                scoresDiff += (Math.abs(parseInt(friends.scores[j]) - parseInt(newScores)))
            });
            //push results into scoresArray
            scoresArray.push(scoresDiff);
            console.log(scoresArray)
        });

        // after all friends are compared, find best match
        scoresArray.forEach(function(scores, i){
            if(scores <= scoresArray[bestMatch]) {
                bestMatch = i;
            };
            console.log(bestMatch)
        });

        //return bestMatch data
        var bestFriend = friends[bestMatch];
        res.json(bestFriend);

        friends.push(req.body);
    });
};