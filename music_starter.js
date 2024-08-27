// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  /*
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   
   let myOrange = color(214, 126, 11);
   let myPink = color(186, 4, 68);
   let DrumColor = map(drum, 0,100, 0,1);
   let blendColor = lerpColor(myOrange,myPink,DrumColor);
let drumMap = map(drum,0,100, 0,70);
let bassMap = map(bass,0,100, 10,50);
let LineStart = 250;
let LengthofLine = 100;
let LineEnd = LineStart+LengthofLine;
let Rot = 45
let a = 600*noise(0.005*frameCount);//400 = x&y position
let b = 600*noise(0.005 * frameCount+100000);
let noiseLevel = 400;
let noiseScale = 0.005;
*/

background(0);
  let currentTime = frameCount/60;
  for (let flake of snowflakes){
    flake.update(currentTime);
    flake.display();
  }
}

class Snowflake{
  constructor(){
    this.posX = 0;
    this.posY = random(-height,0);
    this.initialAngle = random(0,360);
    this.size = random(2,5);
    this.radius = sqrt(random(pow(width/2,2)));
    this.color = color(random(200,256),random(200,256), random(200,256));
  }
  update(time){
    let angularSpeed = 35;
    let angle = this.initialAngle + angularSpeed * time;
    this.posX = width/2 +this.radius *sin(angle);
    let ySpeed = 8/ this.size;
    this.posY += ySpeed;
    if (this.posY > height){
      this.posY = -50;
    }
  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.posX, this.posY, this.size)
  }
}
