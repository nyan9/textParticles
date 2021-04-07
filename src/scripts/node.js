const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 30;
    this.initialX = this.x;
    this.initialY = this.y;
    this.velX = 0.1;
    this.velY = -0.1;
    this.dt = 10;

    this.move = this.move.bind(this);
    this.draw = this.draw.bind(this);
    this.animate = this.animate.bind(this);
    this.clearNode = this.clearNode.bind(this);
  }

  move() {
    // position = initial position + velocity * deltaTime
    this.x = this.x + this.velX * this.dt;
    this.y = this.y + this.velY * this.dt;
  }

  draw() {
    ctx.fillStyle = "rgb(255,56,100)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  clearNode() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  animate() {
    this.clearNode();
    setTimeout(this.animate, this.dt);
    this.move();
    this.draw();
  }
}

export default Node;
