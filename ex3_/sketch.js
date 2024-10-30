let speedX, speedY, loX, loY;
let speedX2, speedY2, loX2, loY2;
let speedX3, speedY3, loX3, loY3;
let speedX4, speedY4, loX4, loY4;
let counter1 = 10;
let superman = '';
let rain = '';
let scaleSM = 1.8;
let scaleCK = 1.5;
let scaleBM = 1.8;
let scaleBW = 1.5;
let mask;

function preload(){
  mask = loadImage("assets/cowl.png");
}

function setup() { 
    background(118, 204, 245);
    createCanvas(600, 500);
    speedX = random(-3,3);
    speedY = random(-3,3);
    loX = height / 2;
    loY = width / 2;

    speedX2 = random(-3,3);
    speedY2 = random(-3,3);
    loX2 = height / 2;
    loY2 = width / 2;

    speedX3 = random(-3, 3);
    speedY3 = random(-3, 3);
    loX3 = height / 2;
    loY3 = width / 2;

    speedX4 = random(-3, 3);
    speedY4 = random(-3, 3);
    loX4 = height / 2;
    loY4 = width / 2;

  }

function draw() {
    background(118, 204, 245,10);
    if (loX < 0) {
        speedX = -speedX;
    }
    if (loX > width) {
        speedX = -speedX;
    }
    if (loX2 < 0) {
      speedX2 = -speedX2;
    }
    if (loX2 > width) {
      speedX2 = -speedX2;
    }
    if (loX3 < 0) {
      speedX3 = -speedX3;
    }
    if (loX3 > width) {
      speedX3 = -speedX3;
    }
    if (loX4 < 0) {
      speedX4 = -speedX4;
    }
    if (loX4 > width) {
      speedX4 = -speedX4;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loY < 0) || (loY > height)) {
        speedY = -speedY;
    }
    if ((loY2 < 0) || (loY2 > height)) {
      speedY2 = -speedY2;
    }
    if ((loY3 < 0) || (loY3 > height)) {
      speedY3 = -speedY3;
    }
    if ((loY4 < 0) || (loY4 > height)) {
      speedY4 = -speedY4;
    }
    // update the position of the ball and print to screen
    
    
    loX += speedX;
    loY += speedY;
    push();
      translate(width/2, height/2);
      rotate(radians(counter1));
      scale(scaleSM);
      clark(loX/scaleSM,loY/scaleSM,'swoop');
    pop();
    
    loX2 += speedX2;
    loY2 += speedY2;
    push();
      scale(scaleCK);
      stroke(200,120);
      //line(loX2/scaleCK,loY2/scaleCK,40,40);
      clark(loX2/scaleCK,loY2/scaleCK,'glasses');
    pop();

    loX3 += speedX3;
    loY3 += speedY3;
    push();
      scale(scaleBM)
      bruce(loX3/scaleBM, loY3/scaleBM, 'cowl')
    pop();
  
    loX4 += speedX4;
    loY4 += speedY4;
    push();
    scale(scaleBW)
    bruce(loX4/scaleBW, loY4/scaleBW, 'bowtie')
    pop();


  push();
    translate(150, 150)
    cloud1();
  pop();

  push();
    translate(460, 250)
    rotate(radians(180))
    cloud1();
  pop();
  
  push();
    translate(390,80);
    cloud2();
  pop();

  push();
    translate(100,300);
    rotate(radians(180));  
    cloud2('rainbow');
  pop();

  counter1++;
}

  function clark(lx,ly,superman) {
    push();
    stroke(232, 9, 9, 80);
    //face
    fill(240, 201, 156);
    ellipse(lx,ly, 25, 25);
    noStroke();
    //eyes
    fill(255);
    ellipse(lx-5,ly, 7, 7);
    fill(255);
    ellipse(lx+5,ly, 7, 7);
     //pupils
    fill(33, 128, 217);
    ellipse(lx-5,ly, 4, 4);
    fill(33, 128, 217);
    ellipse(lx+5,ly, 4, 4);
    //mouth 
  noFill();
    stroke(87, 60, 53);
    strokeWeight(0.75);
    arc(lx,ly+5,5,5,radians(20),radians(160));
    noStroke();
    //hair
    fill(0);
    rect(lx-10,ly-14,20,8)
    switch(superman){
      case 'swoop':
        swoop(lx,ly);
        break;
      case 'glasses':
        glasses(lx,ly);
        break;
      default:
    }
    pop();
  }
function swoop(lx,ly){
  push(); 
  noFill();
    stroke(0);
    strokeWeight(2.5);
    arc(lx,ly-5.5,6,6,7,PI+HALF_PI);
    noStroke();
  pop();
  }
  function glasses(lx,ly){
    push();
    rectMode(CENTER)
    noFill();
    stroke(0);
    strokeWeight(1);
    rect(lx-5,ly,7,6,1);
    rect(lx+5,ly,7,6,1);
    line(lx-2,ly,lx+2,ly)
    noStroke();
    rectMode(CORNER);
    pop();
  }

function bruce(lx,ly,batman){
  push();
  stroke(48, 48, 46, 80);
//face
  fill(232, 202, 167);
  ellipse(lx,ly, 25, 25);
  noStroke();
//eyes
  fill(255);
  arc(lx-5,ly-1,7,7,radians(0),radians(180));
  fill(255);
  arc(lx+5,ly-1,7,7,radians(0),radians(180));
//pupils
  fill(63, 80, 209);
  arc(lx-5,ly-1,4,4,radians(0),radians(180));
  fill(63, 80, 209);
  arc(lx+5,ly-1,4,4,radians(0),radians(180));
//mouth 
  noFill();
  stroke(87, 60, 53);
  strokeWeight(0.75);
  line(lx-4,ly+7,lx+4,ly+7);
  noStroke();
  switch(batman){
    case 'cowl':
      cowl(lx,ly);
      break;
    case 'bowtie':
      bowtie(lx,ly);
      break;
    default:
  }
  pop();
}
function cowl(lx,ly){
  image(mask,lx-32,ly-22,70,43)
}
function bowtie(lx,ly){
  push(); 
    //hair
    fill(0);
    rect(lx-10,ly-14,20,8)  
    //tie
    stroke(200);
    strokeWeight(0.5);
    triangle(lx-7,ly+10, lx-7,ly+15, lx+1, ly+12.5);
    triangle(lx-1, ly+12.5,lx+7,ly+10, lx+7,ly+15);
    circle(lx,ly+12.5, 2.5)
    noStroke();
  pop();
  }

  function cloud1(){
    noStroke();
    fill(255);
    circle(-20,-10,60)
    circle(20,-10,70)
    circle(0,0,60)
  }
  function cloud2(){
    push();
    noStroke();
    fill(255);
    circle(-40,0,40)
    circle(30,0,70)
    circle(0,-5,80)
    circle(60,0,40)
    pop();
  }
