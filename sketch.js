var score = 0;
var canvas;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sky, skyImg; 
var eagle , eagleImg;
var line1 , line2;
var owl,owlImg,monster,monsterimg,alien,alienimg;
var monster_grp , owl_grp , alien_grp,gameOverImg;

function preload() {
 
  eagleImg = loadImage("flying-eagle.gif")
  skyImg = loadImage("Bg.png")
  owlImg = loadImage("owl.png")
  monsterimg = loadImage("images__3_-removebg-preview.png")
  alienimg = loadImage("images__4_-removebg-preview.png")
  gameOverImg = loadImage("game.jpg")
}


function setup() {
  createCanvas(windowWidth,windowHeight)
  
  sky = createSprite(width/2,height/2)
  sky.addAnimation("skyed",skyImg)
  sky.velocityX = -2
  sky.scale = 2


  eagle = createSprite(80,400)
  eagle.addAnimation("eagley",eagleImg)
  eagle.debug = false;
  eagle.setCollider("rectangle",0 ,0, 50 , 30 )


  line1 = createSprite(width/2,5,width,10)
  line2 = createSprite(width/2 ,1000 ,width , 10)

  line1.visible = false;
  line2.visible = false;

  monster_grp = new Group();
  owl_grp = new Group();
  alien_grp = new Group();

  

  

}

function draw() {
  background("white"); 

 


  if(sky.x <0){
  sky.x = width/2;
}

if(eagle.y > 18)
  {
    eagle.collide(line1)
    eagle.collide(line2)
  }
  

 if(gameState ===PLAY) {
  owlcr();
  owlcr2();

  fill("black");
  text("Score: "+ score, 180,200);

 

 if (keyDown(UP_ARROW)) {
     eagle.y -= 5
}
if (keyDown(DOWN_ARROW)) {
  eagle.y += 5
}


if(eagle.isTouching(monster_grp)){
  eagle.velocityY = 10;
  gameState = END;

}

if(eagle.isTouching(owl_grp)){
  eagle.velocityY = 10;
  gameState = END;



}






console.log(eagle.y)




 
}

if(gameState===END){

  sky.velocityX = 0;
  monster_grp.setVelocityXEach(0);
  owl_grp.setVelocityXEach(0);
  fill("black");
  textSize(20);
  text("GAME OVER",400,400);
  
 }
 drawSprites();
}

function owlcr()
{
   if(frameCount % 60 == 0)
   {
      owl = createSprite(width/2,random(200, height - 300))
      owl.addImage("bird",owlImg)
      owl.velocityX = -6
      owl.scale = 0.3
      owl_grp.add(owl);
      score = score+2
   }
}

function owlcr2()
{
   if(frameCount % 100 == 0)
   {
      monster = createSprite(width/2,random(200, height - 300))
      monster.addImage("birdsw",monsterimg)
      monster.velocityX = -6
      monster.scale = 0.8
      monster_grp.add(monster);
   }
}

