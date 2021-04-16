const express = require('express')
const router = express.Router()

const users = [{
    id: 1,
    name: "u1",
    email: "e1",
},
{
    id: 2,
    name: "u2",
    email: "e2",
},
];

router.get("/", (req, res) => {
    res.send({users})
})

module.exports = router;
