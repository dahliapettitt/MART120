function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let titleSize = 20;
let titleGrow = true;
let x1 = 100;
let x2 = 200;
let y1 = 250;
let y2 = 350;
let diagonalX = 150;
let diagonalY = 300;

function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(220);

  // Title text
  textSize(titleSize);
  text('It is me!', 10, 80);

  // Increase/decrease title size
  if (titleGrow) {
    titleSize += 1;
    if (titleSize >= 25) {
      titleGrow = false;
    }
  } else {
    titleSize -= 1;
    if (titleSize <= 20) {
      titleGrow = true;
    }
  }

  // Circle
  circle(150, 200, 110);

  // Ellipse moving along the x-axis
  ellipse(x1, 185, 10, 10);
  x1 = (x1 + 1) % width;

  // Ellipse moving along the x-axis
  ellipse(x2, 185, 10, 10);
  x2 = (x2 - 1 + width) % width;

  // Line moving along the y-axis
  line(95, y1, 90, 300);
  y1 = (y1 + 1) % height;

  // Line moving along the y-axis
  line(205, y2, 200, 300);
  y2 = (y2 - 1 + height) % height;

  // Line moving diagonally
  line(diagonalX, diagonalY, diagonalX + 30, diagonalY + 30);
  diagonalX = (diagonalX + 1) % width;
  diagonalY = (diagonalY + 1) % height;

  // Other shapes
  line(175, 250, 175, 285);
  line(135, 252, 135, 285);
  point(120, 185);
  point(170, 185);
  triangle(140, 220, 145, 185, 150, 220);
  rect(125, 287, 58, 150);

  // Original Title
  textSize(20);
  text('Dahlia Pettitt', 20, 30);
}
