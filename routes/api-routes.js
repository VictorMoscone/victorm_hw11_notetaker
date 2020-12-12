const router = require("express").Router();
const fs = require("fs");

router.get("/test", (req, res) => {
    console.log(req.body);
    return res.json({msg: "Successfully added."});
});

module.exports = router;