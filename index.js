const express = require("express")
const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const carsRouter = require("./cars/cars-router")

const server = express()
const port = process.env.PORT || 3333

server.use(helmet())
server.use(express.json())

server.use("/", welcomeRouter)
server.use("/cars", carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oops! Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at port ${port}`)
})
