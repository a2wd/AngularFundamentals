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

module.exports.getAll = function(req, res) {
  var files = []
  try {
    files = fs.readdirSync(path)
  }
  catch(e) {
    res.send("[]")
    res.end()
  }

  var results = "["
  for(var i = 0; i < files.length; i++) {
    if(files[i].indexOf(".json") === files[i].length - 5) {
      results += fs.readFileSync(path + "/" + files[i]) + ","
    }
  }
  results = results.substr(0, results.length - 1) + "]"

  res.setHeader("Content-Type", "application/json")
  res.send(results)
  res.end()
}
