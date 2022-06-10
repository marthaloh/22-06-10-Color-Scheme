const bg = 25;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);
  background(0, 0, bg);
}

function draw() {
  translate (width/2, height/2);
  
  const x = 0;
  const y = 0;
  const xc = 200;
  const yc = 0;
  const w = 30;
  const h = 30;
  const blc = 2.2;
  const anac = 3;
  const comc = 5;
  const tric = 7;
  const tetc = 9;
  //randomSeed(2300);
  //randomSeed(2000);
  //randomSeed(1700);
  //randomSeed(1000);
  //randomSeed(600);
  //randomSeed(100);
  const hue = random(1, 360);
  const sat = 50;
  const bri = 65;
  //console.log(hue);
  //console.log(sat);
  //console.log(bri);
  let ana1;
  let ana2;
  let com1;
  let tri1;
  let tri2;
  let tet1;
  let tet2;
  let tet3;

  noStroke();
  rotate(hue);
  

// tetradic color scheme
  console.log("tetradic",hue, sat, bri);
  fill(hue, sat, bri);
  arc(x, y, tetc*w, tetc*h, 300, 60);
  arc(-yc, -xc, 50, 50, 0, 90);

  if(hue <= 270){
    tet1 = 90;
  } else {
    tet1 = 90-360;
  }
  console.log("tetradic",hue+tet1, sat, bri);
  fill(hue+tet1, sat, bri);
  arc(x, y, tetc*w, tetc*h, 60, 140);
  arc(-yc, -xc, 50, 50, 90, 180);

  if(hue <= 180){
    tet2 = 180;
  } else {
    tet2 = -90;
  }
    console.log("tetradic",hue+tet2, sat, bri);

  fill(hue+tet2, sat, bri);
  arc(x, y, tetc*w, tetc*h, 140, 220);
  arc(-yc, -xc, 50, 50, 180, 270);

  if(hue <= 90) {
    tet3 = 270;
  } else if(hue <= 180){
    tet3 = -90;
  } else if(hue <= 270){
    tet3 = -180;
  } else{
    tet3 = 90-270;
  }
  console.log("tetradic",hue+tet3, sat, bri,"\n");

  fill(hue+tet3, sat, bri);
  arc(x, y, tetc*w, tetc*h, 220, 300);
  arc(-yc, -xc, 50, 50, 270, 360);

  
  fill(0, 0, bg);
  ellipse(x, y, tric*w+(blc*w-w), tric*h+(blc*h-h));

  
  
// triadic color scheme
  console.log("triadic",hue, sat, bri);
  fill(hue, sat, bri);
  arc(x, y, tric*w, tric*h, 300, 60);
  arc(yc, xc, 50, 50, 0, 120);
  
  if(hue <= 240){
    tri1 = 120;
  } else{
    tri1 = -120;
  }
  
console.log("triadic",hue+tri1, sat, bri);
  fill(hue+tri1, sat, bri);
  arc(x, y, tric*w, tric*h, 60, 180);
  arc(yc, xc, 50, 50, 120, 240);

  if(hue <= 120){
    tri2 = 240;
  } else if(hue <=240){
    tri2 = -120;
  } else {
    tri2 = -240;
  }
  console.log("triadic",hue+tri2, sat, bri,"\n");
  fill(hue+tri2, sat, bri);
  arc(x, y, tric*w, tric*h, 180, 300);
  arc(yc, xc, 50, 50, 240, 360);

  
  fill(0, 0, bg);
  ellipse(x, y, comc*w+(blc*w-w), comc*h+(blc*h-h));


  
// complementary color scheme
  console.log("complementary",hue, sat, bri);
  fill(hue, sat, bri);
  arc(x, y, comc*w, comc*h, 300, 60);
  arc(-xc, -yc, 50, 50, 0, 180);
  
  if(hue <= 180) {
   com1 = 180;
  } else{
    com1 =-180;
  }
    console.log("complementary",hue + com1, sat, bri, "\n");

  fill(hue+com1, sat, bri);
  arc(x, y, comc*w, comc*h, 60, 300);
  arc(-xc, -yc, 50, 50, 180, 360);

  
  fill(0, 0, bg);
  ellipse(x, y, anac*w+(blc*w-w), anac*h+(blc*h-h));

  
  
// analogous color scheme
    console.log("analogous",hue, sat, bri);

  fill(hue, sat, bri);
  arc(x, y, anac*w, anac*h, 300, 60);
  arc(xc, yc, 50, 50, 0, 120);
  
  if(hue <= 325){
    ana1 = 35;
  } else{
    ana1 = 35-360;
  }
  console.log("analogous",hue+ana1, sat, bri);

  fill(hue+ana1, sat, bri);
  arc(x, y, anac*w, anac*h, 60, 180);
  arc(xc, yc, 50, 50, 120, 240);

  if(hue > 35){
    ana2 = -35;
  } else{
    ana2 = -35+360;
  }
  console.log("analogous",hue+ana2, sat, bri);

  fill(hue+ana2, sat, bri);
  arc(x, y, anac*w, anac*h, 180, 300);
  arc(xc, yc, 50, 50, 240, 360);


  fill(0, 0, bg);
  ellipse(x, y, blc*w, blc*h);

  
  rotate(270-60);
  rect(x-5, y, 10, tetc*h);
  rotate(120);
  rect(x-5, y, 10, tetc*h);

  
// original color
  fill(hue, sat, bri);
  ellipse(x, y, w, h);
    
  noLoop();
}