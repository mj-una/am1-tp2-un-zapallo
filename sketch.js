// mj-una

// el final de una etapa
// el inicio de otra

// 2.5.O.2.5

let cl = -1;
let cielo;
let marco;
let zapallo;
let z =  0;

let expl = [];

function setup() {

  let canvas = createCanvas(540, 960);
  canvas.style('user-select', 'none');
  canvas.style('touch-action', 'manipulation');
  
  windowResized();
  
  background(220);
  
  cielo = loadImage("img/cielo.png");
  edif = loadImage("img/edif.png");
  marco = loadImage("img/marco.png");
  zapallo = loadImage("img/zapallo.png");
  
  for (let i = 0; i < 13; i++) {
    
    if (i == 12) expl[i] = zapallo;
    else if (i <= 9) expl[i] = loadImage("img/0" + i + ".png");
    else expl[i] = loadImage("img/" + i + ".png");
  }
}

function draw() {

  image(cielo, 0, 0, width, height);
  push();
  translate(width/2, height/2);
  scale(1 + z*0.1);
  if (cl >= 0) image(expl[cl ], -width/2, -height/2, width, height);
  pop();
  image(edif, 0, 0, width, height);
  image(marco, 0, 0, width, height);

  colorFondo();
}

function mouseReleased() {
  if ( cl < 12) cl++;
  else if ( cl >= 12) z++;
}

function colorFondo() {

  let r = (sin(frameCount * 0.003) + 1) * 127;
  let g = (sin(frameCount * 0.005) + 1) * 127;
  let b = (sin(frameCount * 0.007) + 1) * 127;

  let pag = document.getElementsByTagName("body")[0];
  pag.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function windowResized() {
  
  let pag = document.getElementsByTagName("body")[0];
  let cnv = document.getElementById("defaultCanvas0");
  
  let mrg = 5;
  
  pag.style.overflow = "hidden";
  pag.style.display = "flex";
  pag.style.justifyContent = "center";
  pag.style.paddingTop = mrg * 0.5 + "vh";
  pag.style.height = "100vh";
 
  if (windowWidth * height > windowHeight * width) {
    cnv.style.height = (100 - mrg * 2) + "vh";
    cnv.style.width = ((100 - mrg * 2) / height) * width + "vh";
  }
  else {
    cnv.style.width = (100 - mrg * 2) + "vw";
    cnv.style.height = ((100 - mrg * 2) / width) * height + "vw";
  }
}
