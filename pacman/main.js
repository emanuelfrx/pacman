let posX = 0,
  posY = 0,
  raio = 0;
let img;
const BOCA_FECHADA = 0;
const BOCA_ABERTA = 1;
let contador = 0;
let posicao = 1;
let matriz = [];
let cenario = [];
let l = 40;
let a = l;
let c = 0;
let pontos;
let posx_f_v = 0;
let posy_f_v = 0;
let posx_f_a = 0;
let posy_f_a = 0;
let posx_f_am = 0;
let posy_f_am = 0;
let cereja_posx = 0;
let cereja_posy = 0;
let easing = 0;
let totalVidas = 0;
let perdeuVida = false;
let conta = 0;
let perdeu, ganhou, jogando;
let cima, baixo, esquerda, direita;
function preload() {
  boca_abertaD = loadImage("./imagens/boca_abertaD.png");
  boca_fechadaD = loadImage("./imagens/boca_fechadaD.png");
  boca_abertaC = loadImage("./imagens/boca_abertaC.png");
  boca_fechadaC = loadImage("./imagens/boca_fechadaC.png");
  boca_abertaE = loadImage("./imagens/boca_abertaE.png");
  boca_fechadaE = loadImage("./imagens/boca_fechadaE.png");
  boca_fechadaB = loadImage("./imagens/boca_fechadaB.png");
  boca_abertaB = loadImage("boca_abertaB.png");
  fantasma_vermelho = loadImage("./imagens/pacman_v.png");
  fantasma_a = loadImage("./imagens/azul.png");
  fantasma_amarelo = loadImage("./imagens/pacman_am.png");
  frameRate(60);
  botao = loadImage("./imagens/botao.png");
  cereja = loadImage("./imagens/cereja.png");
  fundo = loadImage("background.png");
  pacFont = loadFont("PAC-FONT.TTF");
  playground = loadFont("Playground.ttf");
    sound1 = loadSound('sound1.mp3');
    playing = loadSound('playing.mp3')
}
function setup() {
  createCanvas(800, 400);
  background(0);
  sound1.loop(0,1,0.5);

  (posX = 400),
    (posY = 375),
    (raio = 25),
    (pontos = 0),
    (posx_f_v = width / 2),
    (posy_f_v = height / 2),
    (posx_f_a = width / 2),
    (posy_f_a = height / 2),
    (posx_f_am = width / 2),
    (posy_f_am = height / 2),
    (easing = 0.5),
    (cima = false),
    (baixo = false),
    (esquerda = false),
    (direita = false),
    (estadoPacMan = BOCA_FECHADA);
  totalVidas = 0;
  criaCenario();
  perdeu = false;
  conta = 0;
  perdeu = false;
  ganhou = false;
  jogando = true;
  inicial = true;
  sobreb = false;
  creditosb = false;
  maxcerejas = 0;
}
function criaVidas(totalVidas) {
  noStroke();
  fill("black");
  rect(800, 0, totalVidas, 30);
}
function draw() {
  if (inicial == true && sobreb== false) {
    sobreb= false;
    creditosb= false;
    let menu = new Inicial(800, 400, color(100, 210, 250));
    menu.criaTela();
    menu.iniciar();
  } 
 else if(sobreb == true && creditosb == false) {
    let sobre = new Sobre(800, 400);
    sobre.criaSobre();
  }
  else if (creditosb == true && sobreb == false) {
    let creditos = new Creditos(800,400);
    creditos.criaCreditos();
  }else {
    mostra();
  }
}
function mostra() {
  //   if(perdeu == false &&ganhou == false &&
  // jogando == true){

  background(0);
  image(boca_abertaD, 770, 0, 25, 25);
  image(boca_abertaD, 735, 0, 25, 25);
  image(boca_abertaD, 700, 0, 25, 25);
  criaVidas(totalVidas);

  fill("yellow");
  for (let i = 1; i < width / l - 1; i++) {
    for (let j = 1; j < height / a - 1; j++) {
      if (matriz[i][j] == 1) {
        cenario[i][j].show();
      }
    }
  }

  let pacman = new Pacman(posX, posY, raio);

  let fantasma_vermelho = new Fantasma(posx_f_v, posy_f_v, raio, easing, 1);
  let fantasma_azul = new Fantasma(posx_f_a, posy_f_a, raio, easing, 2);
  let fantasma_am = new Fantasma(posx_f_am, posy_f_am, raio, easing, 3);
  testacolisao(pacman, cenario, matriz);
  pacman.MEF();
  desenhaCirculos(pacman);
  fantasma_vermelho.mostraFantasmas(pacman);
  fantasma_vermelho.limitesFantasma();
  fantasma_azul.mostraFantasmas(pacman);
  fantasma_azul.limitesFantasma();
  fantasma_am.mostraFantasmas(pacman);
  fantasma_am.limitesFantasma();
  loop();
  desenhaVidas(fantasma_vermelho, pacman);
  desenhaVidas(fantasma_azul, pacman);
  desenhaVidas(fantasma_am, pacman);

  textSize(30);
  text(pontos, 30, 30);

  let cereja = new PowerUp(cereja_posx, cereja_posy, 20, 20, totalVidas);
  cerejas = [];
  cerejas.push({
    x: cereja_posx,
    y: cereja_posy,
    r: 15,
  });
  if (int(totalVidas + 100) <= 50 && maxcerejas <= 2) {
    cereja.mostraPowerUp();

    if (
      collideRectRect(
        cereja_posx,
        cereja_posy,
        15,
        15,
        pacman.posX,
        pacman.posY,
        20,
        20
      )
    ) {
      cerejas.splice(0, 1);
      maxcerejas += 1;
      totalVidas += 10;

      for (let i = 1; i < width / l - 1; i++) {
        for (let j = 1; j < height / a - 1; j++) {
          if (matriz[i][j] != 1) {
            cereja_posx = random(1, 18) * l + 5;
            cereja_posy = random(1, 9) * a + 5;
          }
        }
      }
    }
  }

  textSize(30);
  textFont(playground);
  conta = int(totalVidas + 100);
  text(conta, 640, 25);

  if (conta <= 0) {
    perdeu = true;
    jogando = false;
    inicial = false;
    //let derrota = new Derrota(800, 400, 1);
    if (perdeu == true) {
      let derrota = new Derrota(800, 400, color(100, 210, 250));
      background(0);
      derrota.criaTela(pontos);
      derrota.mousePressed();
    }
  }
  if (pontos >= 100) {
    ganhou = true;
    jogando = false;
    inicial = false;

    if (ganhou == true) {
      let vitoria = new Vitoria(800, 400, color(100, 210, 250));
      vitoria.criaTela(pontos);
      vitoria.botao();
    }
  }
}
function criaCenario() {
  circulos = [];
  for (let i = 1; i < width / l - 1; i++) {
    matriz[i] = [];
    for (let j = 1; j < height / a - 1; j++) {
      matriz[i][j] = int(random(0, 5));
    }
  }
  for (let i = 1; i < width / l - 1; i++) {
    cenario[i] = [];
    for (let j = 1; j < height / a - 1; j++) {
      if (matriz[i][j] == 1) {
        cenario[i][j] = new Cenario(i * l, j * a, l, a);
      } else if (matriz[i][j] != 1) {
        cereja_posx = random(1, 18) * l + 5;
        cereja_posy = random(1, 9) * a + 5;
        circulos.push({
          x: i * l + 20,
          y: j * a + 20,
          r: 7,
        });
      }
    }
  }
  console.log(circulos);
  console.log(cereja_posx);
  console.log(cereja_posy);
}

function testacolisao(pacman, cenario, matriz) {
  for (let i = 1; i < width / l - 1; i++) {
    for (let j = 1; j < height / a - 1; j++) {
      //lado direito
      if (
        collideRectRect(
          i * l + 30,
          j * a,
          10,
          40,
          pacman.posX,
          pacman.posY,
          25,
          20
        ) &&
        matriz[i][j] == 1 &&
        keyIsPressed == true
      ) {
        line(i * l + 20, j * a + 20, pacman.posX, pacman.posY);

        // fill("green");
        // rect(i * l+30, j * a, 10, 40);

        posX = i * l + 42;
        posY = posY;
      } else if (
        collideRectRect(
          i * l,
          j * a,
          20,
          40,
          pacman.posX,
          pacman.posY,
          25,
          20
        ) &&
        matriz[i][j] == 1 &&
        keyIsPressed == true
      ) {
        // fill("yellow")
        // rect(i * l-25, j * a, 20, a);
        posX = i * l - 27;
        posY = posY;
      } else if (
        collideRectRect(
          i * l,
          j * a - 20,
          l,
          10,
          pacman.posX,
          pacman.posY,
          15,
          10
        ) &&
        matriz[i][j] == 1 &&
        keyIsPressed == true
      ) {
        // fill("red");
        // rect(i * l, j * a-20, l, 20);
        posX = posX;
        posY = j * a - 30;
      } else if (
        collideRectRect(
          i * l + 10,
          j * a + 40,
          30,
          10,
          pacman.posX,
          pacman.posY,
          25,
          20
        ) &&
        matriz[i][j] == 1 &&
        keyIsPressed == true
      ) {
        // fill("white")
        // rect(i * l+10, j * a+40, 30, 20);
        posX = posX;
        posY = j * a + 50;
      }
    }
  }
}

function collideRectRect(x, y, w, h, x2, y2, w2, h2) {
  if (x + w >= x2 && x <= x2 + w2 && y + h >= y2 && y <= y2 + h2) {
    return true;
  }

  return false;
}
function Colisao(posX, posY, x, y, raio) {
  c = dist(posX, posY, x, y);

  if (c < 30) {
    return true;
  }
}

//Verifica se existe colisão com algum circulo
function collideCircleCircle(x1, y1, r1, x2, y2, r2) {
  let d = dist(x1, y1, x2, y2);
  if (d <= r1 + r2) {
    return true;
  } else {
    return false;
  }
}
//desenhando os circulos que o personagem vai engolir
function desenhaCirculos(pacman) {
  for (let i = 0; i < circulos.length; i++) {
    fill(255);
    ellipse(circulos[i].x, circulos[i].y, circulos[i].r);
    if (
      collideCircleCircle(
        pacman.posX + 10,
        pacman.posY + 10,
        10,
        circulos[i].x,
        circulos[i].y,
        3
      )
    ) {
      if (jogando == true) {
        circulos.splice(i, 1);
        pontos++;
      }
    }
  }
}
function desenhaVidas(fantasma_vermelho, pacman) {
  if (fantasma_vermelho.colisaoFantasmaPacMan(pacman) == true) {
    totalVidas -= 0.5;
  }

  //print(vidas.length)
}
