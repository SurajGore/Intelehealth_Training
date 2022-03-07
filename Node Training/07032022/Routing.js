var http=require("http");
http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/html"});
    //res.write("<h1>Hello</h1>");
    if(req.method==="GET" && req.url==="/node")
    {
        //res.write("<h1>This is GET for node URL</h1>");
        res.write("<form method = 'POST' action = 'angular'> <div> Enter Name");
        res.write("<input type=text name='txtName'/> </div>");
        res.write("<div><input type=submit value ='send data'></div></form>");
    }
    if(req.method==="GET" && req.url === "/angular")
    {
        res.write("<h1> This is GET for Angular URL </h1>");
    }
    res.end();

}).listen (4001);
console.log("Server is running on 4001");