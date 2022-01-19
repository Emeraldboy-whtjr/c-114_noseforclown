var noseX; var noseY; var nose1


function preload() {
    nose1 = loadImage("nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    /**
     * classifier = ml5.imageClassifier("link",modelLoaded);
     * 
     * function modelLoaded(){
     *  console.log("hi");
     * }
     */

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);

}

function modelLoaded() {
    console.log("model has loaded");

}

function gotposes(results) {

    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("nose X is = " + noseX);
        console.log("nose Y is = " + noseY);



    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    noStroke()
    circle(noseX,noseY,25);
    image(nose1,noseX,noseY,30,30);
}

function takepicture() {
    save(download.png);
}