//write File
// const fs = require("fs");
// const content="Hi This is suraj";
// fs.writeFile("test.txt",content,(err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
// })

//Append File
const fs = require("fs");
const content="Hi This is Vishal";
fs.appendFile("test.txt",content,(err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
})