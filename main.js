function setup(){
    canvas = createCanvas(400, 650)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 500)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPose)
}
function gotPose(results){
    if (results.length > 0){
    console.log(results)
    }
}
function modelLoaded(){
    console.log("poseNet Ready!")
}

function take_snapshot(){
    save("Are You a clown?")
}
function preload(){

}
function draw(){
    image(video, 0, 0, 400, 400)
}
//cordinates of nose - x - 163.29890596471563, y - 297.6651658788759
