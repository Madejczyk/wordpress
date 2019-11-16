const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, "dist")))

app.get("/", function(req, res){
    res.render("index.html");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));