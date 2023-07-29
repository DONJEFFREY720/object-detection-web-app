function setup(){
     canvas = createCanvas(640,420)
     canvas.center()
     OD = ml5.objectDetector('cocossd',modelLoaded)
     document.getElementById("status").innerHTML = "Status : DETECTING OBJECT"
}

img =""
model_status = ""


function preload(){
     img = loadImage("laptop.png")
}

function draw(){
     image(img,0,0,width,height)
     fill("#FF0000");
     text("LAPTOP",100,35)
     noFill()
     stroke("#FF0000");
     rect(90,20,470,340)
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