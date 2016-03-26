var fs = require("fs")
var path = "app/data/event/";

module.exports.get = function(req, res) {
  var event = fs.readFileSync(path + req.params.id + ".json", "utf8")

  res.setHeader("Content-Type", "application/json")
  res.send(event)
}

module.exports.save = function(req, res) {
  var event = req.body

  fs.writeFileSync(path + req.params.id + ".json", JSON.stringify(event))
  res.send(event)
}

module.exports.count = function(req, res) {
  fs.readdir(path, function(err, files){
    if(err) console.log(err)

    res.setHeader("Content-Type", "application/json")
    res.send({count: files.length})
  })
}
