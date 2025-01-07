
class Pacman {
  constructor(posX, posY, raio) {
    this.posX = posX;
    this.posY = posY;
    this.raio = raio;
  }
  mostraEstadosPacMan(estadoPacMan) {
    if (estadoPacMan == BOCA_FECHADA) {
      if (keyIsDown(40) || posicao == 0) {
        image(boca_fechadaB, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(39) || posicao == 1) {
        image(boca_fechadaD, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(38) || posicao == 2) {
        image(boca_fechadaC, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(37) | (posicao == 3)) {
        image(boca_fechadaE, this.posX, this.posY, this.raio, this.raio);
      } else {
      }
    } else if (estadoPacMan == BOCA_ABERTA) {
      if (keyIsDown(40)) {
        image(boca_abertaB, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(39)) {
        image(boca_abertaD, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(38)) {
        image(boca_abertaC, this.posX, this.posY, this.raio, this.raio);
      } else if (keyIsDown(37)) {
        image(boca_abertaE, this.posX, this.posY, this.raio, this.raio);
      }
    }
  }

  movimentaPacMan() {
    if (keyIsDown(39)) {
      posicao = 1;
      posX += 2;
    }
    if (keyIsDown(37)) {
      posicao = 3;
      posX -= 2
    }
    if (keyIsDown(38)) {
      posicao = 2;
      posY -= 2
    }
    if (keyIsDown(40)) {
      posicao = 0;
       posY += 2;
    }
  }
  testaLimites(){
    if(posX <= 0){
      posX = width ;
    }else if(posX >= width && posX >0 ){
      posX = 0+1;
    }
    if(posY+this.raio <= 0){
      posY = height-this.raio;
    }
    if(posY >= height){
      posY = 0;
    }
  }
  MEF() {
    if (keyIsPressed) {
      contador++;
      if (contador <= 5) {
        estadoPacMan = BOCA_FECHADA;
      }
      if (contador >= 10) {
        estadoPacMan = BOCA_ABERTA;
      }
      if (contador >= 15) {
        estadoPacMan = BOCA_FECHADA;
        contador = 0;
      }
    } else {
      estadoPacMan = BOCA_FECHADA;
      contador = 0;
    }
    this.mostraEstadosPacMan(estadoPacMan);
    this.movimentaPacMan();
    this.testaLimites();
  }
}

