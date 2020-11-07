var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;

function preload(){
  monkey_running   =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")                 
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 }

function setup() {
createCanvas(400,400); 
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  FoodGroup=new Group();
  obstacleGroup=new Group(); 
}


function draw() {
background("white"); 
  ground.x = ground.width/2;
  
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -18;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("black");
  textSize(0);
  fill("black");
  survivalTime =       survivalTime+Math.round(getFrameRate()/60)
  text("Survival Time: " + survivalTime,100,50);
  
  drawSprites();
  spawnFood();
  spawnObstacles();
  }

function spawnFood() {
   if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
 if (frameCount % 300 === 0) {
    obstacle = createSprite(600,330,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
   }
  }






