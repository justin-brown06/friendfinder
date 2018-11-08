//Dependencies
const express = require("express");
const path = require("path");

//Set Express
let app = express();
let PORT = process.env.PORT || 8000;

//Allow express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Allows server to listen to client requests
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });