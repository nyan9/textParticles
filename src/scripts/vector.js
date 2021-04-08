class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  dup() {
    return new Vector(this.x, this.y);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  minus(other) {
    return this.dup().subtract(other);
  }

  multiply(num) {
    this.x *= num;
    this.y *= num;
    return this;
  }

  times(num) {
    return this.dup().multiply(num);
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    let length = this.magnitude();
    if (length === 0) {
      length = 1;
      this.x = 1;
      this.y = 0;
    }
    this.multiply(1 / length);
    return this;
  }

  setMagnitude(num) {
    return this.normalize().multiply(num);
  }
}

export default Vector;
