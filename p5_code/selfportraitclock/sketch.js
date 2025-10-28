let bgc;
let shc;
let images = [];
let books = [];
let x = 85.5

function preload(){
for (let i = 0; i < 59; i++){
images[i] = loadImage("assets/polaroids/"+ i + "_img.png");
}

flash = loadImage("assets/flash.png")
lipstick = loadImage("assets/lipstick.png")

for (let i = 1; i < 24; i++){
books[i] = loadImage("assets/books/"+i+"_time.png");
}
}

function setup() {
  createCanvas(1300,700);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);

  //bgc = color(20,20,255);
  bgc = color(255,231,150);
  shc = color(0);
  //shc = color(200);
}

function draw() {
  let h = hour();   // 0-23
  let m = minute(); // 0- 59
  let s = second();  // 0-59
  let msec = millis(); //0-999
  background(bgc);
noFill();
if(h > 16 || h < 7){
  stroke(255);
} else {
  stroke(0);
}
// strings
arc(width/2, -595, width*3, width, 40, 350);
arc(width/2, -495, width*3, width, 40, 350);
arc(width/2, -395, width*3, width, 40, 350);
arc(width/2, -295, width*3, width, 40, 350);

 fill(0);

 push();
 translate(10,-75);
 scale(1.1);
 scrapbooks();
 pop();

 beverage();


 //line(width/2,0,width/2,height);
fill(255);
noStroke();




if (m > 0){
  push();
  translate(16,17.5);
  rotate(6);
  polaPicture(0);
  pop();
}
if (m > 1){
  push();
  translate(16+x, 27);
  rotate(5.5);
  polaPicture(1);
  pop();
}
if (m > 2){
  push();
  translate(16+(2*x), 35);
  rotate(4);
  polaPicture(2);
  pop();
}
if (m > 3){
  push();
  translate(16+(3*x), 41.5);
  rotate(3);
  polaPicture(3);
  pop();
}
if (m > 4){
  push();
  translate(16+(4*x), 47);
  rotate(2);
  polaPicture(4);
  pop();
}

if (m > 5){
  push();
  translate(16+(5*x), 50.25);
  rotate(1);
  polaPicture(5);
  pop();
}

if (m > 6){
  push();
  translate(16+(6*x), 52.5);
  rotate(0.5);
  polaPicture(6);
  pop();
}

if (m > 7){
  push();
  translate(16+(7*x), 53.5);
  rotate(0);
  polaPicture(7);
  pop();
}

if (m > 8){
  push();
  translate(16+(8*x), 53);
  rotate(-0.5);
  polaPicture(8);
  pop();
}

if (m > 9){
  push();
  translate(16+(9*x), 51.5);
  rotate(-1.2);
  polaPicture(9);
  pop();
}

if (m > 10){
  push();
  translate(16+(10*x), 49);
  rotate(-2.5);
  polaPicture(10);
  pop();
}

if (m > 11){
  push();
  translate(16+(11*x), 45.5);
  rotate(-3.5);
  polaPicture(11);
  pop();
}

if (m > 12){
  push();
  translate(16+(12*x),40);
  rotate(-4);
  polaPicture(12);
  pop();
}

if (m > 13){
  push();
  translate(16+(13*x), 33.5);
  rotate(-5);
  polaPicture(13);
  pop();
}

if (m > 14){
  push();
  translate(16+(14*x), 25.5);
  rotate(-6);
  polaPicture(14);
  pop();
}

if (m > 15){
  push();
  translate(16,117.5);
  rotate(6);
  polaPicture(15);
  pop();
}
if (m > 16){
  push();
  translate(16+x, 127);
  rotate(5.5);
  polaPicture(16);
  pop();
}
if (m > 17){
  push();
  translate(16+(2*x), 135);
  rotate(4);
  polaPicture(17);
  pop();
}
if (m > 18){
  push();
  translate(16+(3*x), 141.5);
  rotate(3);
  polaPicture(18);
  pop();
}
if (m > 19){
  push();
  translate(16+(4*x), 147);
  rotate(2);
  polaPicture(19);
  pop();
}

if (m > 20){
  push();
  translate(16+(5*x), 150.25);
  rotate(1);
  polaPicture(20);
  pop();
}

if (m > 21){
  push();
  translate(16+(6*x), 152.5);
  rotate(0.5);
  polaPicture(21);
  pop();
}

if (m > 22){
  push();
  translate(16+(7*x), 153.5);
  rotate(0);
  polaPicture(22);
  pop();
}

if (m > 23){
  push();
  translate(16+(8*x), 153);
  rotate(-0.5);
  polaPicture(23);
  pop();
}

if (m > 24){
  push();
  translate(16+(9*x), 151.5);
  rotate(-1.2);
  polaPicture(24);
  pop();
}

if (m > 25){
  push();
  translate(16+(10*x), 149);
  rotate(-2.5);
  polaPicture(25);
  pop();
}

if (m > 26){
  push();
  translate(16+(11*x), 145.5);
  rotate(-3.5);
  polaPicture(26);
  pop();
}

if (m > 27){
  push();
  translate(16+(12*x),140);
  rotate(-4);
  polaPicture(27);
  pop();
}

if (m > 28){
  push();
  translate(16+(13*x), 133.5);
  rotate(-5);
  polaPicture(28);
  pop();
}

if (m > 29){
  push();
  translate(16+(14*x), 125.5);
  rotate(-6);
  polaPicture(29);
  pop();
}

if (m > 30){
  push();
  translate(16,217.5);
  rotate(6);
  polaPicture(30);
  pop();
}
if (m > 31){
  push();
  translate(16+x, 227);
  rotate(5.5);
  polaPicture(31);
  pop();
}
if (m > 32){
  push();
  translate(16+(2*x), 235);
  rotate(4);
  polaPicture(32);
  pop();
}
if (m > 33){
  push();
  translate(16+(3*x), 241.5);
  rotate(3);
  polaPicture(33);
  pop();
}
if (m > 34){
  push();
  translate(16+(4*x), 247);
  rotate(2);
  polaPicture(34);
  pop();
}

if (m > 35){
  push();
  translate(16+(5*x), 250.25);
  rotate(1);
  polaPicture(35);
  pop();
}

if (m > 36){
  push();
  translate(16+(6*x), 252.5);
  rotate(0.5);
  polaPicture(36);
  pop();
}

if (m > 37){
  push();
  translate(16+(7*x), 253.5);
  rotate(0);
  polaPicture(37);
  pop();
}

if (m > 38){
  push();
  translate(16+(8*x), 253);
  rotate(-0.5);
  polaPicture(38);
  pop();
}

if (m > 39){
  push();
  translate(16+(9*x), 251.5);
  rotate(-1.2);
  polaPicture(39);
  pop();
}

if (m > 40){
  push();
  translate(16+(10*x), 249);
  rotate(-2.5);
  polaPicture(40);
  pop();
}

if (m > 41){
  push();
  translate(16+(11*x), 245.5);
  rotate(-3.5);
  polaPicture(41);
  pop();
}

if (m > 42){
  push();
  translate(16+(12*x),240);
  rotate(-4);
  polaPicture(42);
  pop();
}

if (m > 43){
  push();
  translate(16+(13*x), 233.5);
  rotate(-5);
  polaPicture(43);
  pop();
}

if (m > 44){
  push();
  translate(16+(14*x), 225.5);
  rotate(-6);
  polaPicture(44);
  pop();
}


if (m > 45){
  push();
  translate(16,317.5);
  rotate(6);
  polaPicture(45);
  pop();
}
if (m > 46){
  push();
  translate(16+x, 327);
  rotate(5.5);
  polaPicture(46);
  pop();
}
if (m > 47){
  push();
  translate(16+(2*x), 335);
  rotate(4);
  polaPicture(47);
  pop();
}
if (m > 48){
  push();
  translate(16+(3*x), 341.5);
  rotate(3);
  polaPicture(48);
  pop();
}
if (m > 49){
  push();
  translate(16+(4*x), 347);
  rotate(2);
  polaPicture(49);
  pop();
}

if (m > 50){
  push();
  translate(16+(5*x), 350.25);
  rotate(1);
  polaPicture(50);
  pop();
}

if (m > 51){
  push();
  translate(16+(6*x), 352.5);
  rotate(0.5);
  polaPicture(51);
  pop();
}

if (m > 52){
  push();
  translate(16+(7*x), 353.5);
  rotate(0);
  polaPicture(52);
  pop();
}

if (m > 53){
  push();
  translate(16+(8*x), 353);
  rotate(-0.5);
  polaPicture(53);
  pop();
}

if (m > 54){
  push();
  translate(16+(9*x), 351.5);
  rotate(-1.2);
  polaPicture(54);
  pop();
}

if (m > 55){
  push();
  translate(16+(10*x), 349);
  rotate(-2.5);
  polaPicture(55);
  pop();
}

if (m > 56){
  push();
  translate(16+(11*x), 345.5);
  rotate(-3.5);
  polaPicture(56);
  pop();
}

if (m > 57){
  push();
  translate(16+(12*x),340);
  rotate(-4);
  polaPicture(57);
  pop();
}

if (m > 58){
  push();
  translate(16+(13*x), 333.5);
  rotate(-5);
  polaPicture(58);
  pop();
}


polaCamera();

 if (h > 16 || h < 7 ) {  // sunset and sunrise
      // nightime
      fill(200);
      //ellipse(100,100,100,100);
     bgc = color(15, 13, 54);
     shc = color(200);
     
     //sundown
 } else {
     //daytime
     fill(255,200,0);
     //ellipse(100,100,400,400);
     bgc = color(247, 231, 151);
     shc = color(20);
     
 }


}

function polaCamera(){
  let s = second();  // 0-59
  let msec = millis(); //0-999
  let mms = map(msec,0,999,0,360);
  //main "body"
push();
translate(1100,480);
scale(1.6);
// main "body"
fill(255, 224, 254);
rect(15,0,100,130,18);
circle(30,25,50);
rect(5,13,100,117,18);
//viewfinder
fill(0);
rect(15,20,9,12,1)
//shutter button
stroke(0);
strokeWeight(0.5);
noFill();
circle(20,50,13);
//lens
stroke(255,170,200);
circle(70,80,75);
noFill();
stroke(0);
circle(70,80,57);
circle(70,80,47);
fill(0);
circle(70,80,22);
fill(222, 215, 222);
stroke(200);
rect(48,75,9,12,3);
fill(85, 85, 85);
arc(70,80,21,21,-90,-90+mms);
//little black dots?? idk
fill(0);
noStroke();
circle(63,19,6);
circle(63,26,6);
//flash
fill(222, 215, 222);
circle(40,13,17);
rect(31.5,13,17,16);
circle(40,29,17);
if (s == 59) {  
  image(flash, 20,3,40,35);
}
}

function polaPicture(i){
  let h = hour();   // 0-23
  let m = minute(); // 0- 59
  let s = second();  // 0-59
  let msec = millis(); //0-999
scale(1.1);
push();
rect(0,8,65,75);
fill(46, 29, 12);
rect(30,0,5,10);

image(images[i],5,13,55,55);
if (h > 16 || h < 7){
  stringLights(32.5,0);
  }
pop();
}

function stringLights(lx,ly){
  fill(255,255,100,4);
  for(i = 0; i < 100; i++){
    ellipse(lx,ly, i/4);
  }
}

function scrapbooks(){
  let h = hour();
  fill(255);
  noStroke();
  fill(66, 40, 19);
  rect(-5,530,840,172,2);
  if(h > 0){
    push();
    scale(0.7);
    image(books[1], -65,760);
    pop();
  }
  if(h > 1){
    push();
    scale(0.7);
    image(books[2], -13,760);
    pop();
  }
   
  if(h > 2){
    push();
    scale(0.7);
    image(books[3], 33,760);
    pop();
  }
  
  if(h > 3){
    push();
    scale(0.7);
    image(books[4], 82.5,760.5);
    pop();
  }
  
  if(h > 4){
    push();
    scale(0.7);
    image(books[5], 133.5,760);
    pop();
  }
   
  if(h > 5){
    push();
    scale(0.7);
    image(books[6], 189,760);
    pop();
  }
  
  if(h > 6){
    push();
    scale(0.7);
    image(books[7], 235,760);
    pop();
  }
  
  if(h > 7){
    push();
    scale(0.7);
    image(books[8], 275.3,760);
    pop();
  }
  
  if(h > 8){
    push();
    scale(0.7);
    image(books[9], 320,760);
    pop();
  }
  
  if(h > 9){
    push();
    scale(0.7);
    image(books[10], 364.5,760);
    pop();
  }
  
  if(h > 10){
    push();
    scale(0.7);
    image(books[11], 404,763);
    pop();
  }
  
  if(h > 11){
    push();
    scale(0.7);
    image(books[12], 450,760);
    pop();
  }
  
  if(h > 12){
    push();
    scale(0.7);
    image(books[13], 492.5,760);
    pop();
  }
  
  if(h > 13){
    push();
    scale(0.7);
    image(books[14], 537.5,760);
    pop();
  }
  
  if(h > 14){
    push();
    scale(0.7);
    image(books[15], 593,760);
    pop();
  }
  
  if(h > 15){
    push();
    scale(0.7);
    image(books[16], 662,760);
    pop();
  }
  
  if(h > 16){
    push();
    scale(0.7);
    image(books[17], 716.5,760);
    pop();
  }
  
  if(h > 17){
    push();
    scale(0.7);
    image(books[18], 759.5,760);
    pop();
  }
  
  if(h > 18){
    push();
    scale(0.7);
    image(books[19], 818,760);
    pop();
  }
  
  if(h > 19){
    push();
    scale(0.7);
    image(books[20], 879,760);
    pop();
  }
  
  if(h > 20){
    push();
    scale(0.7);
    image(books[21], 928,760);
    pop();
  }
  if(h > 21){
    push();
    scale(0.7);
    image(books[22], 995.5,760.5);
    pop();
  }
  
  if(h > 22){
    push();
    scale(0.7);
    image(books[23], 1067,760);
    pop();
  }
}

function beverage(){
  let s = second();
  let ms = map(s,0,59,120,0);
  let h = hour();
  push();
  translate(975, 527);
  scale(1.4);
  //glass
 fill(255, 30);
stroke(123, 201, 224);
rect(0,0,60,120);
if (h>9 && h<14){
  // smoothie
  fill(169, 147, 194);
} else if(h>18 && h<23){
  // milk
fill(255);
} else {
  //water
  fill(123, 201, 224, 80);
}
push();
noStroke();
rotate(180);
rect(-60,-120,60,ms);
pop();
//lipstick
push();
if (h > 10 && h < 22){
  scale(0.5);
  image(lipstick,-45,-80)
}
pop();
pop();
}