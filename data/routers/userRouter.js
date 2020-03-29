const express = require("express")

const router = express.Router()

const usersDB = require("../helpers/user.model")


router.get("/", (req,res) => {
    usersDB
    .find()
    .then(user => {
        res.json(user)
    })
    .catch(error => res.send(error))
})



module.exports = router