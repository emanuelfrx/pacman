class Telas {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
}
class Vitoria extends Telas {
  constructor(largura, altura, cor) {
    super(largura, altura);
    this.cor = cor;
  }
  criaTela(pontos) {
   
    textAlign(CENTER);
    image(fundo, 0, 0, this.largura, this.altura);
    textSize(30);
    fill(0);
    fill("purple");
    textFont(playground);
    textSize(80);
    text("VITÓRIA!!", this.largura / 2 - 50, this.altura / 2 - 50, 100);
    textSize(20);
    textFont(pacFont);
     fill(random(255), random(255), random(255))
     rect(this.largura/2-145, this.altura/2+110, 360, 50);
    fill("white")
    rect(this.largura/2-150, this.altura/2+100, 360, 50);
   fill("black")
    textSize(25)
    text("jogar novamente", this.largura / 2 +20, this.altura / 2 + 130);
    textSize(30);
    textFont(pacFont);
    fill("white")
    text("pontuacao: ", this.largura / 2, this.altura / 2 + 50);
    textSize(40);
    textFont(playground);
    text(pontos, this.largura / 2 + 180, this.altura / 2 + 50);
      
  }
  botao() {
    if (mouseIsPressed === true) {
      if (
        mouseX >= width / 2 -145 &&
        mouseX <= width / 2 + 215 &&
        mouseY >= height / 2 + 110 &&
        mouseY <= height / 2 + 160
      ) {
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
        mostra();
        print("clicou");
        maxcerejas = 0;
        frameCount = 0;

        ganhou = false;
        jogando = true;
    
      }
    }
  }
}

class Derrota extends Telas {
  constructor(largura, altura, a) {
    super(largura, altura);
    this.a = a;
  }
  criaTela(pontos) {
    
    textAlign(CENTER);
    image(fundo, 0, 0, this.largura, this.altura);
    textSize(30);
    fill(0);
    fill("white");
    textFont(playground);
    textSize(80);
    text("DERROTA", this.largura / 2 - 50, this.altura / 2 - 50, 100);
    textSize(20);
    textFont(pacFont);
     fill(random(255), random(255), random(255))
     rect(this.largura/2-145, this.altura/2+110, 360, 50);
    fill("white")
    rect(this.largura/2-150, this.altura/2+100, 360, 50);
   fill("black")
    textSize(25)
    text("jogar novamente", this.largura / 2 +20, this.altura / 2 + 130);
    textSize(30);
    textFont(pacFont);
    fill("white")
    text("pontuacao: ", this.largura / 2, this.altura / 2 + 50);
    textSize(40);
    textFont(playground);
    text(pontos, this.largura / 2 + 180, this.altura / 2 + 50);
  }
  mousePressed() {
    if (mouseIsPressed === true) {
      if (
        mouseX >= width / 2 -145 &&
        mouseX <= width / 2 + 215 &&
        mouseY >= height / 2 + 110 &&
        mouseY <= height / 2 + 160
      ) {
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
        mostra();
        print("clicou");
        perdeu = false;
        jogando = true;
        maxcerejas = 0;
        sobreb= false;
        creditosb=false;
        frameCount = 0;
      }
    }
  }
}
class Inicial extends Telas{
  constructor(largura, altura, cor){
    super(largura,altura);
    this.cor = cor;
  }
    criaTela(pontos) {
     this.telaMenu();
     this.botaoSobre();
      this.botaocreditos();
//    botao sobre
    
      
  }
  iniciar(){
if (mouseIsPressed === true) {
      if (
        mouseX >= width / 2 -110 &&
        mouseX <= width / 2 + 140 &&
        mouseY >= height / 2 + 110 &&
        mouseY <= height / 2 + 160
      ) {
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
        mostra();
        print("clicou");
        perdeu = false;
        jogando = true;
         inicial = false;
        sobreb= false;
        creditosb = false;
        maxcerejas = 0;
        frameCount = 0;
               sound1.stop();
       playing.loop(0,1,0.5);
    
  } else if (
        mouseX >= 20 &&
        mouseX <= 220 &&
        mouseY >= height / 2 + 80 &&
        mouseY <= height / 2 + 130
      ) {

         perdeu = false;
        jogando = true;
         inicial = false;
        sobreb= true
        creditosb = false;
    
   
}  if (
        mouseX >= this.largura/2+190&&
        mouseX <= this.largura/2+390 &&
        mouseY >= this.altura/2+80 &&
        mouseY <= this.altura/2+230
      ) {
   
    perdeu = false;
        jogando = true;
         inicial = false;
        sobreb= false
        creditosb = true
  
   
}
  }
  }
  telaMenu(){
 textAlign(CENTER);
    image(fundo, 0, 0, this.largura, this.altura);
    textSize(30);
  
 
    textFont(pacFont);
    textSize(80);
    fill(random(0,255), random(0,255), random(0,255))

    text("PAC-MAN", this.largura / 2 - 50, this.altura / 2 - 50, 100);
//     botao play
    textSize(20);
    textFont(pacFont);
     fill(random(255), random(255), random(255))
     rect(this.largura/2-110, this.altura/2+110, 250, 50);
    fill("white")
    rect(this.largura/2-115, this.altura/2+100, 250, 50);
   fill("black")
    textSize(25)
    text("PLAY", this.largura / 2, this.altura / 2 + 130);
    textSize(30);
    textFont(pacFont);
      
}
  botaoSobre(){
    textFont(pacFont);
    
    fill("white")
    rect(15, this.altura/2+80, 200, 50);
   fill("black")
    textSize(25)
    text("SOBRE", 110, this.altura / 2 + 110);
    textSize(30);
    textFont(pacFont);
  }
  botaocreditos(){
    textFont(pacFont);

    fill("white")
    rect(this.largura/2+185, this.altura/2+80, 200, 50);
   fill("black")
    textSize(25)
    text("CREDITOS", this.largura/2+290, this.altura / 2 + 110);
    textSize(30);
    textFont(pacFont);
  }

}
class Sobre extends Telas{
constructor(largura, altura){
  super(largura, altura);
}
  criaSobre(){
     sobreb = true;
     creditosb=false;
    image(fundo, 0, 0, this.largura, this.altura);
    textSize(30);
    textFont(pacFont)
    fill("white");
    text("SOBRE", this.largura/2, 100);
    textFont(playground);
    textSize(25)
    text("Tente salvar o PACMAN com as setas para cima, baixo, direita e esquerda ",100, 150, 600);
    textSize(25)
    text("Voce pode tentar pegar uma cereja se quiser recuperar sua vida, mas as vezes elas podem estar presas entre os muros ",100, 225, 600);
    text("Blinky, Pinky, Inky e Clyde são fantasmas... MAS...  VOCE AINDA NAO É", 100, 330,600)
    this.botaoVoltar();
    this.voltar();
  }
  voltar(){
if (mouseIsPressed === true) {
      if((mouseX >= this.largura/2 +225) &&
        (mouseX <= this.largura/2+395) &&
        (mouseY >= 50)&&
        (mouseY <= 100) && creditosb==false){           let menu = new Inicial(800, 400, color(100, 210, 250));
        perdeu = false;
        jogando = true;
        inicial = true
        sobreb= false
        creditosb = false;                      


      }
        
  }
  }
  botaoVoltar(){
    textFont(pacFont);
     fill(random(255), random(255), random(255))

     rect(this.largura/2+225, 50, 170, 50);
    fill("white")
    rect(this.largura/2+225, 60, 170, 50);
   fill("black")
    textSize(25)
    text("VOLTAR", this.largura/2+300, 100);
    textSize(30);
    textFont(pacFont);
  }
}
class Creditos extends Sobre {
  constructor(largura, altura){
  super(largura, altura);
}
  criaCreditos(){
  creditosb = true;
  sobreb= false;
  image(fundo, 0, 0, this.largura, this.altura);
    textSize(30);
     textFont(pacFont)
    fill("white");
    text("CREDITOS", this.largura/2, 100);
    textFont(playground);
    textSize(20);
    text("sound by aespa Supernova Instrumental:", 100, 150 , 600);
    text("https://youtu.be/olQCG7YOg7k?si=iXsRElzeKO62frnV",100,170,600);
     textSize(20);
    text("ghosts and pacman by link: ",100,220,600);
    textSize(15);
    text("https://w7.pngwing.com/pngs/55/528/png-transparent-drawing -computer-icons-baby-pacman-logo-smiley-emoticon-thumbnail.png",100,250,600);
      text("Esse projeto possui finalidade acadêmica, desenvolvido  por Emanuel Freitas",100,360,600);
   this.botaoVoltar();
    this.voltar()
  }
   botaoVoltar(){
    textFont(pacFont);
     fill(random(255), random(255), random(255))

     rect(50, 50, 170, 50);
    fill("white")
    rect(60, 60, 170, 50);
   fill("black")
    textSize(25)
    text("VOLTAR", 130, 100);
    textSize(30);
    textFont(pacFont);
  }
 voltar(){
if (mouseIsPressed === true) {
      if((mouseX >= 50) &&
        (mouseX <= 220) &&
        (mouseY >= 50)&&
        (mouseY <= 100) && creditosb==true){           let menu = new Inicial(800, 400, color(100, 210, 250));
        perdeu = false;
        jogando = true;
        inicial = true
        sobreb= false
        creditosb = false;                      


      }
        
  }
  }
}