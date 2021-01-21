class Npc{
constructor(){
this.tigersharkimg=loadImage("images/tigershark.png");
this.makosharkimg=loadImage("images/sahrk.gif");
this.blueimg=loadImage("images/bluewhale.png")
this.droneimg=loadImage("images/ghost.gif")

}
displays(){
drawSprites();
}
spawnanimals(){
if(frameCount%90===0){
 var animal=createSprite(50,random(50,800)) 
 console.log()
 animal.velocityX=4
 animal.scale=0.1
 var rand = Math.round(random(1,3));
    switch(rand) {
       case 1: animal.addImage(this.tigersharkimg);
               break;
       case 2: animal.addImage(this.makosharkimg);
               break;        
       
 
       case 3: animal.addImage(this.droneimg);
               break;       
       default: break;
    }
    animal.lifetime=windowWidth/4
    animalGroup.add(animal)
};   
};
spawcoins(){
        if(frameCount%100===0){
         var coin =createSprite(random(0,800),random(50,800)) 
         console.log()
         coin.velocityY=2
         coin.addImage(coinimg);
         coin.scale=0.05
         coin.lifetime=windowWidth/4
         coinGroup.add(coin)
        };   
        };








}