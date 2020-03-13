const express = require("express");

const router = express.Router()

const actionDB = require("../helpers/actionModel");

router.get("/:id", (req,res) => {
    const { id } = req.params
    actionDB
    .get(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} We couldn't find what your were searching for`})
    })
})

module.exports = router