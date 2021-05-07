let leftscore = 0;
let rightscore = 0;

function setup() {
  createCanvas(600, 400);
  bolinha = new bolinha();
  left = new Paddle(true);
  right = new Paddle(false);
}

function draw() {
  background(0);

  bolinha.checkPaddleRight(right);
  bolinha.checkPaddleLeft(left);

  left.show();
  right.show();
  left.update();
  right.update();

  bolinha.update();
  bolinha.edges();
  bolinha.show();

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width - 64, 40);
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function keyPressed() {
  if (key == 'W' || key == 'w') {
    left.move(-10);
  } else if (key == 'S' || key == 's') {
    left.move(10);
  }

  if (key == 'ArrowUp') {
    right.move(-10);
  } else if (key == 'ArrowDown') {
    right.move(10);
  }
}