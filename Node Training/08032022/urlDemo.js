var http=require("http");
var url= require("url");

http.createServer((req,res)=>
{
    var result = url.parse(req.url,true);
    //console.log(result.query);
    res.write("txtNo1 is" + result.query.txtNo1);
    res.write("<br>txtNo2 is" + result.query.txtNo2);
    res.end();

}).listen (4000);
console.log("Running this on 4000 ");