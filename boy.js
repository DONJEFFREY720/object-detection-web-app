function setup(){
     canvas = createCanvas(640,420)
     canvas.center()
     OD = ml5.objectDetector('cocossd',modelLoaded)
     document.getElementById("status").innerHTML = "Status : DETECTING OBJECT"
}

img =""
model_status = ""


function preload(){
     img = loadImage("boy.png")
}

function draw(){
     image(img,0,0,width,height)
     fill("#FF0000");
     text("BOY",250,65)
     noFill()
     stroke("#FF0000");
     rect(245,40,135,330)
}

function modelLoaded(){
     console.log("model is ready")
     model_status = true
     OD.detect(img,gotResults)
}

function gotResults(error,results){
     if(error){
          console.error(error)
     }

     else{
          console.log(results)
     }
}