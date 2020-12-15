const router = require("express").Router();
const path = require("path");
const express = require("express");
const app = express();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
    app.use("/js", express.static(path.join(__dirname, "/js")));
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;