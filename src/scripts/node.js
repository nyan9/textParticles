import V from "./vector";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Node {
  constructor(x, y) {
    this.radius = 3;
    this.position = new V(x, y);
    this.velocity = new V(0.1, 0.2);
    this.deltaT = 20;
    this.initialX = x;
    this.initialY = y;
  }

  clearNode() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw() {
    ctx.fillStyle = "rgb(255,56,100)";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  move() {
    // position = initial position + velocity * deltaTime
    this.position.add(this.velocity.times(this.deltaT));
  }

  bounce() {
    // Bottom edge collision
    if (this.position.y >= canvas.height - this.radius) {
      this.velocity.y = -this.velocity.y;
      // if outside of boundary, insert back into the box at the boundary
      this.position.y = canvas.height - this.radius;
    }
    // Right edge collision
    if (this.position.x >= canvas.width - this.radius) {
      this.velocity.x = -this.velocity.x;
      this.position.x = canvas.width - this.radius;
    }
    // Top edge collision
    if (this.position.y <= this.radius) {
      this.velocity.y = -this.velocity.y;
      this.position.y = this.radius;
    }
    // Left edge collision
    if (this.position.x <= this.radius) {
      this.velocity.x = -this.velocity.x;
      this.position.x = this.radius;
    }
  }
}

export default Node;
