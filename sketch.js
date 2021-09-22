var backgroundImage,bg;
var doraRun1,doraRun;



function preload(){
bg=loadImage("background.png")
doraRun1 = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png")





}

function setup(){
createCanvas(1300,600)
backgroundImage = createSprite(650,350,10,10);
backgroundImage.addImage(bg)
backgroundImage.scale = 3.5

doraRun = createSprite(70,500,10,10)
doraRun.addAnimation("doraRunning",doraRun1)





}

function draw(){
background(0)










drawSprites()
}


























