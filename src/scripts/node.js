import V from "./vector";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Node {
  constructor(x, y, r = 3) {
    this.radius = r;
    this.position = new V(x, y);
    this.velocity = new V(0.1, 0.2);
    this.initialX = this.position.x;
    this.initialY = this.position.y;
  }

  draw() {
    ctx.fillStyle = "rgb(255,56,100)";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  move(deltaT) {
    // position = initial position + velocity * deltaTime
    this.position.add(this.velocity.times(deltaT));
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
