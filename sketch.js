var bgImage;
var batImage;
var playerImg;
var enemyImg;
var playerRunning;
var playerJumpinng;
var playerSlide;
var enemyAttack;
var enemyWalk;
var girlHurt;
var level=0;

function preload(){
  bgImage=loadImage("my first game.jpg");
  bgImage1=loadImage("preview.jpg");
  batImage=loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png");
  playerImg=loadAnimation("Idle__002.png");
  playerRunning=loadAnimation("Run__000.png","Run__001.png","Run__002.png","Run__004.png");
  playerJumpinng=loadAnimation("jump__000.png","jump__005.png","jump__006.png","jump__007.png","jump__009.png",)
 // playerSlide=loadAnimation("slide__001.png","slide__009.png");
  enemyImg=loadAnimation("idle.png");
  enemyAttack=loadAnimation("attack.png","attack2.png","attack3.png","attack4.png","attack5.png");
  enemyWalk=loadAnimation("walk1.png","walk2.png","walk3.png");
  girlHurt=loadAnimation("hurt.png","hurt2.png","hurt5.png","hurt4.png");
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-50);
  bg=createSprite(displayWidth/2-50,displayHeight/2,displayWidth-100,displayHeight);
  bg.addImage("bg1",bgImage);
  bg.addImage("bg2",bgImage1);
  bg.scale=1.2;
 player=createSprite(50,displayHeight-250);
 player.addAnimation("idle",playerImg);
 player.addAnimation("running",playerRunning);
 player.addAnimation("jumping",playerJumpinng);
 //player.addAnimation("slide",playerSlide);
 player.scale=0.2;
 ground=createSprite(displayWidth/2-50,displayHeight-220,displayWidth-100,10);
}

function draw() {
  background("white"); 
  player.collide(ground);
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX=2;
    player.changeAnimation("running");
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
    player.changeAnimation("idle");
  }
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX=-2;
    player.changeAnimation("running");
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
    player.changeAnimation("idle");
  }
  if(keyWentDown("j")){
    player.velocityY=-10;
    player.changeAnimation("jumping");
  }
  player.velocityY+=.5;
  
  if(frameCount % 100===0 && level===0)
  {
    spawnEnemy()
  }
  if(player.x > displayWidth-200){
  bg.changeImage("bg2");
   level=1;
   player.x=50;
  }
   drawSprites();
}
function spawnEnemy(){
  var enemy =createSprite(displayWidth-300,displayHeight-300,20,50);
  enemy.addAnimation("batFly",batImage);
  enemy.velocityX=random(-2,-1);
  enemy.velocityY=random(-1,+1);
}