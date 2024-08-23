// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
   
   let myOrange = color(214, 126, 11);
   let myPink = color(186, 4, 68);
   let DrumColor = map(drum, 0,100, 0,1);
   let blendColor = lerpColor(myOrange,myPink,DrumColor);
   background(0);
//let eyeSize= map(other, 0,100, 50,300 )
//fill(250);
//ellipse(250,250, 150,eyeSize);
//ellipse(550,250, 150,eyeSize);

//let mouthSize = map(vocal, 0,100, 0,250)
//noStroke();
//fill(blendColor);
//rect(400,600, 200,mouthSize);

//stroke(250);
//strokeWeight(5);
//line(400,300, 400,450);
//line(400,300, 360,450);
//line(400,300, 440,450);

//let noseSize = map(bass, 0,100, 70,100)
//noStroke();
//fill('red');
//ellipse(390,450, bass/1.5,bass);
//ellipse(410,450, bass/1.5,bass);
strokeWeight(6);
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

for (let x=0;x <200;x+=1){
let nx = noiseScale *x;
let nt = noiseScale * frameCount;
let c = noiseLevel *noise(nx,nt);

ellipse(a,b,x,c);
}

stroke('red');
point(800,400);
//stroke(bassMap,60,180);
//for(let i =1; i<=bassMap; i++){//++ = +1
  //let lineStep = i*20;//higher this number further apart the lines are
  //stroke(drumMap,200,90);
  //ellipse(LineStart,lineStep, LineEnd,lineStep);
 //}
 
}
   //// vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);