let plane;
let obstacles = [];
let exit;
const exitSize = 50;
let win = false;

function setup() {
  createCanvas(800, 600);
  createGameElements();
}

function draw() {
  background(0);
  drawGameElements();
}

function keyPressed() {
  movePlane();
}

function mousePressed() {
  addObject(mouseX, mouseY);
}

function createGameElements() {
  createPlane();
  createObstacles(2);
  createBorders();
  createExit();
}

function drawGameElements() {
  checkPlaneExit();
  moveAndDisplayPlane();
  moveAndDisplayObstacles();
  displayExit();
  displayWinMessage();
}

function createPlane() {
  plane = new plane();
}

function movePlane() {
  plane.handleKeyPress();
}

function addObject(x, y) {
  obstacles.push(new Obstacle(x, y, true));
}

function createObstacles(numObstacles) {
  for (let i = 0; i < numObstacles; i++) {
    obstacles.push(new Obstacle());
  }
}

function moveAndDisplayObstacles() {
  for (let i = 0; i < obstacles.length; i++) {
    moveObstacle(obstacles[i]);
    displayObstacle(obstacles[i]);
  }
}

function moveObstacle(obstacle) {
  obstacle.move();
}

function displayObstacle(obstacle) {
  obstacle.display();
}

function createBorders() {
  generateBorders();
}

function generateBorders() {
  // Create border
  createObstacleAtPosition(0, height / 2, 10, height);
  createObstacleAtPosition(width, height / 2, 10, height);
  createObstacleAtPosition(width / 2, 0, width, 10);
  createObstacleAtPosition(width / 2, height, width, 10);
}

function createExit() {
  exit = createVector(width - exitSize, height / 2);
}

function displayExit() {
  fill(0, 255, 0);
  rect(exit.x - exitSize / 2, exit.y - exitSize / 2, exitSize, exitSize);
}

function checkPlaneExit() {
  if (plane && plane.checkExit()) {
    win = true;
  }
}

function displayWinMessage() {
  if (win) {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}
