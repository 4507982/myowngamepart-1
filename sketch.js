var hero;
 var redGroup,blueGroup,greenGroup,pinkGroup;
 var lazarGroup,lazor;
 var score=0;
function setup(){
hero=createSprite(30,300,50,50);

redGroup = new Group;
  blueGroup = new Group;
  greenGroup = new Group;
  pinkGroup = new Group;
  lazarGroup = new Group;
  
}
function draw(){
background("blue");

hero.x = World.mouseX
if (keyDown("space")) {
  createLazar();
}
var select_mon = Math.round(random(1,4));
  
if (World.frameCount % 100 == 0) {
  if (select_mon == 1) {
    redmonster();
  } else if (select_mon == 2) {
    greenmonster();
  } else if (select_mon == 3) {
    bluemonster();
  } else {
    pinkmonster();
  }
}
if(lazarGroup.isTouching(redGroup)){
  redGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+1 
}
 if(lazarGroup.isTouching(greenGroup)){
 greenGroup.destroyEach();
 lazarGroup.destroyEach();
  score= score+2 
}
 if(lazarGroup.isTouching(blueGroup)){
  blueGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+3 
}
 if(lazarGroup.isTouching(pinkGroup)){
  pinkGroup.destroyEach();
  lazarGroup.destroyEach();
  score= score+4 
}





drawSprites();
function createLazar() {
  var lazar= createSprite(100, 100, 5, 15);
 // arrow.addImage(arrowImage);
 lazar.x = hero.x;
 lazar.y=hero.y;
 lazar.velocityY = -4;
 lazar.lifetime = 100;
  //arrow.scale = 0.3;
   lazarGroup.add(lazar);
}

}
function redmonster() {
  var red = createSprite(Math.round(random(20, 370)),0, 10, 10);
 // red.addImage(red_balloonImage);
  red.velocityY = 3;
  red.lifetime = 150;
//  red.scale = 0.1;
  redGroup.add(red)
}


function greenmonster() {
  var green = createSprite(Math.round(random(20, 370)),0, 10, 10);
 // green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150;
//  green.scale = 0.1;
  greenGroup.add(green)
}



function bluemonster() {
  var blue = createSprite(Math.round(random(20, 370)),0, 10, 10);
 // blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 150;
//  blue.scale = 0.1;
  blueGroup.add(blue)
}



function pinkmonster() {
  var pink = createSprite(Math.round(random(20, 370)),0, 10, 10);
 // pink.addImage(pink_balloonImage);
  pink.velocityY = 3;
  pink.lifetime = 150;
//  pink.scale = 0.1;
  pinkGroup.add(pink)
}
