//height, altura, width, largura
// array: lista ou variedade
// O for (traduzido para o português como "enquanto") é uma estrutura de repetição.
let cor;

let circuloY;// eixo vertical
let circuloX; // eixo Horizontal

function setup() {
  createCanvas(400, 400);
  background("blueviolet");
  cor = color(random(0, 255), random(0, 255), random(0, 255));

  circuloY=[random(height),random(height),random(height)];
  circuloX=[0,0,0];
}

function draw() {
  fill(cor);
  for(let contador in circuloX){
    circle(circuloX[contador], circuloY[contador], random(0, 70));
    circuloX[contador] += random(0, 3);
  circuloY[contador] += random(-3, 3);
    
    if (circuloX[contador]>=width){
      circuloX[contador]=0;
      circuloY[contador]=random(height);
      
    }
  }

  if (mouseIsPressed) {
    cor = color(random(0, 40), random(0, 155), random(0, 255), random(0, 255));
  }
}
