let tacoX;
let tacoY;
let burritoX;
let burritoY;
let burritoSpeed;
let score;
function setup() {
  createCanvas(400, 400);
  tacoX = width / 2;
  tacoY = height - 50;
  burritoX = random(width);
  burritoY = 0;
  burritoSpeed = 3;
  score = 0; // Start the score at 0
}
function draw() {
  background(220);
  // Title text
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("Catch the Burrito", width / 2, 30);
  // Scoreboard
  textSize(16);
  text("Score: " + score, width / 2, 60);
  // Taco (player)
  fill(255, 200, 0);
  rect(tacoX, tacoY, 50, 20);
  // Burrito (falling object)
  fill(180, 90, 50);
  ellipse(burritoX, burritoY, 30, 15);
  // Move burrito
  burritoY += burritoSpeed;
  // Check for catch
  if (burritoY > tacoY && burritoX > tacoX && burritoX < tacoX + 50) {
    burritoY = 0;
    burritoX = random(width);
    score++; // Increase score
  }
  // Reset burrito if it misses
  if (burritoY > height) {
    burritoY = 0;
    burritoX = random(width);
  }
  // Move taco
  if (keyIsDown(LEFT_ARROW)) {
    tacoX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    tacoX += 5;
  }
  // Keep taco in bounds
  tacoX = constrain(tacoX, 0, width - 50);
}