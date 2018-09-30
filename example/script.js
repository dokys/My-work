var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    square, circle;

square= new Path2D();
square.moveTo(50, 50);
square.lineTo(250,50);
square.lineTo(250,250);
square.lineTo(50,250);
square.lineTo(50,50);

context.stroke(square);

circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);

context.fill(circle);


var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    line = new Path2D();

line.moveTo(0, 0);
line.lineTo(300, 300);

context.fillStyle = "rgba(0, 255, 0, 0.5)";
context.fillRect(100, 100, 300, 300);