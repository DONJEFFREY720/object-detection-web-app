function setup(){
     canvas = createCanvas(380,380)
     canvas.center()
     video = createCapture(VIDEO) ;
     video.hide()
     ObjD = ml5.objectDetector('cocossd',modelLoaded)
     document.getElementById("status").innerHTML = "Status : DETECTING PRESENCE"
}

function preload(){
     alarm = loadSound("alarm.mp3")
}



img =""
model_status = ""
objects = []



function modelLoaded(){
     console.log("model is ready")
     model_status = true
    
}

function gotResults(error,results){
     if(error){
          console.log(error)
     }
          console.log(results)
          objects = results
     }


function draw(){
    image(video,0,0,380,380)
     if(model_status != ""){

          r = random(255)
          g = random(255)
          b = random(255)

          ObjD.detect(video,gotResults)


          for(i=0; i<objects.length; i++){
               if(objects[i].label == "person"){
               document.getElementById("status").innerHTML = "Status : PERSON DETECTED"
               document.getElementById("presence").innerHTML = "BABY DETECTED"
               fill(r,g,b)
              percentage =  floor(objects[i].confidence*100)
               text(objects[i].label +" "+percentage+"%",objects[i].x,objects[i].y)
               noFill()
               stroke(r,g,b)
               rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
               }
               else{
                    document.getElementById("presence").innerHTML = "BABY NOT DETECTED"
                    alarm.play()
               }
          }

     }
}