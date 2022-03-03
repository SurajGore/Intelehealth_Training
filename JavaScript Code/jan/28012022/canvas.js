// function drawDaigonal (){
//     var canvas = document.getElementById('diagonal');
//     var context = canvas.getContext("2d");

//     //begin Pathname
//     context.beginPath();
//     context.moveTo(100, 100);
//     context.lineTo(500, 300);
//     context.stroke(); 
// }

function drawDaigonal(){
    var canvas = document.getElementById('daigonal');
    var context = canvas.getContext('2d');

    //context.save();
    //context.translate(170, 200);
    //begin pathname
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 200);
    context.lineTo(200, 460);
    context.lineTo(400, 400);
    context.stroke();
    context.save();
    context.restore();

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(600, 600);
    context.stroke();
}
window.addEventListener('load', drawDaigonal, false);