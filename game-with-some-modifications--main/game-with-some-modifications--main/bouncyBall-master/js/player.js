class Player{

constructor(){

this.aliean=createSprite(200,200);

this.aliean.addImage(jadu);

this.aliean.scale=0.2;
    this.aliean.velocityX=2
}
display(){
      drawSprites();

  if(keyCode===UP_ARROW||touches.length>0){
  this.aliean.y-=5
  touches=[]
 }

    if(keyCode===DOWN_ARROW||touches.length>0){
    this.aliean.y+=5
    touches=[]
    }

    if(keyCode===RIGHT_ARROW ||touches.length>0){
        this.aliean.x+=5
        touches=[]
        }

        if(keyCode===LEFT_ARROW||touches.length>0){
            this.aliean.x-=5
            touches=[]
            }
};

}