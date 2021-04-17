const express = require('express')
const router = express.Router()

const usersDAL = require('../DAL/users')

router.get('/', async (req, res) => {
    try {
        const users = await usersDAL.getAllUsers();
        res.status(200).send(users);
        
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;
