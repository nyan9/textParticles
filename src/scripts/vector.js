class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  substract(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  multiply(num) {
    this.x *= num;
    this.y *= num;
    return this;
  }

  times(num) {
    return this.clone().multiply(num);
  }
}

export default Vector;
