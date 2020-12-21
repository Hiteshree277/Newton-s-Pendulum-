
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var log1,log2,log3;
var roof;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,650,800,15);
	bob1=new Bob(200,200,40);
	bob2=new Bob(250,200)
	bob3=new Bob(300,200);
	bob4=new Bob(350,200);
	bob5=new Bob(400,200);
	


	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  Engine.update(engine);

  roof.display;
  bob1.display;
  bob2.display;
  bob3.display;
  bob4.display;
  bob5.display;
  
  drawSprites();
 
}



