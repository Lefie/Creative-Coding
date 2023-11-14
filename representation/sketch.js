let video

let poseNet

let rightEyeX = 0;
let rightEyeY = 0;
let leftEyeX = 0;
let leftEyeY = 0;
let leftWristX = 0;
let leftWristY = 0
let noseX = 0
let noseY = 0

//let flippedVideo

function setup(){
  createCanvas(1300,800)
  video = createCapture(VIDEO)
  video.hide()
  video.size(1300,800)
  console.log(ml5)
  //flippedVideo = ml5.flipImage(video);

  poseNet = ml5.poseNet(video,modelReady)
  poseNet.on('pose', gotPoses)
  //flippedVideo = ml5.flipImage(video)

}

function draw(){
  background(220)
  image(video,0,0)

  if(noseX < 200){
    textSize(100)
    text("🐣",leftEyeX-30,leftEyeY)
    text("🐣",rightEyeX-30,rightEyeY)
    text("🍙",noseX-20,noseY+30)

  }else if(noseX >= 200 && noseX <= 700){
    textSize(100)
    text("⭐",leftEyeX-30,leftEyeY)
    text("⭐",rightEyeX-30,rightEyeY)
    text("🥪",noseX-20,noseY+30)

  }else{
    textSize(100)
    text("🌳",leftEyeX-30,leftEyeY)
    text("🌳",rightEyeX-30,rightEyeY)
    text("🍬",noseX-20,noseY+30)

  }

  
}

function gotPoses(poses){
  console.log(poses)
  if(poses.length > 0){
    let newREx = poses[0].pose.rightEye.x
    let newREy = poses[0].pose.rightEye.y
    rightEyeX = lerp(rightEyeX,newREx,0.7)
    rightEyeY = lerp(rightEyeY,newREy,0.7)
    let newLEx = poses[0].pose.leftEye.x
    let newLEy = poses[0].pose.leftEye.y
    leftEyeX = lerp(leftEyeX,newLEx,0.7)
    leftEyeY = lerp(leftEyeY,newLEy,0.7)

    let newNoseX = poses[0].pose.nose.x
    let newNoseY = poses[0].pose.nose.y

    noseX = lerp(noseX,newNoseX,0.7)
    noseY = lerp(noseY,newNoseY,0.7)
  }
 
}

function modelReady(){
  console.log("ready!")
}