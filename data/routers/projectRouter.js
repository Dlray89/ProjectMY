const express = require("express")

const router = express.Router()

const projectDB = require("../helpers/projectModel")

router.get("/:id", (req,res) => {
    const { id } = req.params
projectDB
.get(id)
.then(projects => {
    res.status(200).json(projects)
})
.catch( error => {
    res.status(500).json({errorMessage: `${error} couldn't retrieve information`})
})
})


module.exports = router