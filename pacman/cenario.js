
class Cenario{
  constructor(x, y, w, h){
    this.x = x;
    this. y = y;
    this.w = w;
    this. h = h;
  }
  show() {
    stroke(255);
    strokeWeight(1);
    fill(0, 0, 255)
    rect(this.x, this.y, this.w, this.h);
  }
  //Verifica se existe uma colisão entre RETANGULOS
 collideRectRect(x, y, w, h, x2, y2, w2, h2) {
  if (x + w >= x2 &&    
      x <= x2 + w2 &&    
      y + h >= y2 &&    
      y <= y2 + h2) {    
    return true;
  }
  return false;
}
}