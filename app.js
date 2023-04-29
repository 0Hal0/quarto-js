const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());



app.use(express.static(path.join(__dirname, 'public')));

var pos = 0;
var pieces = {};
var board = {};

app.get("/", (req, res) => {
    res.status(200);
    res.sendFile(path.resolve("../quarto-js/public/html/index.html"));
})

app.get("/board", (req, res) => {
    res.status(200);
    res.json(board);
    console.log(pos);
    pos = pos + 1;
})

app.post("/reset", (req, res) => {
    res.status(200);
    for (let i = 0; i < 16; i++) {
        board[i] = "../images/blank.png"
    }
})

app.listen(3000, () => console.log("Listening on port 3000"));

