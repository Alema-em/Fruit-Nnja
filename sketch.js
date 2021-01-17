var PLAY=1;
var END=0;
var gameState=PLAY;

var knife;
var fruit1,fruit2,fruit3,fruit4;
var alien1,alien2;
var score;
var gameover;
var cutSound,gameoverSound;




function preload(){
  knife1 =loadImage("sword.png");
  fruit1 =loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3= loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  alien1 =loadImage("alien1.png");
  alien2 = loadImage("alien2.png");
  gameover = loadImage("gameover.png");
  cutSound = loadSound("knifeSound.mp3")
  gameoverSound=loadSound("gameover.mp3");
}
function setup(){
  knife=createSprite(200,200,10,10)
  knife.addImage("sword.png",knife1);
  knife.scale=0.5;
  
  fruitsGroup = createGroup();
  enemyGroup = createGroup();
  
  score=0
  
  
  knife.setCollider("circle",0,0,20);
}

function draw(){
  background("black");
  text("Score: "+ score, 300,50);
  textSize(20);
  if(gameState === PLAY){
  
  if(knife.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach()
    score=score + 1;
    cutSound.play();
  }
    
   knife.x=World.mouseX;
  knife.y=World.mouseY;
    if(knife.isTouching(enemyGroup)){
      gameState = END;
      gameoverSound.play();
    }
  
  fruits();
  enemy();}
  else if(gameState === END){
    var gameover1 = createSprite(200,200,20,20);
    gameover1.addImage("gameover.png",gameover);
    knife.x=100;
    knife.y=100;
    fruitsGroup.setLifetimeEach(-1);  
     enemyGroup.setLifetimeEach(-1);
     fruitsGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
    
    
  }
  
  
   
  drawSprites();

}

function fruits(){
  
  if (frameCount % 60 === 0  ){
    
   var fruits = createSprite(400,Math.round(random(20,350)),10,40);
   fruits.velocityX = -8;
  
     position = Math.round(random(1,4))
    
   
    
    if(position===1){
      fruits.x=400;
      fruits.velocityX=-(8+(score/2));
      
      
    
    }
     else if(position===2){
       fruits.x=0;
       fruits.velocityX=(8+(score/2));
       
      
     }
    else if (position===3){
      fruits.y=400;
      fruits.velocityY=-(8+(score/2));
    }
   else if(position===4){
     fruits.y=0;
     fruits.velocityY=(8+(score/2));
   }
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruits.addImage(fruit1);
              break;
      case 2: fruits.addImage(fruit2);
              break;
      case 3: fruits.addImage(fruit3);
              break;
      case 4: fruits.addImage(fruit4);
              break;
      
      default: break;
    }
    fruits.lifetime= 50;
    fruits.scale=0.25;
    fruits.depth=knife.depth;
    knife.depth=knife.dept+1;
    fruitsGroup.add(fruits);
   
  }
}

function enemy(){
  if (frameCount% 120===0){
  var enemy = createSprite(400,Math.round(random(30,400)),10,10)
  enemy.velocityX=-9;
    
    position = Math.round(random(1,4))
    
   
    
    if(position===1){
      enemy.x=400;
      enemy.velocityX=-(9+(score/2));
      }
     else if(position===2){
       enemy.x=0;
       enemy.velocityX=(9+(score/2));
       
      
     }
    else if (position===3){
      enemy.y=400;
      enemy.velocityY=-(9+(score/2));
    }
   else if(position===4){
     enemy.y=0;
     enemy.velocityY=(9+(score/2));
   }
var rand =  Math.round(random(1,2))
switch(rand){
        case 1 :enemy.addImage(alien1);
                break;
        case 2 : enemy.addImage(alien2) ;
                break;
        default:break ;
        }
 enemy.lifetime=50;
 enemy.scale=0.5;
    enemy.depth=knife.depth;
    knife.depth=knife.dept+1;
    enemyGroup.add(enemy);
  }
}



