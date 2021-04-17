const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send({"data": "Welcome to the Bluekey API!"})
})

module.exports = router;