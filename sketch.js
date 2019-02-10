var canvas;

function setup() {
  canvas = createCanvas(windowWidth+1,windowHeight+500);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
}

function draw() {
  strokeWeight(random(0.5,3));
  noStroke();
  fill(8,25,156,random(0,4))
  rect(mouseX,mouseY,random(1,900),random(1,40),20);
}

function mousePressed(){
	reset();
}

function windowResized() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}