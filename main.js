function preload(){
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(150, 150);
    camera = createCapture(VIDEO)
    camera.hide()

}

function draw(){
    image(camera, 0,0,400,);
    
    circle(400,5,50,50)
    stroke("black");
    fill("red");
    circle(5,5,50,50)
    stroke("black");
    fill("red");
    circle(400,400,50,50)
    stroke("black");
    fill("red");
    circle(5,400,50,50)
    stroke("black");
    fill("red");

}

function take_snapshot(){
    save("p5isgood.png") 
}