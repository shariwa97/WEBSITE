var canvas;

//shariwa sharada
//ssharada@andrew.cmu.edu
//section a
//project 10 

//initiallising all my speed and position variables
var option = 1

var centerX = 125
var centerX2 = 125  
var centerX3 = 125
var centerX4 = 0
var centerX5 = 0
var centerX6 = 0
var centerX7 = 0
var centerX8 = 0
var centerX9 = 0
var centerX10 = 125
var centerX11 = 125

var moveX = 1
var moveX2 = 1.5
var moveX3 = 0.5
var moveX4 = 1
var moveX5 = 1.5
var moveX6 = 0.5
var moveX7 = 1
var moveX8 = 1.5
var moveX9 = 0.5

function setup(){
  canvas = createCanvas(480, 480);
  canvas.position((windowWidth-width)/2,350);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  angleMode(DEGREES);
}

function draw(){ 
//calling the object functions 
//using conditionals to change the face type with a click   
    if (option == 1){
        background(155, 13, 33);
        eyeType1();
        noseType1();
        lipType1(); 
    }
    
    else if (option == 2){
        background(255);
        eyeType2();
        noseType2();
        lipType2();
    }
    
    else if (option == 3){
        background(2);
        eyeType3();
        noseType3();
        lipType3(); 
    }
}

//creating teh yellow eyes 
function eyeType1(){

    push();
    centerY = 85
    //causing the objects to rebound when they hit the edges
    centerX += moveX
    if(centerX > 300){
        moveX = random(-4.5, -1)
    }
    if (centerX <-300) {
        moveX = random(0.5, 2)
    }

    //translating and scaling the same object to create the whole image
        stroke(254, 194, 15);
        noFill();
        push();
        translate(centerX +40,centerY-2.5);
        strokeWeight(3.25)
        eye1LinesTop();
        pop();

        push();
        translate(centerX +40,centerY-2.5);
        rotate(180)
        strokeWeight(3.25)
        eye1LinesTop();
        pop();

        push();
        translate(40, 0);
        eye1Center();
        pop();

        push();
        translate(200,20);
        scale(0.75,0.75);
        rotate(5);
            push();
            translate(centerX + 40,centerY-2.5);
            strokeWeight(3.25)
            eye1LinesTop();
            pop();

            push();
            translate(centerX +40,centerY-2.5);
            rotate(180)
            strokeWeight(3.25)
            eye1LinesTop();
            pop();

            push();
            translate(40, 0);
            eye1Center();
            pop();
        pop();
    pop();   
}
//creating the yellow arcs
    function eye1LinesTop(){
            arc(0,0,160,90, 180, 0);
            strokeWeight(3)
            arc(0,0,150,80, 180, 0);
            strokeWeight(2.75);
            arc(0,0,140,70, 180, 0);
            strokeWeight(2.5);
            arc(0,0,130,60, 180, 0);
            strokeWeight(2.25);
            arc(0,0,120,50, 180, 0);
            strokeWeight(2);
            arc(0,0,110,40, 180, 0);
    }
//creating the centre circles
    function eye1Center(){
            strokeWeight(0.5);
            ellipse(centerX,centerY-5, 5,1);
            strokeWeight(0.75);
            ellipse(centerX,centerY-5, 10,6);
            strokeWeight(1.0);
            ellipse(centerX,centerY-5, 15,11);
            strokeWeight(1.25);
            ellipse(centerX,centerY-5, 20,16);
            strokeWeight(1.5);
            ellipse(centerX,centerY-5, 25,21);
            strokeWeight(1.75);
            ellipse(centerX,centerY-5, 30,26);
    }

function noseType1(){
    push();
    centerX2 -= moveX2
    if(centerX2 > 500){
        moveX2 = random(0.5, 2)
    }
    if (centerX2 <-300) {
        moveX2 = random(-4.5, -2.5)
    }
        strokeWeight(3.5);
        stroke(254, 194, 15);
        beginShape();
        noseLinesType1();
        endShape();

        strokeWeight(3.25);
        push();
        scale(0.85);
        translate(42, 48)
        beginShape();
        noseLinesType1();
        endShape();
        pop();

        strokeWeight(3.0);
        push();
        scale(0.75);
        translate(78, 89)
        beginShape();
        noseLinesType1();
        endShape();
        pop();

        strokeWeight(2.75);
        push();
        scale(0.65);
        translate(128, 145)
        beginShape();
        noseLinesType1();
        endShape();
        pop();

        strokeWeight(2.5);
        push();
        scale(0.55);
        translate(193, 220)
        noseLinesType1();
        endShape();
        pop();

        strokeWeight(2.25);
        push();
        scale(0.45);
        translate(290, 330)
        noseLinesType1();
        endShape();
        pop();
    pop();
}
    function noseLinesType1(){
        noFill();
        beginShape();
        curveVertex(centerX2+112, 181);
        curveVertex(centerX2+112, 181);
        curveVertex(centerX2+117, 195);
        curveVertex(centerX2+120, 202);
        curveVertex(centerX2+127, 218);
        curveVertex(centerX2+134, 231);
        curveVertex(centerX2+139, 241);
        curveVertex(centerX2+147, 255);
        curveVertex(centerX2+154, 268);
        curveVertex(centerX2+159, 279);
        curveVertex(centerX2+161, 284);
        curveVertex(centerX2+160, 290);
        curveVertex(centerX2+158, 292);
        curveVertex(centerX2+153, 296);
        curveVertex(centerX2+147, 299);
        curveVertex(centerX2+128, 300);
        curveVertex(centerX2+108, 295);
        curveVertex(centerX2+108, 295);
        endShape();
    }

function lipType1(){
    centerX3 += moveX3
    if(centerX3 > 300){
        moveX3 = random(-4.5, -1)
    }
    if (centerX3 <-300) {
        moveX3 = random(1, 4)
    }

    push();
    translate(20, -20);
    arrayLip1Lines();
    pop();

    push();
    translate(20, 805)
    scale(1,-1)
    arrayLip1Lines();
    pop();


    noFill();
    stroke(254, 194, 15);
    strokeWeight(2);
    push();
    translate(35, -23);
    rotate(2)
    beginShape();
    curveVertex(centerX3-27, 413);
    curveVertex(centerX3-27, 413);
    curveVertex(centerX3+4, 411);
    curveVertex(centerX3+30, 407);
    curveVertex(centerX3+44, 410);
    curveVertex(centerX3+58, 413);
    curveVertex(centerX3+102, 400);
    curveVertex(centerX3+132, 409);
    curveVertex(centerX3+161, 413);
    curveVertex(centerX3+192, 404);
    curveVertex(centerX3+192, 404);
    endShape();
    pop();
}
    function lip1Lines(){
        beginShape();
        curveVertex(centerX3-27, 412);
        curveVertex(centerX3-27, 412);
        curveVertex(centerX3+20, 386);
        curveVertex(centerX3+55, 369);
        curveVertex(centerX3+61, 366);
        curveVertex(centerX3+71, 365);
        curveVertex(centerX3+85, 370);
        curveVertex(centerX3+92, 374);
        curveVertex(centerX3+100, 375);
        curveVertex(centerX3+105, 370);
        curveVertex(centerX3+115, 365);
        curveVertex(centerX3+124, 367);
        curveVertex(centerX3+140, 376);
        curveVertex(centerX3+158, 388);
        curveVertex(centerX3+193, 412);
        curveVertex(centerX3+193, 412);
        endShape();
    }
    function arrayLip1Lines(){
        noFill();
        stroke(254, 194, 15);
        strokeWeight(3.5)
        lip1Lines();

        push();
        translate(22, 60);
        scale(0.9, 0.85)
        lip1Lines();
        pop();

        push();
        translate(45, 120);
        scale(0.8, 0.7)
        lip1Lines();
        pop();


        push();
        translate(66, 160);
        scale(0.7, 0.6)
        lip1Lines();
        pop();

        push();
        translate(87, 200);
        scale(0.6, 0.5)
        lip1Lines();
        pop();

        push();
        translate(110, 240);
        scale(0.5, 0.4)
        lip1Lines();
        pop();
    }

function eyeType2(){
    push();
    centerX4 += moveX4
    if(centerX4 > 200){
        moveX4 = random(-4.5, -1)
    }
    if (centerX4 <-200) {
        moveX4 = random(1, 4)
    }
        push();
        translate(centerX4, 0);

            noFill();
            strokeWeight(7);
            stroke(0);
            strokeCap(ROUND);
            arc(140, 95,120,50, 5, 175);
            arc(320, 95,120,50, 5, 175);
            arc(320, 95,120,50, 175, 5);
            
            ellipse(320, 95,25,25);

            line(80, 119, 90, 109);
            line(97, 131, 105, 115);
            line(120, 137, 124, 122);
            line(147, 138, 145, 123);
            line(175, 133, 169, 121);
            line(197, 123, 189, 113);


            push();
            translate(467,178)
            rotate(175);
            line(80, 119, 90, 109);
            line(97, 131, 105, 115);
            line(120, 137, 124, 122);
            line(147, 138, 145, 123);
            line(175, 133, 169, 121);
            line(197, 123, 189, 113);
            pop();
        pop();
    pop();
}

function noseType2(){
    push();
        centerX5 -= moveX5
        if(centerX5 > 400){
            moveX5 = random(1, 4)
        }
        if (centerX5 <0) {
            moveX5 = random(-4.5, -1)
        }
        push();
        translate(centerX5, 0);
            stroke(0);
            strokeWeight(5);
            noFill();
            beginShape();
            curveVertex(49, 161);
            curveVertex(49, 161);
            curveVertex(52, 190);
            curveVertex(63, 273);
            curveVertex(73, 321);
            curveVertex(73, 321);
            endShape();
        pop();
    pop();
}

function lipType2(){
    push();
    centerX6 += moveX6
    if(centerX6 > 300){
        moveX6 = random(-4.5, -1)
    }
    if (centerX6 <-300) {
        moveX6 = random(0.5, 2)
    }
        push();
        translate(centerX6, 0);
            stroke(0);
            push();
            scale(0.5,0.5);
            translate(250, 400);
                strokeWeight(15);
                push();
                translate(-20, -20);
                lip2Lines();
                pop();

                push();
                translate(400, 805)
                scale(-1,-1)
                lip2Lines();
                pop();

                noFill();
                push();
                translate(-5, -23);
                rotate(2)
                beginShape();
                curveVertex(98, 413);
                curveVertex(98, 413);
                curveVertex(129, 411);
                curveVertex(155, 407);
                curveVertex(169, 410);
                curveVertex(183, 413);
                curveVertex(227, 400);
                curveVertex(257, 409);
                curveVertex(286, 413);
                curveVertex(317, 404);
                curveVertex(317, 404);
                endShape();
                pop();
            pop();
        pop();
    pop();
}

    function lip2Lines(){
        beginShape();
        curveVertex(centerX11-27, 412);
        curveVertex(centerX11-27, 412);
        curveVertex(centerX11+20, 386);
        curveVertex(centerX11+55, 369);
        curveVertex(centerX11+61, 366);
        curveVertex(centerX11+71, 365);
        curveVertex(centerX11+85, 370);
        curveVertex(centerX11+92, 374);
        curveVertex(centerX11+100, 375);
        curveVertex(centerX11+105, 370);
        curveVertex(centerX11+115, 365);
        curveVertex(centerX11+124, 367);
        curveVertex(centerX11+140, 376);
        curveVertex(centerX11+158, 388);
        curveVertex(centerX11+193, 412);
        curveVertex(centerX11+193, 412);
        endShape();
    }

function eyeType3(){
    centerX7 += moveX7
    if(centerX7 > 200){
        moveX7 = random(-4.5, -1)
    }
    if (centerX7 <-200) {
        moveX7 = random(1, 4)
    }
    push();
    translate(centerX7, 0)
        push();
        scale(1.15, 1.15);
        translate(-25, -20);
            noFill(25);
            stroke(185, 82, 159);
            strokeWeight(2);
            line(83, 118, 154, 91);
            line(154, 91, 213, 98);
            line(213, 98, 212, 105);
            line(212, 105, 154, 97);
            line(154, 97, 83, 118);

            line(263, 106, 262, 100);
            line(262, 100, 321, 91);
            line(321, 91, 393, 118);
            line(393, 118, 322, 98);
            line(322, 98, 263, 106);

            push();
            rotate(4);
            translate(15, -10)
            strokeWeight(1);
            strokeCap(SQUARE)
            line(150, 135, 200, 135);
            strokeWeight(3);
            line(140, 125, 200, 125);
            pop();

            push();
            rotate(-4);
            translate(-20, 20)
            strokeWeight(1);
            strokeCap(SQUARE)
            line(275, 135, 330, 135);
            strokeWeight(3);
            line(275, 125, 335, 125);
            pop();
        pop();
    pop();
}

function noseType3(){
    centerX8 -= moveX8
    if(centerX8 > 200){
        moveX8 = random(1, 4)
    }
    if (centerX8 <-200) {
        moveX8 = random(-4.5, -1)
    }
    push();
    translate(centerX8, 0)
        push();
        scale(0.95);
        translate(20, 10);
            noFill(25);
            stroke(111, 204, 221);
            strokeWeight(3);
            beginShape();
            curveVertex(241, 173);
            curveVertex(241, 173);
            curveVertex(248, 229);
            curveVertex(268, 301);
            curveVertex(270, 310);
            curveVertex(268, 311);
            curveVertex(245, 308);
            curveVertex(225, 314);
            curveVertex(225, 314);
            endShape();

            strokeWeight(1);
            beginShape();
            curveVertex(235, 302);
            curveVertex(235, 302);
            curveVertex(245, 299);
            curveVertex(257, 301);
            curveVertex(257, 301);
            endShape();
        pop();
    pop();
}

function lipType3(){
    centerX9 += moveX9
    if(centerX9 > 200){
        moveX9 = random(-4.5, -1)
    }
    if (centerX9 <-200) {
        moveX9 = random(1, 4)
    }
    push();
    translate(centerX9, 0);
        push();
        scale(0.6, 0.5);
        translate(175, 350);
        noFill();
        stroke(246, 236, 19);
            strokeWeight(3);
            push();
            translate(20, -20);
            lip3Lines();
            pop();

            push();
            translate(437, 805)
            scale(-1,-1)
            lip3Lines();
            pop();


            noFill();
            strokeWeight(2);
            push();
            translate(35, -23);
            rotate(2)
            beginShape();
            curveVertex(98, 413);
            curveVertex(98, 413);
            curveVertex(129, 411);
            curveVertex(155, 407);
            curveVertex(169, 410);
            curveVertex(183, 413);
            curveVertex(227, 400);
            curveVertex(257, 409);
            curveVertex(286, 413);
            curveVertex(317, 404);
            curveVertex(317, 404);
            endShape();
            pop();
        pop();
    pop();
}
    function lip3Lines(){
        beginShape();
        curveVertex(centerX10-27, 412);
        curveVertex(centerX10-27, 412);
        curveVertex(centerX10+20, 386);
        curveVertex(centerX10+55, 369);
        curveVertex(centerX10+61, 366);
        curveVertex(centerX10+71, 365);
        curveVertex(centerX10+85, 370);
        curveVertex(centerX10+92, 374);
        curveVertex(centerX10+100, 375);
        curveVertex(centerX10+105, 370);
        curveVertex(centerX10+115, 365);
        curveVertex(centerX10+124, 367);
        curveVertex(centerX10+140, 376);
        curveVertex(centerX10+158, 388);
        curveVertex(centerX10+193, 412);
        curveVertex(centerX10+193, 412);
        endShape();
    }
//changing the options to respond to the image press
function mousePressed(){
    option++;
    if (option > 3) {
        option=1
    }
}

function resizeWin(){
    canvas.resizeWin(100,100)
}
