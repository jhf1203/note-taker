// const fs = require("fs");
// const localJson = require("../db.json");


// module.exports = function(app) {

//     app.get("/api/notes", function(req, res) {
//         res.json(localJson);
//     }); 

//     const noteArr = [];

//     app.post("/api/notes", function(req, res) {
//           noteArr.push(req.body);
//           res.json(true);
//         });

//     fs.appendFile("../db.json", JSON.stringify(noteArr), function(err){
//         if (err) console.log(err);
//     })
// };