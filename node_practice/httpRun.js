var http = require('http');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
}).listen(3000);


let data = "<p> this is paragraph </p>"