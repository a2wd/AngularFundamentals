var fs = require("fs")
var path = "app/data/user/";

module.exports.save = function(req, res) {
  var user = req.body

  fs.writeFileSync(path + req.params.userName + ".json", JSON.stringify(user))
  res.send(user)
}
