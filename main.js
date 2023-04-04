noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video=createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(550, 550); 
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded() {
  console.log("modelo carregado")
}

function gotPoses(results) {
    if (results.length>0) {
    
    
      
      noseX=results[0].pose.nose.x
      noseY=results[0].pose.nose.y
      rightWristX=results[0].pose.rightWrist.x
      leftWristX=results[0].pose.leftWrist.x
      difference=floor(leftWristX-rightWristX)
    
}
}

function draw() {
  background("#d4f2c3")
  fill("blue")
  stroke("black")
  square(noseX,noseY,difference)
  

}








