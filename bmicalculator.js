const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});


app.post("/", function(req, res){
  var w= parseFloat(req.body.w);
  var h = parseFloat(req.body.h);
  var result = Math.round(w/(h*h));

res.send("your answer is :"+ result);

})

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
