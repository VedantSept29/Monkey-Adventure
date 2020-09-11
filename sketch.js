var monkey,ObstaclesGroup,bananaGroup,monkeyAnimation,
bananaImage,ObstacleImage,background,backgroundImage
    .

function preload(){
  monkeyAnimation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_05.png","Monkey_06png","Monkey_07.png","Monkey_08.png"Monkey_09.png","Monkey_10.png");
                                  
  bananaImage = loadImage("monkey.png");
  backgroundImage = loadImage("background.png");
}
function setup() {
  createCanvas(400, 400);
  background = createSprite(200,380,800,200);
  background.addImage(backgroundImage);
  
  monkey = createSprite(50,350,20,50);
  monkey.addImage(monkeyImage);
  
  ObstaclesGroup = new group();
  bananaGroup = new group ();
  
}

function draw() {
  background(220);
  
   text("Survival Time: "+ SurvivalTime, 200, 100);
        monkey.collide(ground);

if(ground.x<0){
  ground.x = ground.width /2;
}
   if(keyDown("space") && monkey.y >= 330){
      monkey.velocityY = -12 ;
   }
   monkey.velocityY = monkey.velocityY + 0.5;
  if(ObstaclesGroup.isTouching(monkey){
     monkey.scale = 0.2;
     }
     
    spawnObstacles();
    spawnBananas();
    
    SurvivalTime = SurvivalTime + Math.round(World.frameRate/60);
  switch(SurvivalTime){
    case 10: monkey.scale = 0.12;
             break;
     case 20:Monkey.scale = 0.14;
             break;
    case 30:Monkey.scale = 0.16;
             break;
    case 40:Monkey.scale = 0.18;
            break;
            default:break;
            
             
  drawSprites();
}
  
  function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*SurvivalTime/100);
    obstacle.setAnimation("Stone");
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
   
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = random(120,200);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    monkey.lifetime = 134;
    
  
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}



  

  
  
  
  
  
  
  
  

