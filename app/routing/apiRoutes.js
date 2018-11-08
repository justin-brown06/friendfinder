const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //grabs the new friend's scores to compare with friends in friends array
        var newScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

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