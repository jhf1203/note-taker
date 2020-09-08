// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const localJson = require("./develop/db/db.json")

// Setting Up Server
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Middleware
app.use(express.static("./develop/public"));

// HTML Routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
  });

app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "./develop/public/index.html"));
  });


// API Routes
app.get("/api/notes", function(req, res) {
  res.json(localJson);
}); 

const noteArr = [];

app.post("/api/notes", function(req, res) {
    noteArr.push(req.body);
    res.json(localJson);
  });

// fs.appendFile("../db.json", JSON.stringify(noteArr), function(err){
//   if (err) console.log(err);
// })

// Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });