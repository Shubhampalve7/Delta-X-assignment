var express = require('express');
var server = express();
var routes = require('./routes/routes');
server.use(express.json());
server.use(routes);
const cors = require('cors');

server.use(cors());
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});
server.listen(8000,function check(error){
      if(error){
            console.log("error")
      }else{
            console.log("not error")
      }

});