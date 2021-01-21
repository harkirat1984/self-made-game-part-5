var back
var jadu
var player,ncp
var tigersharkimg
var makosharkimg
var scaredjadu
var coinimg
var coinGroup
var animalGroup
var score= 0
var PLAY=1
var END = 0
var gameState= PLAY

function preload(){
back=loadImage("images/backgorund3.jpg");
jadu=loadImage("images/aleain.png");
scaredjadu=loadImage("images/scaredalean.png")
coinimg=loadImage("images/coin.png")

}
function setup() {
createCanvas(windowWidth-10,windowHeight-10);
coinGroup=new Group()
animalGroup=new Group()
player=new Player()
npc=new Npc()
}
function draw() {


if(gameState===PLAY){
    background(back); 
player.display();
npc.displays();
npc.spawnanimals();
npc.spawcoins();
    if(player.aliean.isTouching(coinGroup)){
    score=score+10
    }
    if (player.aliean.isTouching(animalGroup)){
        this.addImage=(scaredjadu);
    gameState=END}

} if(gameState===END){
 background(0);
 text("game over",200,200)
 console.log("hi")
}

textSize(25)
fill ("red")
text ("score :" +score, 200,100);

}