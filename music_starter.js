canvasHeight = 900;
canvasWidth = 900;
let w = canvasWidth;
let h = canvasHeight;
let startTime = 0;

let fade;
let fadeAmount = 1;
fade = 0;
let img1;
let img2;
let img3;
let CloudPos = 0


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  textFont('Verdana'); 
  textSize(24);
  rectMode(CORNER);

let b1 = color(240,100,5);
let b2 = color(240,93,79);
let myPink = color (307,90,99,0.2);
let myGreen = color (142,90,99,0.2);
let OtherColor = map(other, 0,100, 0,100);
let blendColor = lerpColor(myPink,myGreen,OtherColor);
let massMap = map(vocal,0,100, 200,550);
let massMap2 = map(vocal,0,100, 0.01,0.05);

let mix = 0;
let easing = 0.05;
let logS = [100,200,300,450,500,600,700,800,900,1000,1100,1200];
let TO = 0.3;
let T1 = 0.2
let T2 = map(vocal, 0,100, 0.5,1)

let starSize = map(drum,0,100, 0,8);
let starSize2 = map(bass,0,100, 0,5);
let starSize3 = map(drum,0,100, 3,8);

let mixTarget = map(vocal,0,100, 0.0,1.0);
mix = mix + ((mixTarget - mix) * easing);
let bg = lerpColor(b1,b2,mix);
background(bg);

push();//
 tint(0,0,250,TO);//0.5 is the Alpha value - opacity
 rotate(90);
 translate(0,-900);
 image(img1,0,0,w,h,);
pop();

push();//northen lights thing - all images are made by me
tint(0,0,250,T2)
image(img3,0,0,w,h);
pop();

//stars
fill('white');
ellipse(100,100,starSize,starSize);
ellipse(810,120,starSize,starSize);
ellipse(30,150,starSize,starSize);
ellipse(210,200,starSize,starSize);
ellipse(100,270,starSize,starSize);
ellipse(240,320,starSize,starSize);
ellipse(300,400,starSize,starSize);
ellipse(350,460,starSize,starSize);
ellipse(100,550,starSize,starSize);
ellipse(100,600,starSize,starSize);
ellipse(420,610,starSize,starSize);
ellipse(670,730,starSize,starSize);
ellipse(560,780,starSize,starSize);
ellipse(780,800,starSize,starSize);
ellipse(100,860,starSize,starSize);
ellipse(890,890,starSize,starSize);
ellipse(900,900,starSize,starSize);
ellipse(100,910,starSize,starSize);
ellipse(100,920,starSize,starSize);
ellipse(100,910,starSize,starSize);
ellipse(810,120,starSize,starSize);
ellipse(85,100,starSize2,starSize2);
ellipse(30,150,starSize2,starSize2);
ellipse(210,200,starSize2,starSize2);
ellipse(100,270,starSize2,starSize2);
ellipse(240,320,starSize2,starSize2);
ellipse(385,400,starSize2,starSize2);
ellipse(350,460,starSize2,starSize2);
ellipse(100,550,starSize2,starSize2);
ellipse(367,600,starSize2,starSize2);
ellipse(489,610,starSize2,starSize2);
ellipse(521,730,starSize2,starSize2);
ellipse(598,780,starSize2,starSize2);
ellipse(764,800,starSize2,starSize2);
ellipse(920,860,starSize2,starSize2);
ellipse(890,890,starSize2,starSize2);
ellipse(900,900,starSize2,starSize2);
ellipse(100,910,starSize2,starSize2);
ellipse(700,920,starSize2,starSize2);
ellipse(100,910,starSize2,starSize2);
ellipse(726,560,starSize2,starSize2);
ellipse(598,780,starSize2,starSize2);
ellipse(628,434,starSize2,starSize2);
ellipse(891,261,starSize2,starSize2);
ellipse(800,181,starSize2,starSize2);
ellipse(608,243,starSize2,starSize2);
ellipse(538,222,starSize2,starSize2);
ellipse(460,333,starSize2,starSize2);
ellipse(422,80,starSize2,starSize2);

ellipse(85+50,100,starSize3,starSize3);
ellipse(30+50,150,starSize3,starSize3);
ellipse(210+80,200-20,starSize3,starSize3);
ellipse(100+80,270,starSize3,starSize3);
ellipse(240+80,32-200,starSize3,starSize3);
ellipse(385+80,400-20,starSize3,starSize3);
ellipse(350+50,460,starSize3,starSize3);
ellipse(100+80,550,starSize3,starSize3);
ellipse(367+80,600-20,starSize3,starSize3);
ellipse(489+50,610,starSize3,starSize3);
ellipse(521+80,730-20,starSize3,starSize3);
ellipse(598+80,780,starSize3,starSize3);
ellipse(764+80,800,starSize3,starSize3);
ellipse(920+50,860-20,starSize3,starSize3);
ellipse(890+80,890-20,starSize3,starSize3);
ellipse(900,900,starSize3,starSize3);
ellipse(100+80,910,starSize3,starSize3);
ellipse(700+80,920,starSize3,starSize3);
ellipse(100+80,910,starSize3,starSize3);

push();//clouds
tint(0,0,250,T1);
image(img2,CloudPos,0,w,h);
CloudPos = CloudPos - 0.5
if(CloudPos < 5){CloudPos = 900}
pop();


//outward circles
push();
if(fade<0) fadeAmount = 1;
if (fade>225) fadeAmount =-20;
fade += fadeAmount;
fill(blendColor);
noFill();
stroke(blendColor);

if (millis()-startTime > 100){
  ellipse(450,450,logS[1]-100);
  }
  if (millis()-startTime > 150){
    ellipse(450,450,logS[1]-50);
    }
if (millis()-startTime > 200){
ellipse(450,450,logS[1]);
}
if (millis()-startTime > 250){
  ellipse(450,450,logS[1]+50);
  }

if (millis()-startTime > 300){
  ellipse(450,450,logS[2]);}
  if (millis()-startTime > 350){
    ellipse(450,450,logS[2]+50);
    }

if (millis()-startTime > 450){
ellipse(450,450,logS[3]);
}
if (millis()-startTime > 450){
  ellipse(450,450,logS[3]+50);
  }

if (millis()-startTime > 500){
  ellipse(450,450,logS[4]);
}
if (millis()-startTime > 550){
  ellipse(450,450,logS[4]+50);
  }

if (millis()-startTime > 600){
  ellipse(450,450,logS[5]);
}
if (millis()-startTime > 650){
  ellipse(450,450,logS[5]+50);
  }

if (millis()-startTime > 700){
  ellipse(450,450,logS[6]);
}
if (millis()-startTime > 750){
  ellipse(450,450,logS[6]+50);
  }

if (millis()-startTime > 800){
  ellipse(450,450,logS[7]);
}
if (millis()-startTime > 850){
  ellipse(450,450,logS[7]+50);
  }

if (millis()-startTime > 900){
  ellipse(450,450,logS[8]);
}
if (millis()-startTime > 950){
  ellipse(450,450,logS[8]+50);
  }

if (millis()-startTime > 1000){
  ellipse(450,450,logS[9]);
}
if (millis()-startTime > 1050){
  ellipse(450,450,logS[9]+50);
  }

if (millis()-startTime > 1100){
  ellipse(450,450,logS[10]);
}
if (millis()-startTime > 1150){
  ellipse(450,450,logS[0]+50);
  }

if (millis()-startTime > 1200){
  ellipse(450,450,logS[11]);
}
if (millis()-startTime > 1250){
  ellipse(450,450,logS[1]+50);
  }
if (millis() - startTime > 1200){
startTime = millis();
}
pop();


let lw = 450;
let rw = 450;
let xc = constrain(450,lw,rw);
strokeWeight(2);
noFill();

let noiseLevel = massMap;
let noiseScale = 0.015
for (let x1 = 150; x1 < 300; x1+= 6){
  let nx = noiseScale * x1;
  let nt = noiseScale * frameCount;
let c = noiseLevel * noise(nx,nt);

stroke(307,90,99);
ellipse(xc,450,x1,c);
stroke(142,90,99);
ellipse(xc,450,x1+100,c+100)
stroke('white');
ellipse(xc,450,x1+150,c+150)
}

}
