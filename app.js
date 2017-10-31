var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Thunder!\n\r ACE to AUX");
});

app.listen(4000);
