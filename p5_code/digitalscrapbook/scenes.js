
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================



////////////////////////////// 1 /////////////////
function splash()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;
    let btnevent2 =false;
    let btnevent3 =false;

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        notlivingaudio.stop();
        // make sure ghost is gone from this scene
        pie.visible = false;
      

    }


    this.draw = function()
    {
      background("lightblue");
      image(splashpage, 0,0,1300,700);

      // this is the draw function for all p5.play commands
     
        // push();
        
        // translate(width/2,loy-100);
        // fill(10,200,160);
        // text("Splash Down!",0,-120);
        // ellipse(0,0,80,140);


        // if (loy > height-140) {
        //   loy = 0;
        // }
        //  loy++;

        // pop();
    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        playshortsound();
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress(leaf1,1160,65,84,84,color(120,180,100),color(100),color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showScene( main );
      }

      push();
      textAlign(CORNER);
      noStroke();
      fill(252, 202, 131);
      textSize(36);
      text("Click the leaf to open the scrapbook.",37, 390);
      textSize(150);
      text("WELCOME.",37,350);
      pop();
      btnevent3 = checkButtonPress(creditbutton,13,70,47,47,color(120,180,100),color(100),color(250));
      if (btnevent3) {   // main or next scene
        btnevent3 = false;
         playshortsound();
         this.sceneManager.showScene( credits );
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
}

///////////////////////  2  ////////////////////////

function main()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;
   let btnevent2 = false;
   let btnevent3 = false;
   let btnevent4 = false;
   let btnevent5 = false;
   let btnevent6 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  240;
    pie.position.y =  270;
    pie.visible = true;
    pie.changeAnimation("normal");

    marjorieaudio.stop();
    beybladeaudio.stop();
    wickedaudio.stop();
    notlivingaudio.stop();
    if ( !ambience.isPlaying() ) {
      ambience.play();
   }

  }

    this.draw = function() {
      background("lightblue");
      image(mainpage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined

    
    pie.changeAnimation("normal");

     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        matchstrike.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

}  
     


    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent2 = checkButtonPress(beybladebutton,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
    if (btnevent2) { // help
      btnevent2 = false;
      // text("hello", 35,35)
      this.sceneManager.showScene( beyblade );
    }

    btnevent3 = checkButtonPress(wickedbutton,894,410,145, 171.5, color(220,100,100),color(100),color(250));  
    if (btnevent3) { // help
      btnevent3 = false;
      this.sceneManager.showScene( wicked );
    }

    btnevent4 = checkButtonPress(notlivingbutton,918,270,145, 116.76, color(220,100,100),color(100),color(250));  
    if (btnevent4) { // help
      btnevent4 = false;
      this.sceneManager.showScene( notliving );
    }

    btnevent5 = checkButtonPress(icecreambutton,470,205,160, 167.20, color(220,100,100),color(100),color(250));  
    if (btnevent5) { // help
      btnevent5 = false;
      this.sceneManager.showScene( icecream );
    }

    btnevent6 = checkButtonPress(marjoriebutton,710,160,120, 167.15, color(220,100,100),color(100),color(250));  
    if (btnevent6) { // help
      btnevent6 = false;
      this.sceneManager.showScene( marjorie );
    }

image(leaf1,990,330);
image(leaf3,1055,530);
image(leaf2,640,210);
image(leaf4,750,390);
    }  //end

    this.mousePressed = function()
    {

    }


}



////////////////////////////// 3 /////////////////

function wicked()  {


  this.y = 0;
   // var y = 0;
   this.lox = 50;
   // var lox = 50;

  this.loy = 120;
   // var loy = 120;

  let btnevent1 = false;
  let btnevent2 = false;

 this.setup = function() {
     console.log("We are at setup for wicked");
     // make sure ghost is gone from this scene
 }

 this.enter = function()
 {
   console.log("We are at entering wicked");
   pie.position.x = 50;
   pie.position.y = 80;
   pie.position.x =  240;
   pie.position.y =  270;
   pie.visible = true;
   pie.changeAnimation("normal");

   beybladeaudio.stop();
   marjorieaudio.stop();
   notlivingaudio.stop();
   ambience.stop();

   if ( !wickedaudio.isPlaying() ) {
    wickedaudio.play();
 }
  

 }

   this.draw = function() {
     background("lightblue");
     image(wickedpage, 0,0,1300,700);
     // this is the draw function for all p5.play commands
  
     // ghost events defined

   
   pie.changeAnimation("normal");

    if ( pie.mouse.hovering() ) {
       console.log("over");
       pie.changeAnimation("stand");
       pie.position.x += random(-9,9);
       pie.position.y += random(-9,9);
       snd2.play();  // lots of fast sound playing
    }
     
    if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  


   // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
   btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     this.sceneManager.showScene( help );
   }

  //  btnevent2 = checkButtonPress(beyblade,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
  //  if (btnevent2) { // help
  //    btnevent2 = false;
  //    text("hello", 35,35)
  //    //this.sceneManager.showScene( help );
  //  }

   }  //end

   this.mousePressed = function()
   {

   }


}

function beyblade()  {

   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for beyblade");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering beyblade");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  240;
    pie.position.y =  270;
    pie.visible = true;
    pie.changeAnimation("normal");
 
 
    wickedaudio.stop();
    marjorieaudio.stop();
    notlivingaudio.stop();
    ambience.stop();
    if ( !beybladeaudio.isPlaying() ) {
      beybladeaudio.play();
    }
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(beybladepage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(beyblade,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }


 function icecream()  {
  beybladeaudio.stop();
  marjorieaudio.stop();
  notlivingaudio.stop();
  wickedaudio.stop();
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for wicked");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering wicked");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  240;
    pie.position.y =  270;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    beybladeaudio.stop();
    marjorieaudio.stop();
    notlivingaudio.stop();
    wickedaudio.stop();

 if ( !ambience.isPlaying() ) {
      ambience.play();
   }
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(icecreampage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        matchstrike.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(beyblade,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }

 function notliving()  {
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for notliving");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering notliving");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  515;
    pie.position.y =  500;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    ambience.stop();
    beybladeaudio.stop();
    marjorieaudio.stop();
    wickedaudio.stop();
    
    if ( !notlivingaudio.isPlaying() ) {
     notlivingaudio.play();
   }
   
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(notlivingpage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}  
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(beyblade,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }

 function marjorie()  {
  
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;
 
   this.loy = 120;
    // var loy = 120;
 
   let btnevent1 = false;
   let btnevent2 = false;
 
  this.setup = function() {
      console.log("We are at setup for notliving");
      // make sure ghost is gone from this scene
  }
 
  this.enter = function()
  {
    console.log("We are at entering notliving");
    pie.position.x = 50;
    pie.position.y = 80;
    pie.position.x =  240;
    pie.position.y =  270;
    pie.visible = true;
    pie.changeAnimation("normal");
 
    wickedaudio.stop();
    beybladeaudio.stop();
    notlivingaudio.stop();
    ambience.stop();

    if ( !marjorieaudio.isPlaying() ) {
     marjorieaudio.play();
   }
   
 
  }
 
    this.draw = function() {
      background("lightblue");
      image(marjoriepage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
   
      // ghost events defined
 
    
    pie.changeAnimation("normal");
 
     if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        pie.position.x += random(-9,9);
        pie.position.y += random(-9,9);
        snd2.play();  // lots of fast sound playing
     }
      
     if (pie.mouse.pressing()) {
      if ( !snd2.isPlaying() ) {
         snd2.play();
     } else {
         snd2.pause();

     }

  this.sceneManager.showScene( main );

}   
 
 
    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }
 
   //  btnevent2 = checkButtonPress(beyblade,1085,341,141,159.74,color(220,100,100),color(100),color(250));  
   //  if (btnevent2) { // help
   //    btnevent2 = false;
   //    text("hello", 35,35)
   //    //this.sceneManager.showScene( help );
   //  }
 
    }  //end
 
    this.mousePressed = function()
    {
 
    }
 
 
 }


function credits() {


  let btnevent1 = false;
  this.setup = function()  {
      console.log("We are at setup for credits");
      // access a different scene using the SceneManager

  }

  this.enter = function()
  {
   console.log("We are at entering for credits");
   pie.visible = true;
   pie.position.x = 100;
   pie.position.y = 100;

   beybladeaudio.stop();
   marjorieaudio.stop();
   notlivingaudio.stop();
   wickedaudio.stop();
   if ( !ambience.isPlaying() ) {
     ambience.play();
  }

  }

  this.draw = function() {
    background("lightblue");
    image(creditpage, 0,0,1300,700);
    // this is the draw function for all p5.play commands
    
    

    if ( pie.mouse.hovering() ) {
      console.log("over");
      pie.changeAnimation("stand");
      // pie.position.x += random(-4,4);
      // pie.position.y += random(-2,2);
    
   }  else {

    pie.changeAnimation("normal");


   }
    

   if (pie.mouse.pressing()) {
    if ( !snd2.isPlaying() ) {
       snd2.play();
   } else {
       snd2.pause();

   }

this.sceneManager.showScene( main );

}  


   btnevent1 = checkButtonPress(helpbutton,13,13,47,47,color(220,100,100),color(100),color(250));  
   if (btnevent1) { // help
     btnevent1 = false;
     this.sceneManager.showScene( help );
   }
       // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
       btnevent2 = checkButtonPress(startbutton,500,62,14,575,color(120,180,100),color(100),color(250));
       if (btnevent2) {   // main or next scene
         btnevent2 = false;
           playshortsound();
           this.sceneManager.showScene( main );
       }
    //    fill("black");
    // textAlign(LEFT);
    // textSize(25);
    
    push();
    textAlign(LEFT);
    textSize(25);
    stroke(242, 204, 179);
    fill(242, 204, 179);
    text( "Illustrations, Animations, and Code\nby Nabeeha\n\nSound Effects from ZapSplat\n\nDancing Through Life by the\nOriginal Broadway Cast of Wicked\n\nGangstas Paradise by Coolio\n\nIts Not Living If Its Not With You\nby the 1975\n\nMarjorie by Taylor Swift", 875,200);
  pop();
  }
 

}


////////////////////////////// 4 /////////////////

function help() {
 
let btnevent1=false;

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     pie.visible = true;
     pie.position.x = 100;
     pie.position.y = 100;

     beybladeaudio.stop();
     marjorieaudio.stop();
     notlivingaudio.stop();
     wickedaudio.stop();
     if ( !ambience.isPlaying() ) {
       ambience.play();
    }
    }

    this.draw = function() {
      background("lightblue");
      image(helppage, 0,0,1300,700);
      // this is the draw function for all p5.play commands
      fill("black");
      push();
      textAlign(LEFT);
      textSize(25);
      stroke(46, 31, 26);
      fill(46, 31, 26);
      text( "To navigate the scrapbook,\nclick a photo or song lyric\nand recieve a reminder or\nmemory.\n\nClick on the pie at any time\nto return to the main page." , 475,320);
pop();
      

      if ( pie.mouse.hovering() ) {
        console.log("over");
        pie.changeAnimation("stand");
        // pie.position.x += random(-4,4);
        // pie.position.y += random(-2,2);
      
     }  else {
      pie.changeAnimation("normal");
     }
      
     if (pie.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( main );

     }  
 
    }

}


function checkButtonPress(i,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(i + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  image(i,0,0,boxW, boxH);
  // rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  //text (str,boxW/2,28);

    pop();

    return btnstate;

}


function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}