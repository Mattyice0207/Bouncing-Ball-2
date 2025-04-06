// Set up the canvas
var myCanvas = document.getElementById("myCanvas");
var drawTool = myCanvas.getContext("2d");
myCanvas.width = 400;
myCanvas.height = 300;

// Make a list of balls with their info
var balls = [
    { x: 50, y: 50, moveX: 2, moveY: 2, color: "blue" },   // Ball 1
    { x: 100, y: 100, moveX: 3, moveY: 1, color: "red" },  // Ball 2
    { x: 150, y: 75, moveX: 1, moveY: 3, color: "green" }  // Ball 3
];

// Draw one ball using its info
function makeBall(ball) {
    drawTool.beginPath();
    drawTool.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
    drawTool.fillStyle = ball.color; // Use the ball’s own color
    drawTool.fill();
}

// Move one ball and bounce it
function moveBall(ball) {
    ball.x = ball.x + ball.moveX; // Move left or right
    ball.y = ball.y + ball.moveY; // Move up or down

    if (ball.x > 390) { // Hit right wall
        ball.moveX = -2;
    }
    if (ball.x < 10) { // Hit left wall
        ball.moveX = 2;
    }
    if (ball.y > 290) { // Hit bottom
        ball.moveY = -2;
    }
    if (ball.y < 10) { // Hit top
        ball.moveY = 2;
    }
}

// Draw and move all the balls
function keepGoing() {
    drawTool.clearRect(0, 0, 400, 300); // Clear the canvas

    // Loop through every ball
    for (var i = 0; i < balls.length; i++) {
        makeBall(balls[i]); // Draw this ball
        moveBall(balls[i]); // Move this ball
    }

    requestAnimationFrame(keepGoing); // Keep it going
}

keepGoing(); // Start it!