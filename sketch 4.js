//shariwa sharada
//ssharada@andrew.cmu.edu
//section a 
//final project

//the sound starts off playign until told to not
var soundEnabled = true;
var myOscillator;
var playingSound;
var lastSTS;

var myGraphicSet;

var frameCountGraphic = 60;
var currentGraphicFC;
var
  movementRatio,
  movementInRatio,
  movementOutRatio;

var w;
var dx;
var yvalues;
var xspacing = 16;
var theta = 0;
var amplitude = 75.0;
var period = 500.0;
var canvas


function setup(){
  canvas = createCanvas(500, 600);
  canvas.position(102,190);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');

  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing))
// creating the noise curve based off of which everything comes
  myOscillator = new p5.Oscillator
  myOscillator.setType('sine');
  myOscillator.freq(800);
  myOscillator.amp(0);
  myOscillator.start();


  ellipseMode(CENTER);
  rectMode(CENTER);

//pushing in the graphics that we created as part of constructor functions
  myGraphicSet = new GraphicSet(4, 40);

  myGraphicSet.push(inOutCircle);
  myGraphicSet.push(lines);
  myGraphicSet.push(circlesTogether);
  myGraphicSet.push(mirrorCircles);
}

function draw(){

  background(0);
  nowGraphic();
//creating the lines at the back of the canvas that allow for this 
//change between invisible and visible objects
//they appear according to the mouseX value which relates to the 
//alpha colour value of the lines
  push();
  translate(150,290)
  for(var i = 0; i < width + 40; i+=20){
    alphaRange = map(mouseX, 0, 300, 1, 17)
    fill(100, alphaRange)
    rect(0, 10, i-10, 600)
  }
  pop();

  myGraphicSet.display();

//playing the sine curve sound at my set amplitude and frequency
  if (soundEnabled){
    if(frameCount % frameCountGraphic == 0) playSound();
    if(playingSound && millis() - lastSTS > 20){
      myOscillator.amp(0,0.1);
      playingSound = false;
    }
  }

  push();
  calcWave();
  renderWave();
  pop();
//callling the ripple circle drawing
  rippleCircle();
}

//creating mass variables for the different movements that the graphics 
//have to call back to and reference to
function nowGraphic(){
  currentGraphicFC = frameCount % frameCountGraphic;
  movementRatio = currentGraphicFC / frameCountGraphic;
  movementInRatio = pow(movementRatio, 4);
  movementOutRatio = -pow(movementRatio - 1, 4);
}

//giving conditions as to when the sine curve can be heard - if the screen is 
//clicked the sound won't be heard until the page is refreshed.
function mouseClicked(){
  if (soundEnabled) myOscillator.stop();
  else myOscillator.start();
  soundEnabled = !soundEnabled;
}

//setting up the sine curve oscillation to be called. 
function playSound(){
  myOscillator.amp(1, 0.01);
  lastSTS = millis();
  playingSound = true
}

//creating the variables and constructor functions that most of the graphics are 
//based off of

//creating an array for the grpahic elements to allow for each of the graphic elements to 
//relate back to one thing
var GraphicSet = function(graphicXCount, graphicDisplaySize){
  var graphicArray = [];
  var positioning = width / (graphicXCount + 1);
  var xIndex = 0;
  var yIndex = 0;

//getting the grpahics to display at a certain position when the function is called
  this.push = function(displayFunction){
    graphicArray.push(new Graphic(
        (xIndex + 1) * positioning,
        (yIndex + 1) * positioning,
        displayFunction
      ));
    xIndex++;
    if (xIndex >= graphicXCount){
      xIndex = 0;
      yIndex++;
    }
  }

//determines how and when the graphic will be displayed once it is called
  this.display = function(){
    for (var graphicIndex = 0, graphicNumber = graphicArray.length; graphicIndex < graphicNumber; graphicIndex++){
      graphicArray[graphicIndex].display(graphicDisplaySize);
    }
  }
}

var Graphic = function (x, y, displayFunction) {
  this.xPosition = x;
  this.yPosition = y;
  this.display = displayFunction;
}

//creating the shrinking circle on the top left of the canvas
function inOutCircle(size){
  //determining the size of the circle that moves
  //having it vary according to the ratios of the sine curve oscillation
  var diameter = size * (4 - movementOutRatio);
  noStroke();
  fill(255, 90);
  ellipse(this.xPosition + 200, this.yPosition, diameter, diameter);
}

//creating the rippling circle on the left of the canvas
//this graphic is the only one that acts as a space filler - 
//it responds to the quite space in between the beeps of the sine oscillation
function rippleCircle(){
  push();
  translate(width/10, height/2);
  noFill();
  strokeWeight(3);
  var radius = 150;
  var step = 4;
  for(var i = -radius + step/2; i <= radius - step; i += step){
    //moving the lines along the waves to create the circle
    var wave = abs(pow(sin(i * 0.003 + frameCount * 0.05), 10));
    var wy = i - map(wave, 0, 0.4, -step, step);
    var X = sqrt(sq(radius) - sq(i)) * map(wave, 0, 2, 1, 1.1);
    var other = map(i, -radius + step/2, radius + step/2, 0, 1);
    //varying the colour of the strokes to create a fading away circle
    stroke(lerpColor(color(255, 40), color(0), other));
    //creating the circular shape based off of curve vertexes.
    beginShape();
    for (var j = -X; j <= X; j ++){
      vertex(j, wy);
    }
    endShape();
  }
  pop();
}

//creating the horizontal and vertical lines on the bottom left of the canvas
function lines(size){
  //variable that determines how far the lines move from the original point
  var offsetYPosition = -size * 0.5 + size * (1 - movementOutRatio);
  stroke(255);
  strokeWeight(random(0.1, 4));
  noFill();
  //horizontal
  rect(this.yPosition + offsetYPosition, this.xPosition +250 , size + 300 , size/4);
  //vertical
  stroke(0, 0, 255);
  strokeWeight(0.1)
  fill(255);
  rect(this.xPosition, this.yPosition + offsetYPosition + 345, size / 10 , size +300);
}

//creating the circles that orbit around together
function circlesTogether(size){;
  //orbitallan movement
  var angle = -HALF_PI + TWO_PI * movementOutRatio;
  //circle size
  var particleSize = size * 2;
  //movement for the smaller circles' variable
  var radius = size * 3;
  //creating the graphics
  stroke(255);
  strokeWeight(10);
  noFill();
  ellipse(this.xPosition + 50, this.yPosition + 150, size * 8, size * 8);
  fill(255, random(200, 250));
  noStroke();
  ellipse(this.xPosition + 50 + radius * cos(angle), this.yPosition + 150 + radius * sin(angle), particleSize, particleSize );

  fill(255, 100);
  noStroke();
  ellipse(this.xPosition + 10 + radius * cos(angle), this.yPosition + 180 + radius * sin(angle), particleSize * 0.25, particleSize * 0.25);
}

//creating the two conjoined circles ont he bottom right of the canvas
function mirrorCircles(size){
  //determines the circle within which the two 'mirrored' circles move around
  var rotationAngle = PI * movementOutRatio;
  //size of circles
  var diameter = size + 20 ; 
  push();
  translate(this.xPosition + 70, this.yPosition + 450);
  //rotatingt he circles along the previously given angle
  rotate(rotationAngle);
  //creating the two circles
  noStroke();
  fill(255, random(40, 150));
  strokeWeight(random(0.1, 4))
  ellipse(0, -size * 1.5, diameter , diameter);
  noFill();
  stroke(255, random(10,100));
  strokeWeight(random(0.1, 8))
  ellipse(0, size * 1.5, diameter * 2, diameter * 2);
  pop();
}

//the following code is used to display a traditional sine curve and the way it works
//this curve is in time with the other parts of the motion graphis
//but it feel like it isn't because the curve does not have the decelerating
//properties that the other graphics do.
function calcWave(){
  theta += 0.1;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++){
    yvalues[i] = sin(x) * amplitude;
    x += dx
  }
}

function renderWave(){
  // stroke(255, 190);
  // strokeWeight(2)
  noStroke();
  fill(255);
  for (var x = 0; x < yvalues.length; x++){
    ellipse(x * xspacing, height / 2 + yvalues[x], random(2,10), random(5,20));
  }
}






















