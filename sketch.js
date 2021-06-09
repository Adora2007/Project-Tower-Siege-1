const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;
var block;











function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  
  //create the base
  ground = new Ground(450,260,280,20);

  //create the blocks
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  block9 = new Block(390,155,30,40);

  //create the polygon and slingshot
  polygon = new Polygon(100,20);

  slingshot = new SlingShot(polygon.body,{x:100, y:20});
  
}

function draw() {
  background("blue");
  text(mouseX + ','+ mouseY,30,45);  
   
  Engine.update(engine);
  strokeWeight(4);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon.display();
  slingshot.display();    


}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
