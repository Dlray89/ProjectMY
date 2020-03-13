const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")


const actionRouter = require("./data/routers/actionRouter")
const projectRouter = require("./data/routers/projectRouter")

const server = express()
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use("/api/actions", actionRouter)
server.use("/api/projects", projectRouter)

server.get('/', (req,res) => {
    res.status(200).json({Message: "Hello Lambda"})
})


module.exports = server
