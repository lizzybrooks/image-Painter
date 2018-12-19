var slider;
var john;
var val;
var jj;
var input;
 var img;
let whichBrush = 0;
let cnv;
let newFile;

// let brushFunctions;



function setup() {
    input = createFileInput(handleFile); input.position(1100, 620); input.style('z-index','1');
    cnv = createCanvas(1350, 760);
    cnv.position(0,0);
    background(255,255,255,10)


    slider = createSlider(0, 255, 30);
      slider.position(7, 620);
      slider.style('width', '80px');
      colorMode(HSB);
  john = createSlider(0, 360, 60, 40);
  john.position(7, 670);
  john.style('width', '80px');
  keyPressed();

}

function draw() {

var x = document.getElementsByTagName("img").item(0);


 if (img) {
  x.setAttribute("src", newFile);

}

paint();


// border();
makeBigger();
changeColors();
bigTesting();

 //img.hide()
}



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
  img = createImg(file.data); img.hide();
  newFile = file.data;
  }
}

function paint(){
  var  brushFunctions = [makeCircle, makeSquare];

  var brushShape;

  if (mouseIsPressed){
    brushShape = brushFunctions[whichBrush];
    brushShape();
    }
  }

function makeBigger(){
  noFill();
  strokeWeight(10);
  rect(0,600,100,50);

}
function changeColors(){
  noFill();
  strokeWeight(10);
  rect(0,650,100,50);
}

function keyPressed(){
  if (keyCode === 83){
  saveCanvas("my art","png");
}
else if(keyCode === 81){
   whichBrush = 0;
 }
 else if(keyCode === 69){
   whichBrush = 1;
 }
 return false;
}


function makeCircle(){
  val = slider.value();
  jj = john.value();
  noStroke();
  fill(jj,100, 100, 1);
  ellipse(mouseX, mouseY, val, val);
}

function makeSquare(){
  val = slider.value();
  jj = john.value();
  noStroke();
  fill(jj,100, 100, 1);
  rect(mouseX, mouseY, val, val);
}

function bigTesting(){
  jj = john.value();
  fill(jj,100, 100, 1)
  rect(10,660,10,10);
}
