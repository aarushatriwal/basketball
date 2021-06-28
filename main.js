
/*created by prashant shukla */
var img ="";
var paddle2 =10,paddle1=10;

var paddle1X = 335,paddle1Height = 110;
var paddle2Y = 1165,paddle2Height = 110;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;
var audio1;
var pcscore =0;
var Gamestatus = "";

//ball x and y and speedx speed y and radius
var ball = {
    x:1500/2,
    y:800/2,
    r:100,
    dx:3,
    dy:3
}

function startGame(){
  Gamestatus = "start";
  document.getElementById("status").innerHTML = "Game is Loaded";
}

function preload(){
  img = loadImage("basketball image.jpg");
}

function setup(){
  var canvas =  createCanvas(1500,800);
  canvas.parent('canvas');
}


function draw(){
if (Gamestatus == "start") {  
 background("#997950"); 

   //funtion paddleInCanvas call 
   paddleInCanvas();
 
   //left paddle
   fill(7,78,67);
    stroke(7,78,67);
    strokeWeight(0.5);
   paddle1Y = mouseY; 
   rect(paddle1X,paddle1Y,paddle1,paddle1Height,100,50);
   
   
    //pc computer paddle
    fill(255,56,6);
    stroke(255,56,6);
   var paddle2y =ball.y-paddle2Height/2;  rect(paddle2Y,paddle2y,paddle2,paddle2Height,100,50);
    
    //function midline call
    midline();
    
    //function centercircle call
    centercircle();

   //function leftcircle call
    leftcircle();

   //function rightcircle call
   rightcircle();

   //function leftupline call
   leftup();

   //function leftdownline call
   leftdown();


   //function rightupline call
   rightup();

   //function rightdownline call
   rightdown();

   //function leftline call
   leftline();

   //function rightline call
   rightline();

   //function leftcircle call
   leftarc();

   //function rightcircle call
   rightarc();

   //funtion leftbasket call
   leftbasket();

   //function rightbasket call
   rightbasket();

    //funtion drawScore call 
   drawScore();
   
   //function models call  
   models();
   
   //function move call which in very important
    move();

}
}



//function reset when ball does notcame in the contact of padde
function reset(){
   ball.x = width/2+100,
   ball.y = height/2+100;
   ball.dx=3;
   ball.dy =3;
   
}


//function midline draw a line in center
function midline(){  
    fill("white");
    stroke(0);
    rect(750,0,5,800);
 
}

function centercircle(){
  noFill();
    stroke("white");
    strokeWeight(5);
    circle(750, 400, 200);
}


function leftcircle(){
  noFill();
    stroke("white");
    strokeWeight(5);
    circle(350, 400, 200);
}


function rightcircle(){
  noFill();
    stroke("white");
    strokeWeight(5);
    circle(1150, 400, 200);
}


function leftup(){
  fill("white");
   noStroke();
  rect(0,497,350,5);
}


function leftdown(){
  fill("white");
   noStroke();
  rect(0,297,350,5);
}



function rightup(){
  fill("white");
   noStroke();
  rect(1150,497,350,5);
}

function rightdown(){
  fill("white");
   noStroke();
  rect(1150,297,350,5);
}



function leftline(){
  fill("white");
   noStroke();
  rect(350,300,5,200);
}


function rightline(){
  fill("white");
   noStroke();
  rect(1150,300,5,200);
}


function leftarc(){
  noFill();
    stroke("white");
    strokeWeight(5);
 circle(200,400,600);
}

function rightarc(){
  noFill();
    stroke("white");
    strokeWeight(5);
 circle(1300,400,600);
}

function leftbasket(){
  noFill()
  stroke("white");
  strokeWeight(5);
  circle(100,400,50);

  fill("white");
  noStroke();
  rect(40, 400, 35, 5);

  fill("white");
  noStroke();
  rect(40, 300, 5, 200);
}



function rightbasket(){
  noFill()
  stroke("white");
  strokeWeight(5);
  circle(1400,400,50);

  fill("white");
  noStroke();
  rect(1425, 400, 35, 5);

  fill("white");
  noStroke();
  rect(1460, 300, 5, 200);
}



function restart(){
  pcscore = 0;
  playerscore = 0;
  loop();
}


//function drawScore show scores
function drawScore(){
    textAlign(CENTER);
    textSize(20);
    fill("white");
    stroke(250,0,0)
    text("Player:",100,50)
    text(playerscore,140,50);
    text("Computer:",1350,50)
    text(pcscore,1405,50)
}


//very important function of this game
function move(){
   fill("orange");
   stroke("orange");
   strokeWeight(0.5);
   ellipse(ball.x,ball.y,ball.r,100);

   fill("black");
   noStroke();
   rect(ball.x,ball.y-50,5,ball.r);

   fill("black");
   noStroke();
   rect(ball.x-50,ball.y,ball.r,5);

   ball.x = ball.x + ball.dx;
   ball.y = ball.y + ball.dy;
   if(ball.x+ball.r>1170){
       ball.dx=-ball.dx-2;       
   }
  if (ball.x-8*ball.r/2< 0){
  if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
    ball.dx = -ball.dx+2; 
  }
  else{
    pcscore++;
    reset();
    navigator.vibrate(100);
  }
}
if(pcscore == 5){
    fill("#FFA500");
    stroke(0)
    rect(0,0,width,height-1);
    fill("white");
    stroke("white");
    textSize(25)
    text("Game Over!☹☹",width/2,height/2);
    text("press restart button to play again",width/2,height/2+30)
    noLoop();
    pcscore = 0;
}
   if(ball.y+ball.r > height || ball.y-ball.r <0){
       ball.dy =- ball.dy;
   }   
}

//width height of canvas speed of ball 
function models(){
    textSize(18);
    fill(255);
    noStroke();
    text("Width:"+width,135,15);
    text("Speed:"+abs(ball.dx),50,15);
    text("Height:"+height,235,15)
}


//this function help to not go te paddle out of canvas
function paddleInCanvas(){
  if(mouseY+paddle1Height > height){
    mouseY=height-paddle1Height;
  }
  if(mouseY < 0){
    mouseY =0;
  }  
}
