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

router.post("/", (req,res) => {
    const newAction = req.body
    actionDB
    .insert(newAction)
    .then(newAction => {
        res.status(200).json(newAction)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Could not post to actions`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const updateActions = req.body
    actionDB
    .update(id, updateActions)
    .then(updateActions => {
        res.status(200).json(updateActions)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} Could not update your actions`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params
    actionDB
    .remove(id)
    .then(deleteAction => {
        res.status(200).json(deleteAction)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not delete your request`})
})
})
module.exports = router