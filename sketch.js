const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;
var score = 0;

function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


  block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);



  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);

  score = 0;

  bolck10 = new Box(600,170,30,40);
  block11 = new Box(570,180,30,40);
  block12 = new Box(630,180,30,40);


  block13 = new Box(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Box(900,170,30,40);
  block15 = new Box(930,170,30,40);
  block16 = new Box(870,170,30,40);
  block17 = new Box(840,170,30,40);
  block18 = new Box(960,170,30,40);

  block19 = new Box(900,140,30,40);
  block20 = new Box(930,140,30,40);
  block21 = new Box(870,140,30,40);

  block22 = new Box(900,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(150,200,20);
  World.add(world,ball);

  sling = new slingShot(this.ball,{x:150, y:200});

}

function draw() {
  background("grey");
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
 
  
  console.log(score);

  fill("purple");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(15);
 
  
  text("SCORE : "+score,300,500);

  text("Press Space to get a second Chance to Play!!",650 ,350);
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();

  
  block6.score();
  block7.score();
  block8.score();
  block9.score();

  
  bolck10.score();
  block11.score();
  block12.score();
  

  block13.score();

  
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  

  block19.score();
  block20.score();
  block21.score();
  
  block22.score();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();
  fill("lime");

  block22.display();

 
  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);
  
  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{	
		sling.attach(this.ball);
	}
}