// creating some variables
var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  // creating car
  car = createSprite(50,200,50,50);

  // creating wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  wall.velocityX = speed;
  }

  function draw() {
    background(255,255,255);  

    car.collide(wall);

    // checking car's deformation
    
    if(wall.x - car.x < car.width/2 + wall.width/2){
      car.velocityX = 0;

      deformation = 0.5 * weight * speed * speed/22509;
      if(deformation > 180){
        car.shapeColor("red");
      }
      if(deformation < 180 && deformation > 100){
        car.shapeColor("blue");
      }
      if(deformation < 100){
        car.shapeColor("green");
      }
    }
    drawSprites();
  }
