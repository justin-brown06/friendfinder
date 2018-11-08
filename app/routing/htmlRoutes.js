const path = require("path");

module.exports = function(app) { 
    //Send user to home page on load
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    //Send user to survey when button clicked
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};