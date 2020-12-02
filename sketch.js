const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground, paperObject;
var Dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(400,670,width,20); 
	paperObject = new paper(180,655,70);
	Dustbin = new dustbin(500,500,60,60);
	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  Ground.display();
  Dustbin.display();
  paperObject.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 85, y: -85});
	}
}