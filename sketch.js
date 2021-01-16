//Name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2;

var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();

   world = engine.world;

   box1 = new Box(200,100,50,50);
   box2 = new Box(300,50,40,40);

ground=new Ground(0,380,800,10)

}

function draw() {
  background(0);  

  Engine.update(engine)

  box1.display();
  box2.display();

  ground.display();

  
}