
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var paper,ground,box1


function setup() {
	createCanvas(1558, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,600,1630,20)

	paper = new Paper(200,190);

	box1 = new Box(8000,10000,600,20);
	box2 = new Box1(1280,460,20,200);
	box3 = new Box1(1120,460,20,200);

	Engine.run(engine);
  
}


function draw() {
  
  background("white");

  
  paper.display()

  ground.display()

  box1.display()

  box2.display()

  box3.display()


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-300});
	}
}



