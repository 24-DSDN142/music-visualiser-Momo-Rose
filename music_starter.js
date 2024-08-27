// vocal, drum, bass, and other are volumes ranging from 0 to 100

let angle = 0;
let incSpeed = 1;
let scalar = 25; // width of the cicrle motion path, set this to something like 10 for a good spiral loop!
let x = 0;
let y = 0;
let scalarInc = 0.5; //increment the scalar to make a spiral

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  let b1 = color(0,0,35,25)
  
background(b1); 
//blinking stars

  let galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)//1 & 6 = size of star
}
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
 
y = sin(angle) * scalar + height/2;
x = cos(angle) *  scalar + width/2;
angle += incSpeed;
scalar += scalarInc;
ellipse(x,y,50,50);
}
