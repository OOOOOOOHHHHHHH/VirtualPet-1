//Create variables here
var dog,dog1;
var happyDog, happyDog1;
var database;
var foodS;
var foodStock;

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
 

	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog1 = createSprite(250,250,10,10);
  dog1.addImage(dog);
  dog1.scale = 0.6;
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);

}

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog1.addImage(happyDog);
}
  drawSprites();
  text('Press the Up Arrow to feed Doge',300,40);

  //add styles here

}

function readStock(data) {
foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
