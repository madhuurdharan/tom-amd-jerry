var jerry,jerryImg1,jerryImg2;
var tom ,tomImg1,tomImg2;

function preload() {
    //load the images here
    bac=loadImage("images/garden.png");
    jerryImg1=loadAnimation("images/jerry.png");
    jerryImg2=loadAnimation("images/jerryImg1.png","images/jerryImg2.png");
    tomImg1=loadAnimation("images/tom.png");
    tomImg2=loadAnimation("images/tomImg2.png","images/tomImg2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg1);
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);

}

function draw() {

    background(bac);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom .width - jerry .width/2) )
    {
    tom.addAnimation("tomRunning",catImg2);
    tom.changeAnimation("tomRunning");
  
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    tom.veloctityX=5;
    jerry.addAnimation("mouseTeasing",jerryImg2);
   jerry.changeAnimation("mouseTeasing");
   jerry.frameDelay = 25;
  }

   if(keyCode === LEFT_ARROW){
    tom.veloctityX=-5;
     jerry.addAnimation("mouseTeasing",jerryImg2);
    jerry.changeAnimation("mouseTeasing");
    jerry.frameDelay = 25;
    
   }

}
