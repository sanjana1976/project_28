
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree1
var ground
var stone
var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var boy
var sling


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1= new Tree(480, 540);
	ground= new Ground(400,690);
	stone= new Stone(200,100);
  mango1= new Mango(480,480);
  mango2= new Mango(500,420);
  mango3= new Mango(400,480);
  mango4= new Mango(460,450);
  mango5= new Mango(530,460);
  mango6= new Mango(460,390);
  mango7= new Mango(510,500);
  mango8= new Mango(560,430);
  mango9= new Mango(600,500);
  mango10= new Mango(550,490);







	boy= new Boy(100,655)
sling= new Chain(stone.body,{x:65,y:630});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(245,245,220);
  tree1.display();
  ground.display();
  stone.display();
  mango1.display();
boy.display();
sling.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
collision(stone,mango1);
collision(stone,mango2);
collision(stone,mango3);
collision(stone,mango4);
collision(stone,mango5);
collision(stone,mango6);
collision(stone,mango7);
collision(stone,mango8);
collision(stone,mango9);
collision(stone,mango10);

//mouseDragged();
// mouseReleased();
//keyPressed();
  drawSprites();
 
}







function mouseDragged(){
Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
function keyPressed(){
    if(keyCode===32){
      Body.setPosition(stone.body,{x:200,y:100})
sling.attach(stone.body);


    }
}
function collision(objectA,objectB){
  objectApos= objectA.body.position
  objectBpos= objectB.body.position
  var distance= dist(objectApos.x,objectApos.y,objectBpos.x,objectBpos.y);
  if(distance<=objectA.height+objectB.height){
    Body.setStatic(objectB.body,false)
    //Body.setStatic(objectA.body,false)

  }

}