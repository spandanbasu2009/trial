
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,300,20);
	
	rope1 = new Rope(bobObject1,roof.body,-bobDiameter*2,0);

	bobObject1 = new Bob(300,500,50,50);
	bobObject2 = new Bob(350,500,50,50);
	bobObject3 = new Bob(400,500,50,50);
	bobObject4 = new Bob(450,500,50,50);
	bobObject5 = new Bob(500,500,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



