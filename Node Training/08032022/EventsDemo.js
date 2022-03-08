var events = require("events");
const { EventEmitter } = require("stream");
var eventobj = new events.EventEmitter();

var listener1=function()
{
    console.log("Listener1 Got Executed");
}
var listener2=function()
{
    console.log("Listener2 Got Executed");
}
var listener3=function()
{
    console.log("Listener3 Got Executed");
}

eventobj.on("connection",listener1);
eventobj.addListener("connection",listener2);
eventobj.once("connection",listener3);

eventobj.emit("connection");

var listnerCount=
events.EventEmitter.listenerCount(eventobj,"connection");
console.log(listnerCount + "no of listener listning");

eventobj.removeListener("connection",listener2);
eventobj.removeAllListeners("connection");

var listnerCount=
events.EventEmitter.listenerCount(eventobj,"connection");
console.log(listnerCount + "no of listener listning");

