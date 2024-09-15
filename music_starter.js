canvasHeight = 900;
canvasWidth = 900;
let w = canvasWidth;
let h = canvasHeight;
let startTime = 0;

let snowflakes = [];//For Snow
let fade;
let fadeAmount = 1;
fade = 0;
let img1;
let img2;
let img3;



function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Verdana'); 
  textSize(24);
  rectMode(CORNER);

let b1 = color(240,100,5)
let myBlue = color (178,100,100);
let myPurple = color (283,100,100)
let OtherColor = map(other, 0,100, 0,1);
let blendColor = lerpColor(myBlue,myPurple,OtherColor)

let logS = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
let TO = 0.3;

let starSize = map(drum,0,100, 0,10)
/*
let starLocationX = random(w);
let starLocationY = random(h);
*/
background(b1);

/*

if(fade<0) fadeAmount = 1;
if (fade>225) fadeAmount =-10;
fade += fadeAmount;
fill(fade);
//noFill();
stroke(blendColor,fade);
if (millis()-startTime > 200){
ellipse(450,400,logS[1]);
}
if (millis()-startTime > 250){
  ellipse(450,400,logS[1]+50);
  }

if (millis()-startTime > 300){
  ellipse(450,400,logS[2]);}
  if (millis()-startTime > 350){
    ellipse(450,400,logS[2]+50);
    }

if (millis()-startTime > 400){
ellipse(450,400,logS[3]);
}
if (millis()-startTime > 450){
  ellipse(450,400,logS[3]+50);
  }

if (millis()-startTime > 500){
  ellipse(450,400,logS[4]);
}
if (millis()-startTime > 550){
  ellipse(450,400,logS[4]+50);
  }

if (millis()-startTime > 600){
  ellipse(450,400,logS[5]);
}
if (millis()-startTime > 650){
  ellipse(450,400,logS[5]+50);
  }

if (millis()-startTime > 700){
  ellipse(450,400,logS[6]);
}
if (millis()-startTime > 750){
  ellipse(450,400,logS[6]+50);
  }

if (millis()-startTime > 800){
  ellipse(450,400,logS[7]);
}
if (millis()-startTime > 850){
  ellipse(450,400,logS[7]+50);
  }

if (millis()-startTime > 900){
  ellipse(450,400,logS[8]);
}
if (millis()-startTime > 950){
  ellipse(450,400,logS[8]+50);
  }

if (millis()-startTime > 1000){
  ellipse(450,400,logS[9]);
}
if (millis()-startTime > 1050){
  ellipse(450,400,logS[9]+50);
  }

if (millis()-startTime > 1100){
  ellipse(450,400,logS[10]);
}
if (millis()-startTime > 1150){
  ellipse(450,400,logS[0]+50);
  }

if (millis()-startTime > 1200){
  ellipse(450,400,logS[11]);
}
if (millis()-startTime > 1250){
  ellipse(450,400,logS[1]+50);
  }
if (millis() - startTime > 1200){
startTime = millis();
}
*/

push();
 tint(0,0,250,TO);//0.5 is the Alpha value - opacity
 rotate(90);
 translate(0,-900);
 image(img1,0,0,w,h,);
pop();

noFill();
stroke('white');
let noiseLevel = 200;
let noiseScale = 0.01;
let frameCount2 = frameCount /3;
for(let x = 3; x < 200; x += 3){
  let nx = noiseScale * x;
  let nt = noiseScale * frameCount2;
  let y = noiseLevel * noise(nx,nt);
  ellipse(450,450,x,y);
  //ellipse(450,450,x2,y2);
}
/*
let x1 = 300* noise(0.005* frameCount);
let y1 = 300 * noise(0.005* frameCount +10000);
let x2 = 600 * noise(0.005 * frameCount);
let y2 = 600 * noise(0.005 * frameCount +10000);//0.005 = level of noise
strokeWeight(2);
stroke('white)');
//ellipse(450,450,x1,y1);
//ellipse(450,450,x2,y2);
*/

//ellipse(starLocationX,starLocationY,starSize,starSize);

/*
}

let currentTime = frameCount / 60;//lower number = higher freq,
for (let flake of snowflakes) {
  // Update each snowflake position and display
  flake.update(currentTime);
  flake.display();
}

// Define the snowflake class

class Snowflake {
constructor() {
  this.posY = 0;
  this.posX = random(-height, 0);
  this.initialAngle = random(0, 360);
  this.size = random(2, 5);//size of 'snow'
  this.radius = sqrt(random(pow(width / 2, 2)));
  this.color = color(random(200, 256), random(200, 256), random(200, 256));
}

update(time) {
  // Define angular speed (degrees / second)
  let angularSpeed = 35;
  let angle = this.initialAngle + angularSpeed * time;
  this.posX = width / 2 + this.radius * sin(angle);// x position follows a sine wave

  // Different size snowflakes fall at different y speeds
  let xSpeed = 8 / this.size;//speed of 'snow'
  this.posX += xSpeed;

  // When snowflake reaches the bottom, move it to the top
  if (this.posX > height) {
    this.pos = -50;
  }
}

display() {
  fill(this.color);
  noStroke();
  ellipse(this.posX, this.posY, this.size);
}
  */
}
