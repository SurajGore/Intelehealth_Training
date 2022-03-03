exports.sayHello=function(name)
{
    return"Hello" + name;
}
exports.sayHi=function(name)
{
    return"Hi" + name;
}
exports.addition=function()
{
    var result=0;
    for(var i=0; i<arguments.length;i++)
    {
        result+=arguments[i];
    }
    return result;
}