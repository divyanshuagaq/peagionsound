var bg, bgImg;
var bottomGround;
var topGround,obstacles,firegroup,coingroup,coin;
var balloon, balloonImg,peagion,peagionimage,peagiongroup,fireimage,coinimage,peagions;
var gameState = play;
var gameState = end ;
var play = 1 ;
var end = 0;
var score = 0;
function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

peagionimage = loadAnimation("assets/image2 (1).png","assets/image2 (2).png","assets/image3.png","assets/image4.png","assets/image5.png");
fireimage = loadAnimation("assets/fire1.png","assets/fire3.png","assets/fire4.png","assets/fire5.png","assets/fire6.png","assets/fire7.png")
coinimage = loadImage("assets/coin.png");
peagions = loadSound("assets/ps.mp3");
}

function setup(){
   
createCanvas(windowWidth,windowHeight)


bg = createSprite(250,250,width+200,height);
bg.addImage(bgImg);
bg.scale = 2.4

//creating top and bottom grounds
bottomGround = createSprite(400,700,width+800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.6;

peagiongroup = new Group ();
firegroup = new Group ();
coingroup = new Group();
}

function draw() {
  
  background("black");
  textSize(45)
text("Score: "+ score, 200,50);
text.depth = bg.depth;
text.depth = text.depth+1;
 
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.x = balloon.x-6
            
          }
          if(keyDown("RIGHT_ARROW")) {
            balloon.x = balloon.x+6
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
          balloon.collide(bottomGround);
          if(balloon.isTouching(coingroup)){
            score=score+1;
            coingroup.destroyEach();
          }
          if(balloon.isTouching(firegroup)){
            score=score-1;
            firegroup.destroyEach();
          }
          spawnpeagion();
          spawnobstacles();
          spawncoin()
        
        //else if(gameState === end){
         // firegroup.destroyEach();
         // peagiongroup.destroyEach();
         // fire.velocityX = 0;
        //  balloon.velocityY = 0;
         // peagion.velocityX = 0;
       // }
       
        drawSprites();
        
}
function spawnpeagion(){
if(frameCount%200 === 0){
  peagion = createSprite(10,Math.round(random(10,300)),50,50);
  peagion.addAnimation("peagion",peagionimage);
  peagions.play();
peagion.velocityX = 4;
peagion.scale = 0.5;
peagion.lifetime = 330;
peagiongroup.add(peagion);
}
}    
function spawnobstacles(){
  if(frameCount%180 === 0){
    obstacles = createSprite(10,Math.round(random(250,700)),50,50);
    obstacles.addAnimation("obstacles",fireimage);
obstacles.velocityX = 4;
obstacles.scale = 0.6;
obstacles.lifetime = 330;
firegroup.add(obstacles);
  }
}
function spawncoin(){
  if(frameCount%200 === 0){
    coin = createSprite(10,Math.round(random(150,400)),50,50);
    coin.addImage("coin",coinimage);
    coin.velocityX = 4;
    coin.scale = 0.5;
    coin.lifetime = 330;
    coingroup.add(coin);
  }
}