var tower , towerimage;
var ghost,ghostimage;
var doorimage,doorsgroup;
var climberimage, climbersgroup;
var invisibleblock,invisibleblockgroup;
var PLAY = 1
var END = 0
var gameState = PLAY;

function preload()
{
  towerimage = loadImage("tower.png");
  ghostimage = loadImage("ghost-standing.png");
  doorimage = loadImage("door.png");
  climberimage = loadImage("climber.png");
  
}
function setup()
{
  createCanvas(600,600);
  
  tower = createSprite(300,300,20,20);
  tower.addImage("tower",towerimage);
  tower.velocityY =2;
  
  ghost = createSprite(200,200,20,20);
  ghost.addImage("ghost",ghostimage);
  ghost.scale = 0.4;
  

  
  doorsgroup = new Group();
  climbergroup = new Group();
  invisibleblockgroup = new Group(); 

}
function draw()
{
  background(0);
 if(gameState === PLAY)
 {
   
   
   
   
   
   
   
 
  if(tower.y>400)
  {
    tower.y = 300;
    
  }
  
  if(keyDown("right"))
  {
    
    ghost.x = ghost.x + 2
    
    
  }
  
  if(keyDown("left"))
  {
    
    ghost.x = ghost.x - 2
    
    
  }
  
  if(keyDown("space"))
  
  {
    ghost.velocityY = -3;
    
  }
  
   
  ghost.velocityY = ghost.velocityY +0.1
  if(climbergroup.isTouching(ghost))
  {
    
    ghost.velocityY = 0;
    
  }
  
  if(invisibleblockgroup.isTouching(ghost)||ghost.y>600)
  {
    
    ghost.destroy();
    gameState = END;
  
  }
   
  spawn_doors()
   drawSprites();
 }
  if(gameState === END)
  {

  fill("yellow")
  textSize(30);
  text("gameover",300,300);  
  
  }
  
  
}

function spawn_doors()
{
  if(frameCount% 200 === 0){
  var door = createSprite(200,200,20,20);
    var climber = createSprite(200,250,20,20);
    door.x = Math.round(random(50,550))
    climber.x = door.x
    climber.addImage("climber",climberimage);
    climber.velocityY = 2;
    door.addImage("door",doorimage);
    door.velocityY = 2;
    door.lifetime = 250;
    climber.lifetime = 250;
    door.depth = ghost.depth
    ghost.depth= ghost.depth +1
    doorsgroup.add(door);
    climbergroup.add(climber);
    var invisibleblock = createSprite(200,260);
    invisibleblock.width = climber.width
    invisibleblock.height = 2;
    invisibleblock.x = door.x 
    invisibleblock.velocityY = 2;
    invisibleblock.debug = true;
    invisibleblockgroup.add(invisibleblock);
    
}
}


