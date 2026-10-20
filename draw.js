
const canvas = document.querySelector("#drawing");
const context = canvas.getContext("2d");

//context.beginPath();
//context.arc(150, 100, 50, 0, 2 * Math.PI);
//context.stroke();

//context.strokeRect(20, 20, 60, 60);
//context.fillRect(210, 25, 70, 45);

context.beginPath();
context.rect(10, 10, 350, 250);
context.arc(155, 105, 55, 0, 2*Math.PI)
context.fill("evenodd");

context.beginPath();
context.arc(155, 105, 55, 0, 2*Math.PI);
context.stroke();