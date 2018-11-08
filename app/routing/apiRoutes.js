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

        //runs through all current friends in list
        friends.forEach(function(i) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j = 0; j < newScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(i.scores[j]) - parseInt(newScores[j])));
            };

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        });

        //after all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            };
        };

        //return bestMatch data
        var bestFriend = friends[bestMatch];
        res.json(bestFriend);


        friends.push(req.body);
    });
};