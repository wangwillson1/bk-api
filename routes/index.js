const express = require('express')
const router = express.Router()

const data = [
    {
        id: 1,
        name: "d1",
        email: "e1",
    },
    {
        id: 2,
        name: "d2",
        email: "e2",
    }
];

router.get("/", (req, res) => {
    res.send({data})
})

module.exports = router;