let snowflakes = [];//For Snow
let paths = [];//For Trail
let fade;
let fadeAmount = 1;
fade = 0;

let startTime = 0;

let framesBetweenParticles = 5;
let nextParticleFrame = 0;
let previousParticlePosition;//location of last Particle
let particleFadeFrames = 100;//time for particle to fade >num = faster fade


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Verdana'); // please use CSS safe fonts
  textSize(24);
  rectMode(CORNER);

  let b1 = color(240,100,5)
 let myBlue = color (178,100,100);
  let myPurple = color (283,100,100)
  let OtherColor = map(other, 0,100, 0,1);
let blendColor = lerpColor(myBlue,myPurple,OtherColor)

let logS = [100,200,300,400,500,600,700,800,900,1000,1100,1200];
background(b1);
/*
noFill();
stroke(blendColor);
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

//For Timing of Trail
for (let path of paths){
  path.update();
  path.display();
 }

/*
fill(250,0,0,fade);
if(fade<0) fadeAmount = 1;
if (fade>225) fadeAmount =-10;
fade += fadeAmount;
fill(fade);
circle(50,50,100);
/*

  let Blstars = { //blinking Stars
  locationX : random(width),
  locationY : random(height),
  size : random(1,6)//1 & 6 = size of star
}
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);
 */


/*
}
function mousePressed(){
  nextParticleFrame = frameCount;
  paths.push(new Path());
  previousParticlePosition.set(mouseX, mouseY);
  createParticle();
}
function mouseDragged(){
  if (frameCount >= nextParticleFrame) {
    createParticle();
  }
}

function createParticle() {
  let mousePosition = createVector(mouseX, mouseY);
  let velocity = p5.Vector.sub(mousePosition, previousParticlePosition);
  velocity.mult(0.05);
  let lastPath = paths[paths.length - 1];
  lastPath.addParticle(mousePosition, velocity);
  nextParticleFrame = frameCount + framesBetweenParticles;
  previousParticlePosition.set(mouseX, mouseY);
}

class Path {
  constructor() {
    this.particles = [];
  }
  addParticle(position, velocity) {
    let particleHue = (this.particles.length * 30) % 360;
    this.particles.push(new Particle(position, velocity, particleHue));
  }
  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }
  connectParticles(particleA, particleB) {
    let opacity = particleA.framesRemaining / particleFadeFrames;
    stroke(255, opacity);
    line(
      particleA.position.x, particleA.position.y,
      particleB.position.x, particleB.position.y);
  }
  display() {
    for (let i = this.particles.length - 1; i >= 0; i -= 1) {
      if (this.particles[i].framesRemaining <= 0) {
        this.particles.splice(i, 1);
      } else {
        this.particles[i].display();
        if (i < this.particles.length - 1) {  this.connectParticles(this.particles[i], this.particles[i + 1]);
        }
      }
    }
  }
}

class Particle {
  constructor(position, velocity, hue) {
    this.position = position.copy();
    this.velocity = velocity.copy();
    this.hue = hue;
    this.drag = 0.95;
    this.framesRemaining = particleFadeFrames;
  }
  update() {
    this.position.add(this.velocity);
    this.velocity.mult(this.drag);
    this.framesRemaining = this.framesRemaining - 1;
  }
  display() {
    let opacity = this.framesRemaining / particleFadeFrames;
    noStroke();
    fill(this.hue, 80, 90, opacity);
    circle(this.position.x, this.position.y, 24);
  }
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
  this.posX = 0;
  this.posY = random(-height, 0);
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
  let ySpeed = 8 / this.size;//speed of 'snow'
  this.posY += ySpeed;

  // When snowflake reaches the bottom, move it to the top
  if (this.posY > height) {
    this.posY = -50;
  }
}

display() {
  fill(this.color);
  noStroke();
  ellipse(this.posX, this.posY, this.size);
}
  */
}
