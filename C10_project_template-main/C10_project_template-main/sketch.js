
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  createSprite(seaImg);
  seaImg.addImage(sea)
  createSprite(shipImg1);
  shipImg1.addImage(ship1)
}

function draw() {
  background("light blue");

}