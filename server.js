const path = require("path");
const express = require("express")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "dist")));
app.set("port", process.env.PORT || 8080);

app.listen(port, () => console.log(`Listening on port ${port}!`))