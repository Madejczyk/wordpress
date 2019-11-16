const path = require("path");
const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000
express()
    .use(express.static(path.join(__dirname, "dist")));
    .listen(PORT, () => console.log(`Listening on port ${PORT}!`))