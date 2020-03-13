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

router.post("/", (req,res) => {
   const newProject = req.body
    projectDB
    .insert(newProject)
    .then(newProject => {
        res.status(200).json(newProject)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} we could not post to body`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const updateProject = req.body
    projectDB
    .update(id, updateProject)
    .then(updateProject => {
        res.status(200).json(updateProject)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} we could not update your projects`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    projectDB
    .remove(id)
    .then(deleteProject => {
        res.status(201).json(deleteProject)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} we could not delete your post`})
    })
})

router.get("/:id/actions", (req,res)=> {
    const { id } = req.params
projectDB
.getProjectActions(id)
.then(actions => {
    res.status(200).json(actions)
})
.catch(error => {
    res.status(500).json({errorMessage:`${error} could not find actions`})
})
})

module.exports = router