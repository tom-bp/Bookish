//Server Side for library
const express = require("express");
const app = express();

app.get("/account", function (req, res) {

});

app.get("/books", function (req, res) {
  
});
app.use(express.static("index"));

app.listen(3000, function () {
  console.log("Webiste Created");
});

