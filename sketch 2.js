var canvas;

var diameter;
//array of points for x point of second ellipses - 60 variables for 60 seconds 
var placeX = [300,305,310,320,325,330,340,345,350,360,365,370,380,385,390,400,405,410,420,425,430,440,445,450,460,465,470,480,485,490,500,505,510,520,525,530,540,545,550,560,565,570,580,585,590,600,605,610,620,625,630,640,645,650,660,665,670,680,690,700]
//array of points for y point of second ellipses - 60 variables for 60 seconds 
var placeY = [300,305,310,320,325,330,340,345,350,360,365,370,380,385,390,400,405,410,420,425,430,440,445,450,460,465,470,480,485,490,500,505,510,520,525,530,540,545,550,560,565,570,580,585,590,600,605,610,620,625,630,640,645,650,660,665,670,680,690,700]
//array of points for x point of minute ellipses - 60 variables for 60 minutes 
var placeXMin = [50,60,75,85,100,110,125,135,150,160,175,185,200,210,225,235,250,260,275,285,300,310,325,335,350,360,375,385,400,410,425,435,450,460,475,485,500,510,525,550,575,600,625,650,675,700,725,750,775,800,825,850,875,900,925,950]
//array of points for y point of hour lines - 24 variables for 24 hours
var placeYHr = [50,75,121,150,176,200,253,300,350,375,450,473,500,550,600,675,699,737,775,803,825,869,900,925]


function setup(){
  canvas = createCanvas(480,480);  
  canvas.position((windowWidth-width)/2, 250);
  canvas.style('z-index','-1')
  canvas.style('display','block')
}

function draw(){
  background(0);

  var hr = hour(); //hour variable 
  var mn = minute(); //minute variable 
  var sc = second();//second variable 

  //creating the ellipses for the seconds
  //this draws the same number of ellipses at the given second 
  //the ellipses position change with each second  
  push();
  for (var i = 0; i<sc; i++){ //for loop relative to the number of seconds 
    var diameter = random(20,180);
    frameRate(1);
    fill(random(214,254), random(92,132), random(131,171), random(0,70)); //adding transparencies to the fill 
    stroke(random(214,254), random(92,132), random(131,171), random(120,225));
    strokeWeight(random(0.5, 2.3));
    ellipseX = random(placeX); //making the index value chosen from the array random 
    ellipseY = random(placeY); //making the index value chosen from the array random 
    ellipse(ellipseX/2, ellipseY/2, diameter/2, diameter/2); //drawing the ellipses 
  }
  pop();

  //making the minutes ellipses 
  //the position of the ellipses in the y axis does not change 
  //this draws the same number of ellipses at the given minute.
  push();
  for (var j = 0; j<mn; j++){ //for loop relative to the number of minutes 
    stroke(random(215,255), random(174,214), random(5,45), random(70,100));//randomising stroke colours
    fill(255, 194, 25, 70);
    strokeWeight(random(0.1, 1.2));
    drawMin(placeXMin[j]/2); //making it relaitive to the x value of the ellipse and the for loop  
    //calling it from another functions that defines what to draw
  }
  pop();

  //making the hour lines/blobs
  //the position of these blobs does not change in the x direction 
  //this draws the same number of lines as the number of hours in a range of 1-24
  push();
  for (var k = 0; k<hr; k++){ //making the for loop relative to the hour 
    stroke(random(0,40), random(137,177), random(155,195));
    fill(20, 157, 175, 10);
    strokeWeight(random(5, 10));//making the lines blobs 
    drawHr(placeYHr[k]/2);//making it relative to hour variable, the for loop, y position array
  }
  pop();
}

//giving the parameters for the ellipses drawn for the minutes representation 
function drawMin(x){
  var diameter = random(10,50);
  ellipse(x, width/2, diameter/2, diameter/2);//only calling fro the x position to be changed. 
}

//giving the parameters for the lines drawn for the hours representation 
function drawHr(y){
  var diameter = random(30,70);
  line(height/2, y, height/2, y+5); //only calling the y value to be changed 
}
