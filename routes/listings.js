const express = require('express')
const router = express.Router()

const listings = [
    {
        id: 1,
        name: "l1",
        email: "e1",
    },
    {
        id: 2,
        name: "l2",
        email: "e2",
    }
];

router.get("/", (req, res) => {
    res.send({listings})
})

module.exports = router;
