function preload() {}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("poseNet is Intialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
}

function takeSnapshot() {
  save("myFilterImage.png");
}
