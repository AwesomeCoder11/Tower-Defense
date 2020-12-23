
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonImage

function preload()
{
polygonImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground1 = new Ground(350,500,400,20);
    
    block1 = new Box(270,195,40,40);
    block2 = new Box(310,195,40,40);
    block3 = new Box(350,195,40,40);
    block4 = new Box(390,195,40,40);
    block5 = new Box(430,195,40,40);
    block6 = new Box(470,195,40,40);
    block7 = new Box(510,195,40,40);
    block8= new Box(310,150,40,40);
    block9 = new Box(350,150,40,40);
    block10= new Box(390,150,40,40);
    block11 = new Box(430,150,40,40);
    block12 = new Box(470,150,40,40);
    block13 = new Box(350,100,40,40);
    block14 = new Box(390,100,40,40);
    block15 = new Box(430,100,40,40);
    block16 = new Box(390,75,40,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot1 = new SlingShot(polygon,{x:400,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100000);
  
  imageMode(CENTER)
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
 
  ground1.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingShot1.display();

}

function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot1.fly();
}