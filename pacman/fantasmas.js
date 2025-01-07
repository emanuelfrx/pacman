
class Fantasma {
  constructor(posx, posy, raio, easing, cor) {
    this.posx = posx;
    this.posy = posy;
    this.raio = raio;
    this.easing = easing;
    this.cor = cor;
  }

  limitesFantasma() {
    if (this.posx <= 0) {
      this.posx = width;
    } else if (this.posx >= width && this.posx > 0) {
      this.posx = 0;
    }
  }
  mostraFantasmas(pacman) {
    if (frameCount >= 60) {
      if (this.cor == 1) {
        image(fantasma_vermelho, posx_f_v, posy_f_v, raio, this.raio);
        let dx1 = pacman.posX - posx_f_v;
        let dy1 = pacman.posY - posy_f_v;
        posx_f_v += (dx1 * this.easing)/40;
        posy_f_v += (dy1 * this.easing)/30;
      }
    }
    if (frameCount >= 360) {
      if (this.cor == 2) {
        image(fantasma_a, posx_f_a, posy_f_a, raio, this.raio);
        let dx2 = pacman.posY - posx_f_a;
        let dy2 = pacman.posY - posy_f_a;
        posy_f_a += (dy2 * this.easing)/20;
      }
    }
    if (frameCount >= 420) {
      if (this.cor == 3) {
        image(fantasma_amarelo, posx_f_am, posy_f_am, raio, this.raio);

        let dx3 = pacman.posX - posx_f_am;
        posx_f_am += (dx3 * this.easing)/20 ;
      }
    }

    this.limitesFantasma();
  }
  colisaoFantasmaPacMan(pacman) {
   
    if (
      collideRectRect(
        pacman.posX,
        pacman.posY,
        pacman.raio,
        pacman.raio,
        this.posx,
        this.posy,
        this.raio,
        this.raio
      )
    ) {
       return true;
        
      }
     return false;
  
    }
  
}
