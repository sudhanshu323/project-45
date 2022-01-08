var bg,bgImg;
var car1Img,car2Img;
var game,form,player;
var ball;



function preload(){
bg = loadImage("assets/background.jpg");
car1Img = loadImage("assets/Car1.png");
car2Img = loadImage("assets/Car2.png");

}

function setup(){
createCanvas(windowWidth-15,windowHeight-20);
game=new Game();
game.start();
bgImg = bg;
}

function draw(){
background("bgImg");
}