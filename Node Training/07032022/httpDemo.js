var http=require("http");
http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello</h1>");
    res.end();

}).listen (4000);
console.log("Server is running on 4000 ");