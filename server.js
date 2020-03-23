const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const session = require("express-session")


const actionRouter = require("./data/routers/actionRouter")
const projectRouter = require("./data/routers/projectRouter")
const usersRouter = require("./data/routers/userRouter")
const authRouter = require("./data/auth/auth.router")
const restricted = require("./data/auth/restricted-middlewear")

const server = express()

const sessionConfig = {
    name: "ProjectCook",
    secret: "Cookies are safe",
    cookie: {
        maxAge: 10000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
}


server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(session(sessionConfig))
server.use("/api/actions", actionRouter)
server.use("/api/projects", projectRouter)
server.use("/api/users", usersRouter)
server.use("/api/auth", authRouter)

server.get('/', (req,res) => {
    res.status(200).json({Message: "Hello Lambda"})
})


module.exports = server
