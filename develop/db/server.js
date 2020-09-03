// Dependencies
const express = require("express");
const path = require("path");

// Setting Up Server
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const htmlRoutes = require("./routes/html-routes")(app);
// const apiRoutes = require("./routes/api-routes")(app);

// Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });