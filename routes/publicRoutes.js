// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let path = require("path");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Exercise page
  app.get("/exercise", (req, res) => {
    readFileAsync("./public/exercise.html", "utf8", function (err, data) {
      if (err) return res.sendStatus(404);

      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
  });
  
  //Stats page
  app.get("/stats", (req, res) => {
    readFileAsync("./public/stats.html", "utf8", function (err, data) {
      if (err) return res.sendStatus(404);

      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  });

  //Root file
  app.get("/", function (req, res) {
    // readFileAsync("./public/notes.html", "utf8", function (err, data) {
    readFileAsync("./public/index.html", "utf8", function (err, data) {
      if (err) return res.sendStatus(404);
      res.json(path.join(__dirname, "../public/index.html"));
    });
  });

  // If no matching route is found default to home
  app.get("*", (req, res) => {
    // readFileAsync("./public/notes.html", "utf8", function (err, data) {
    readFileAsync("./public/index.html", "utf8", function (err, data) {
      if (err) return res.sendStatus(404);
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  });
};
