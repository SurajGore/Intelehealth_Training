var express = require("express");
const res = require("express/lib/response");
var app = express();
//app.MethodType("URL",callback)
var myLogger=function(req, res, next)
{
    console.log("I Am In Logger");
    res.end();
    //next();
}
app.use(myLogger);

app.get("/",function(req, res)
{
    res.send("Hello");
    res.end();
});
app.get("/emp",function(req, res)
{
    res.send("Hello emp Get");
    res.end();
});
app.post("/emp",function(req, res)
{
    res.send("Hello emp Post");
    res.end();
});
app.put("/emp",function(req, res)
{
    res.send("Hello emp Put");
    res.end();
});
app.delete("/emp",function(req, res)
{
    res.send("Hello emp Delete");
    res.end();
});
app.listen(5000,function(){console.log("This is Ruuning On Port 5000")})