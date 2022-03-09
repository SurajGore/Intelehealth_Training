// const fs = require("fs");
// fs.readFile("test.txt","utf8",(err,data)=>
// {
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
// console.log("This Should Come After Reading File Content");



//Synchronus Manner
const fs = require("fs");
try
{
const data = fs.readFileSync("test.txt","utf8");
console.log(data);
}
catch(err)
{
        console.log(err);
}
console.log("This Is After file Reading");
