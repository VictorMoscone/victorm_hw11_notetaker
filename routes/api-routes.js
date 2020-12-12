const router = require("express").Router();
const fs = require("fs");

router.get("/test", (req, res) => {
    console.log(req.body);
    return res.json({msg: "Successfully added."});
});

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

module.exports = router;