// var moduleRef = require('./myModule');
// console.log(moduleRef.sayHello("bitcode"));
// console.log(moduleRef.sumAll(1, 2 ,3));



// //Factory pattern
// function createPattern(name, email, tel)
// {
//     var o = new Object();
//     o.name = name;
//     o.email = email;
//     o.tel = tel;
//     o.sayHello = function () 
//     {
//         return "Hello " + o.name;
//     }
//     return o;
// }

// var p1 = createPattern("Vishal","vishal@gmail.com",9582300883);
// var p1 = createPattern("bitcode","test@gmail.com",8358453454);
// console.log(p1.name === p2.name);
// console.log(p1.sayHello === p2.sayHello);

// console.log(p1.sayHello());

// // Constructor pattern
// function Person(name,email,tel)
// {
//     this.name = name;
//     this.email = email;
//     this.tel = tel;
//     this.sayHello = function()
//     {
//         return "Hello " + this.name
//     }
// }

// var p1 = new Person("Vishal","vishal@gmail.com",9582300883);
// var p2 = new Person("bitcode","test@gmail.com",9582345343);
// console.log(p1.name === p2.name);
// console.log(p1.sayHello === p2.sayHello);


// Prototype Pattern
function Person(){};
Person.prototype.name = "Vishal";
Person.prototype.email = "vishal@gmail.com";
Person.prototype.tel = 9582300883;
Person.prototype.friends = ["Suraj", "Siddik"];
Person.prototype.sayHello = function()
{
    return "Hello " + this.name;
}
var p1=new Person();
p1.name="new name";
p1.friends.push("Sana");
console.log
var p2=createPerson("vishal","vishal@gmail.com",9582300883);
console.log(p1.name===p2.name); 
console.log(p1.sayHello===p2.sayHello);

//Prototye Pattern
function Person(name,email,tel)
{
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.friends = ["Suraj", "Siddik"];
}
Person.prototype = 
{
    sayHello: function()
    {
        return "Hello " + this.name;
    }
}
var p1 = new Person("bitcode","test@gmail.com",2374629364);
var p2 = new Person("Vishal","visahl@gmail.com",9582300883);
p1.friends.push("sana");
console.log(p1.friends);
console.log(p2.friends);
console.log(p1.friends === p2.friends);
console.log(p1.sayHello === p2.sayHello);
