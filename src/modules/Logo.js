export default class Logo {
  constructor(element, source) {
    this.element = element;
    this.element.src = source;

    this.size = 151;
    this.vel = 1;

    this.rotation = 0;
    this.draw();
  }

  animate() {
    if (this.size == 200 || this.size == 150) {
      this.vel *= -1;
    }

    this.size += this.vel;
    this.rotation += 0.9;
  }

  draw() {
    this.element.style.width = `${this.size}px`;
    this.element.style.transform = `rotate(${this.rotation}deg)`;
  }
}
