var express = require('express');
var app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json({}))

app.post('/', function(req, res){
    var fs = require('fs');

    fs.appendFile('data.txt', req.body.text, function (err) {
      if (err) throw err;
      console.log('Saved!');
      res.send('<h1>Successfully Saved! </h1>')
   
    });
    
});

app.listen(5000);
