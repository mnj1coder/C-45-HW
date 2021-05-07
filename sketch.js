
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var imgHuman;
var ImgPlayer,ImgMask,ImgSanitiser,ImgGlove,ImgCOVID;
var SafeGroup

function preload()
{
ImgPlayer = loadImage("images HW/Girl22.png");
ImgSanitiser = loadImage("images HW/sanitiser.png");
ImgGlove = loadImage("images HW/Gloves22.png");
ImgMask = loadImage("images HW/mask22.png");
ImgCOVID = loadImage("images HW/COVID22.png");
ImgHuman = loadImage("images HW/OtherHuman22.png");
}

function setup() {
	createCanvas(800, 700);

	 player = createSprite(100,100,20,20);
	 player.addImage(ImgPlayer);
   player.scale = 0.3;
    SafeGroup = new Group();
}


function draw() {
  rectMode(CENTER);
  background(0);
  player.x = mouseX;
  player.y = mouseY;

 SafeItems();

  drawSprites();
 
}

function SafeItems(){
  if (frameCount% 50 === 0){
 var safeItem = createSprite(random(10,790),0,10,10);
 var RandomObject = Math.round(random(1,3));
switch(RandomObject){
  case 1: safeItem.addImage(ImgGlove);
  break;
  case 2: safeItem.addImage(ImgMask);
  break;
  case 3: safeItem.addImage(ImgSanitiser);
  break;
}

safeItem.scale = 0.2;
safeItem.velocityY= 4;
  SafeGroup.add(safeItem);
  
  }
  
  
 



  
}



