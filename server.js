var http = require('http');
const express = required('express');
const app = express()
const server = http.Server(app)
var fs = require('fs')
  // var server = http.createServer(function(req, res){
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/html');
  //   fs.readFile('index.html3',function(err,data){
  //     if(err){
  //       res.statusCode = 404;
  //       res.setHeader('Content-Type', 'text/plain');
  //       res.end("file not found")
  //     }
  //     res.setHeader('Content-Type', 'text/html');
  //     res.statusCode = 200;
  //     res.end(data)
  //   })
  //  // res.end("Hello World\n");
  // });


app.get('/', function(request,response){
  response.sendfile(_dirname+"/index.html")
})
server.listen(3000, 'localhost', function(){
  console.log('Server running');
})