const express = require("express");
const router = express.Router();

router.get("/tryWork", (req, res) => {
    return res.status(200).json({ message: "Transactions Working" })
})

module.exports = router