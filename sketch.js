
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

paper = new Paper(100, 100, 20);
ground = new Ground(600, 650, 1200, 20);
dustbin = new Dustbin(900, 550, 180, 20);
dustbin1 = new Ground(800, 600, 20, 120);
dustbin2 = new Ground(1000, 600, 20, 120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  
if (keyDown("UP_ARROW")){
  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85})
}

  drawSprites();
 
}



