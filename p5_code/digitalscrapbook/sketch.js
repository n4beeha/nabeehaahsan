
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let notlivingaudio,snd2, wickedaudio, beybladeaudio, marjorieaudio, ambience, matchstrike;
let leaf1, leaf2, leaf3, leaf4;
let helpbutton, creditbutton, startbutton;
let marjoriebutton, notlivingbutton, wickedbutton, beybladebutton, icecreambutton;
let mainpage, helppage, creditpage, splashpage, wickedpage, notlivingpage, marjoriepage;
let font1;


// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var pie;

function preload() {
    // sound should be loaded so its available for all places.
   notlivingaudio = loadSound("assets/not_living.mp3");
   snd2 = loadSound("assets/page_turn.mp3");
   wickedaudio = loadSound("assets/wickedaudio.mp3");
   beybladeaudio = loadSound("assets/beybladeaudio.mp3");
   marjorieaudio = loadSound("assets/marjorieaudio.mp3");
   ambience = loadSound("assets/ambience.mp3");
   matchstrike = loadSound("assets/match.mp3");
   

   leaf1 = loadImage("assets/leaf_1.png");
   leaf2 = loadImage("assets/leaf_2.png");
   leaf3 = loadImage("assets/leaf_3.png");
   leaf4 = loadImage("assets/leaf_4.png");

   helpbutton = loadImage("assets/help.png");
   startbutton = loadImage("assets/start_here.png");
   creditbutton = loadImage("assets/creditbutton.png")
   marjoriebutton = loadImage("assets/marjorie.png");
   notlivingbutton = loadImage("assets/not_living.png");
   wickedbutton = loadImage("assets/wicked.png");
   beybladebutton = loadImage("assets/beyblade.png");
   icecreambutton = loadImage("assets/ice_cream.png");

   splashpage = loadImage("assets/splash_page.png")
   helppage = loadImage("assets/help_page.png");
   mainpage = loadImage("assets/main_page.png");
   creditpage = loadImage("assets/credit_page.png");
   wickedpage = loadImage("assets/wicked_page.png");
   beybladepage = loadImage("assets/beyblade_page.png"); 
   icecreampage = loadImage("assets/icecream_page.png"); 
   notlivingpage = loadImage("assets/notliving_page.png");
   marjoriepage = loadImage("assets/marjorie_page.png");
   font1 = loadFont("assets/phoebe-whitmore.ttf");

}

function setup() {
    createCanvas(1300, 700);
    //console.log(hell);
    mgr = new SceneManager();

    pie = createSprite(0, 0);
    pie.addAnimation("normal", "assets/pie0001.png",  "assets/pie0005.png");  // first image, and last image
    pie.addAnimation("stand", "assets/pencil0001.png",  "assets/pencil0006.png"); // first image, and last image
     // make the sprite invisible until you need it.
    pie.visible = false;
textFont(font1);
textSize(30);
stroke(0);
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (wicked);
    mgr.addScene (beyblade);
    mgr.addScene (icecream);
    mgr.addScene (notliving);
    mgr.addScene (marjorie);
    mgr.addScene (credits);
    mgr.addScene (help);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( wicked );
            break;
        case '4':
            mgr.showScene( beyblade );
            break;
        case '5':
            mgr.showScene( icecream );
            break;
        case '6':
            mgr.showScene( notliving );
            break;
        case '7':
            mgr.showScene( marjorie );
            break;
        case '8':
            mgr.showScene( credits );
            break;
        case '912':
            mgr.showScene( help );
            break;    
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
