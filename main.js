var img, smallPoints, largePoints, maxPoints=53500, points=0, pointLerp
 
function preload(){
  img= loadImage('./img/blue-monster.png')
}

function setup() {
var dim = 600
if(img.height>img.width){
  img.resize(dim,0)
}else{
  img.resize(0,dim)
}
 createCanvas(img.width,img.height)
 imageMode(CENTER)
 img.resize(width,height)
 smallPoints=width/500
 largePoints=width/20
 frameRate(100)
}

function draw() {
 if(points<maxPoints){
   pointLerp=lerp(largePoints, smallPoints, points/maxPoints)
   for(var i = 0; i < 200; i++){
     var x = floor(random(img.width))
     var y = floor(random(img.height))
     var pix=img.get(x,y)
     var d=10
     var newCol=getRGBVariation(pix,random(-0.2,0.2)*d,random(-0.1,0.1)*d,random(-0.1,0.1)*d)
     newCol.setAlpha(random(0,255))
     push()
     translate(x,y)
     rotate(random(PI))
     //Lines
     stroke(newCol)
     strokeWeight(random()*3+2)
     line(0,0,pointLerp*0.7*1, pointLerp*0.7*1)
     /*
     //Ellipses
     fill(newCol)
     noStroke()
     ellipse(0,0,pointLerp*random(), pointLerp*random())
     */
     pop()
     points++
   }
 }
}

function getRGBVariation(col,randr,randb,randg){
 colorMode(RGB)
 var tempCol=color(red(col)+randr,green(col)+randg,blue(col)+randb)
 return tempCol
}