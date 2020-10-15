var f1, f2, f3, f4, fi1, fi2, fi3, fi4, fruitsGroup;

var m1, m2, m3, m4, mi1, mi2, mi3, mi4, monstGroup;

var sword, sword_sound;

var gameOver, gameOver_sound;

var score=0

var PLAY=1;
var END=2;
var gamestate=1;

var f1r, f2r, f3r, f4r;
var m1r, m2r;

function preload(){
  fi1 = loadImage("fruit1.png");
  fi2 = loadImage("fruit2.png");
  fi3 = loadImage("fruit3.png");
  fi4 = loadImage("fruit4.png");
  
  mi1 = loadImage("alien1.png");
  mi2 = loadImage("alien1.png");
  
  swordI = loadImage("sword.png");
  sword_sound = loadSound("knifeSwooshSound.mp3");
  
  gameOverI = loadImage("gameover.png");
  gameOver_sound = loadSound("gameover.mp3");
  
  
}
function setup(){
  createCanvas(600,500);
  
  sword = createSprite(300, 300, 20, 20);
  sword.addImage("s", swordI);
  sword.scale=0.7;
  
  gameOver = createSprite(300,240,20,20);
  gameOver.addImage("g", gameOverI);
  gameOver.scale=1.5;
  gameOver.visible=false;
  
  fruitsGroup = createGroup();
  monstGroup = createGroup();
}
function draw(){
  
  background("white");
  
  fill("black");
  textSize(25);
  text("SCORE : "+score, 440, 100);
  
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  
  if(sword.isTouching(fruitsGroup)){
    score = score+10;
    fruitsGroup.destroyEach();
    sword_sound.play();
  }
  if(sword.isTouching(monstGroup)){
    monstGroup.destroyEach();
    gamestate = END;
    gameOver_sound.play();
    m1.setVelocity=(0, 0);
    //fruitsGroup.visible = false
    gameOver.visible = true;
  }
  if(gamestate===END){
    sword.x=1000;
    fill("black");
    textSize(30);
    text("PRESS R",250,200);
    m1.setVelocity=(0,0);
    score = 0;
    //f1.setVelocity=(0,0);
  }
  if(keyDown("r")&&gamestate===END){
    sword.x=300;
    gamestate=PLAY;
  }
  if(gamestate===PLAY){
    gameOver.visible=false;
  }
  fruit1();
  monsters();
  
  console.log(frameCount);
  
  drawSprites();
  
  
}

function fruit1(){
  if(frameCount%80===0){
    var rand2 = Math.round(random(1, 1));
    if(rand2===1){
      f1=createSprite(500, 400, 20, 50);
      f1.lifetime = 150;
      f1.y=Math.round(random(100, 400))
      f1.velocityY=-2;
      f1.velocityX=-4;
      f1.velocityY = f1.velocityY + 2;
      f1.scale=0.25;
      f1.velocityX=(7+(score/80))
    var rand = Math.round(random(1, 4));
    if(rand===1)f1.addImage("i1", fi1);
    if(rand===2)f1.addImage("i2", fi2);
    if(rand===3)f1.addImage("i3", fi3);
    if(rand===4)f1.addImage("14", fi4);
      
      var position = Math.round(random(1, 2));
  if(position===1){
    f1.x=600;
    f1.velocityX=-4
  }else{
    f1.x=0;
    f1.velocityX=4
  }
      
      fruitsGroup.add(f1);
    }
  }
}
function monsters(){
  if(frameCount%150===0){
    m1=createSprite(-5, 400, 20, 50);
    m1.lifetime = 400;
    m1.y=Math.round(random(100, 300))
    m1.velocityY = -2;
    m1.velocityX = 7;
    m1.velocityY = m1.velocityY + 3;
    m1.velocityX = (7+(score/200));
    var rand = Math.round(random(1, 2));
      if(rand===1)m1.addImage("j1", mi1);
      if(rand===2)m1.addImage("j2", mi2);
    monstGroup.add(m1);
    
  }
}






