console.log('Hello Javascipt!');

//start State
let rectY = 0;
let ySpeed = 0.5;

function setup(){
    createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }



function draw() {
    background(209);
    stroke(0);
    fill('#39FF14');
    rect(50, rectY, 150, 150);

//changing the state continiously
rectY = rectY + ySpeed;

if(rectY > height){
    ySpeed= ySpeed * -1;

   }

if (rextY = 0){
    rectY = rectY + ySpeed;
}

}
  

