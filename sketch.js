var gameState = "start";
var goal,homescreenBoy,goalkeeper
var gameOverImg, goalImg, goalkeeperImg, homescreenImg;
var runningVid, player;
var cloudsGroup, cloudImage;
var start,start1;

var score;
var gameOverImg,restartImg;


function preload(){

  runningVid = loadImage("penaltyTaker.png")
  cloudImage = loadImage("cloud.png");
  
  goalkeeperImg = loadImage("goalkeeper.png");
  goalImg = loadImage("goal.jpg");

  homescreenImg = loadImage("homescreen.png");
  
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameOver.png");

  start = loadImage("startButton.png");
 
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);

  goalkeeper = createSprite(displayWidth/2-190,175);
  goalkeeper.addImage(goalkeeperImg);
  goalkeeper.scale = 0.20;

  goal = createSprite(displayWidth/2-200,150);
  goal.addImage(goalImg);
  goal.scale = 1.5;

  start1 = createSprite(displayWidth/2-230, height-500,20,20);
  start1.addImage(start);
  start1.scale = 0.17;

  homescreenBoy = createSprite(displayWidth/2,displayHeight/2);
  homescreenBoy.addImage(homescreenImg);

  player = createSprite(displayWidth/2-190,displayHeight/2);
  player.addImage(runningVid);
  player.scale = 0.5;
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;
  
  cloudsGroup = createGroup();

  /*runningVid = createVideo("running player.mp4");
  runningVid.size(400, 400);
  runningVid.hide();*/
  
}

function draw() {
  
  background("#20ED54");
  
  
  if(gameState === "start"){

    background("#20ED54");

    gameOver.visible = false;
    restart.visible = false;
    goal.visible = false;
    goalkeeper.visible = false;
    player.visible = false;
    
    
    //homescreenBoy = createSprite(displayWidth/2,displayHeight/2);
    //homescreenBoy.addImage(homescreenImg);
    homescreenBoy.visible = true;

    fill("black");
    textSize(25);
    text("PRESS THE START BUTTON TO PLAY THE GAME.",displayWidth/2-350,50);
    text("YOU CAN TAKE THE PENALTY BY PRESSING THE 'SPACE BAR KEY'.",displayWidth/2-400,100);
    text("PRESS THE 'UP ARROW KEY' TO TAKE THE PENALTY RUN-UP.",displayWidth/2-400,150);
    
    if(mousePressedOver(start1)){

      gameState = "play";
      start1.destroy();

      homescreenBoy.visible = false; 
      
    }
    if(gameState==="play"){
      goal.visible = true;
      goalkeeper.visible = true;
      player.visible = true;

      goalkeeper.depth = goal.depth;
      goalkeeper.depth+=1;

      spawnClouds();

      //runningVid.play();

      //let img = runningVid.get();
      //image(img, displayWidth/2, displayHeight/2); 
    }

  
  


  }
   /*else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
     

  
    cloudsGroup.setLifetimeEach(-1);
     cloudsGroup.setVelocityXEach(0);    
   }*/
  
 

  
  if(mousePressedOver(restart)) {
      reset();
    }


  drawSprites();
}

function reset(){
  gameState = "start";
  restart.visible = false;
  gameOver.visible = false;
 
  cloudsGroup.destroyEach();
  score = 0;
}





function spawnClouds() {

  if (frameCount % 60 === 0) {
    var cloud = createSprite(1200,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 1;
    cloud.velocityX = -3;
  
    cloud.lifetime = 1000;

    cloudsGroup.add(cloud);
  }
}

