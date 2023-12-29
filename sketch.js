var player
var splashImage

function preload(){
splashImage = loadImage("game-boilerplate-latest-main/assets/Endless bars.gif");


}



function setup(){
createCanvas(windowWidth,windowHeight)

player=createSprite(50,height-50)



// playButton=createImg("")
// playButton.position(x,y)
// playButton.size(width,height)


}
 





function draw(){
background(splashImage)

drawSprites()
}