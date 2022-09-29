const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT||5500
const db = require("./db/db.json")

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

require("./routes/routes")(app);

app.listen(PORT, function() {
    console.log(`taking notes in http://localhost:${PORT}`)
})