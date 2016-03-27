//Node Webserver
var express = require("express")
var path = require("path")
var app = express()
var bodyParser = require("body-parser")
var rootPath = path.normalize(__dirname + "/../")

//User includes
var events = require("./eventsController.js")
var users = require("./userController.js")

//Config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(rootPath + "/app"))

//Routes
app.get("/data/event/count", events.count)
app.get("/data/event/:id", events.get)
app.get("/data/event", events.getAll)
app.post("/data/event/:id", events.save)
app.post("/data/user/:userName", users.save)
app.get("*", function(req, res) {
  res.sendFile(rootPath + "/app/index.html")
})

//Startup server
app.listen(8000)
console.log("Listening on 8000")
