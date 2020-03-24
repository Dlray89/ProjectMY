const bcrypt = require("bcryptjs")
const router = require("express").Router()
const usersDB = require("../helpers/user.model")

router.post("/register", (req,res) => {
    const userInfo = req.body;


    //hash passwords
    const ROUNDS = process.env.HASHINF_ROUNDS || 8
    const hash = bcrypt.hashSync(userInfo.password, ROUNDS)


    userInfo.password = hash

    usersDB
    .add(userInfo)
    .then(users => {
        res.status(201).json(users)
    })
    .catch(error => {
        res.status(401).json({errorMessage: `${error} your registeration failed! Something went wrong with your registration`})
    })
})

router.post("/login", (req,res) => {
    const { username, password } = req.body

    usersDB.findBy({ username })
    .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password))

        {
            req.session.user = {
                id: user.id,
                username: user.username,
            }
            res.status(200).json({welcome: user.username})
        } else{
        res.status(401).json({message: "invaild credentials"}) 
    }

    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error}`})
    })
})


module.exports = router