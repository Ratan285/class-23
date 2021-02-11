/*
CLASS 23: 
CREATEING BLUEPRINTS(CLASS)

CLASS: OOP
5 BOXES : 

 
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld
var ground
var ball;
var box1;
var ground;
function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;

  box1 = new Box(200,100,50,50);
  box2 = new Box(205,50,50,100);
  ground= new Ground(200,390,400,10);
 console.log(box1);
}

function draw() {
  background("lightblue");

  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();
   drawSprites();
}