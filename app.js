var express = require('express');

var path = require('path');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'views')));

app.listen(process.env.PORT || 5000);

app.get("/",function(req,res){
  res.render("\views\index.html")
});

app.post('/filesize', upload.single('avatar'), function (req, res, next) {

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  var data= {
    filesize:req.file.size
  };
  console.log(data);

  res.send(data);
})
