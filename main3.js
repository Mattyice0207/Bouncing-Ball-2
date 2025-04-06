// Find the canvas on the webpage
var myCanvas = document.getElementById("myCanvas"); // Get the canvas from HTML
var drawTool = myCanvas.getContext("2d"); // Our paintbrush for drawing

// Set the size of the canvas
myCanvas.width = 400; // 400 dots wide
myCanvas.height = 300; // 300 dots tall

// Info about our balls - we’ll make 3!
var ball1X = 50;  // Ball 1 starts here left to right
var ball1Y = 50;  // Ball 1 starts here up and down
var ball1MoveX = 2; // Ball 1 speed side to side
var ball1MoveY = 2; // Ball 1 speed up and down
var ball1Color = "blue"; // Ball 1 is blue

var ball2X = 100; // Ball 2 starts a bit over
var ball2Y = 100; // Ball 2 starts lower
var ball2MoveX = 3; // Ball 2 moves faster sideways
var ball2MoveY = 1; // Ball 2 moves slower up and down
var ball2Color = "red"; // Ball 2 is red

var ball3X = 150; // Ball 3 starts even more over
var ball3Y = 75;  // Ball 3 starts in between
var ball3MoveX = 1; // Ball 3 moves slow sideways
var ball3MoveY = 3; // Ball 3 moves fast up and down
var ball3Color = "green"; // Ball 3 is green

// A job to draw one ball
function makeOneBall(xSpot, ySpot, color) {
    drawTool.beginPath(); // Start a new shape
    drawTool.arc(xSpot, ySpot, 10, 0, Math.PI * 2); // Draw a circle at xSpot, ySpot
    drawTool.fillStyle = color; // Use the ball’s color
    drawTool.fill(); // Fill it with that color
}

// A job to move one ball and bounce it
function moveOneBall(xSpot, ySpot, moveX, moveY) {
    xSpot = xSpot + moveX; // Move left or right
    ySpot = ySpot + moveY; // Move up or down

    // Bounce off the sides
    if (xSpot > 390) { // Too far right (400 - 10)
        moveX = -moveX; // Go the other way
    }
    if (xSpot < 10) { // Too far left
        moveX = -moveX; // Go the other way
    }

    // Bounce off top and bottom
    if (ySpot > 290) { // Too far down (300 - 10)
        moveY = -moveY; // Go up
    }
    if (ySpot < 10) { // Too far up
        moveY = -moveY; // Go down
    }

    // Give back the new spot and speed
    return { newX: xSpot, newY: ySpot, newMoveX: moveX, newMoveY: moveY };
}

// A job to keep everything going
function keepGoing() {
    drawTool.clearRect(0, 0, 400, 300); // Wipe the canvas clean

    // Draw all three balls
    makeOneBall(ball1X, ball1Y, ball1Color); // Ball 1
    makeOneBall(ball2X, ball2Y, ball2Color); // Ball 2
    makeOneBall(ball3X, ball3Y, ball3Color); // Ball 3

    // Move all three balls and update their spots
    var ball1Update = moveOneBall(ball1X, ball1Y, ball1MoveX, ball1MoveY);
    ball1X = ball1Update.newX;
    ball1Y = ball1Update.newY;
    ball1MoveX = ball1Update.newMoveX;
    ball1MoveY = ball1Update.newMoveY;

    var ball2Update = moveOneBall(ball2X, ball2Y, ball2MoveX, ball2MoveY);
    ball2X = ball2Update.newX;
    ball2Y = ball2Update.newY;
    ball2MoveX = ball2Update.newMoveX;
    ball2MoveY = ball2Update.newMoveY;

    var ball3Update = moveOneBall(ball3X, ball3Y, ball3MoveX, ball3MoveY);
    ball3X = ball3Update.newX;
    ball3Y = ball3Update.newY;
    ball3MoveX = ball3Update.newMoveX;
    ball3MoveY = ball3Update.newMoveY;

    requestAnimationFrame(keepGoing); // Keep it going
}

// Start the fun!
keepGoing();