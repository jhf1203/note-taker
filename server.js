// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const localJson = require("./develop/db/db.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Setting Up Server
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = (readFileAsync("./develop/db/db.json")).then(function(err, data) {
  console.log("data" + data);
})
console.log("notes array" + (notes));


// Static Middleware
app.use(express.static("./develop/public"));


// API Routes
app.get("/api/notes", function(req, res) {
  res.json(localJson);
}); 

app.post("/api/notes", function(req, res) {
    let notes;
    readFileAsync("./develop/db/db.json", "utf8").then(function(data) {
      notes = [].concat(JSON.parse(data))
      console.log("notes" + notes);
      notes.push(req.body);
      console.log("notes after pushing: ",  notes);
      return req.body
    }).then(function(note) {
      writeFileAsync("./develop/db/db.json", JSON.stringify(notes))
      return note
    }).then(function() { 
      res.json(note);
    })  

  
  // notes.push(req.body);
    // writeFileAsync("./develop/db/db.json", JSON.stringify(notes), function(err){
    //   if (err) console.log(err);
    //   console.log("post req, here is reqbody: " + req.body + "and here is notearr: " + notes);

    // })
    // res.json(true);
  });


// HTML Routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./develop/public/notes.html"));
  });

app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "./develop/public/index.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./develop/public/index.html"));
 });






// Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });