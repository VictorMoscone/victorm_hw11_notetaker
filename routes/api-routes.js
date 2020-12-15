const router = require("express").Router();
const fs = require("fs");
const uniqid = require('uniqid');

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        const noteInfo = JSON.parse(data);

        noteInfo.push({
            noteTitle: req.body.title,
            noteText: req.body.text,
            noteId: uniqid(),
        });

        console.log(noteInfo);

        fs.writeFile("./db/db.json", JSON.stringify(noteInfo), (err) => {
            if(err) return res.json({ err: "Error adding note." });
            return res.json({msg: "Successfully added."});
        });
    });
});

module.exports = router;