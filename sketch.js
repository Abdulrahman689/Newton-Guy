
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var rope1, rope2, rope3, rope4, rope5
var roof, bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

roof = new Roof(400,300,300,35)
bob1 = new Bob(300,450,50)
bob2 = new Bob(350,450,50)
bob3 = new Bob(400,450,50)
bob4 = new Bob(450,450,50);
bob5 = new Bob(500,450,50)
rope1 = new Rope(bob1.body, { x: 300, y: 300 })
rope2 = new Rope(bob2.body, { x: 350, y: 300 });
rope3 = new Rope(bob3.body, {x:400,y:300});
rope4 = new Rope(bob4.body,{x:450,y:300})
rope5 = new Rope(bob5.body,{x:500,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

/*function KeyPressed(){
  if(KeyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-22,y:-20})
  }
}*/

function mouseDragged() {
  Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}

