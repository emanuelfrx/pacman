class PowerUp{
  constructor(posx, posy, raio, pontos){
    this.posx = posx;
    this.posy = posy;
    this.raio = raio;
    this.pontos = pontos;
  }
  mostraPowerUp(){
      if(this.pontos<= 50){
          image(cereja, this.posx, this.posy, this.raio, this.raio);
      }
  }
}