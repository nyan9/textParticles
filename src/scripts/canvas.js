import Node from "./node";
import V from "./vector";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const middle = new V(width / 2, height / 2);
let nodes = [];

// Linear interpolation
function lerp(min, max, v) {
  return max * v + min * (1 - v);
}

// min max normalization
function rescale(min, max, v) {
  return (v - min) / (max - min);
}

function populateNodes(n = 100) {
  nodes = [];

  for (let i = 0; i < n; i++) {
    let node = new Node(middle.x, middle.y);

    node.position.randomize(lerp(0, width / 2, Math.random())).add(middle);
    node.velocity.randomize(lerp(0.05, 0.1, Math.random()));
    nodes.push(node);
  }
}
populateNodes();
console.log(nodes);

// max, min distance threshold
const maxDistance = 150;
const minDistance = 50;

function drawLine(pos1, pos2, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(pos1.x, pos1.y);
  ctx.lineTo(pos2.x, pos2.y);
  ctx.stroke();
}

function drawConnection(node1, node2) {
  let displacement = node2.position.minus(node1.position);
  let distance = displacement.magnitude();

  // do nothing, if displacement vector is longer than maxDistance
  if (distance >= maxDistance) {
    return;
  }

  // scale color opacity(alpha) depending on distance between nodes
  let alpha = rescale(maxDistance, minDistance, distance);
  let color = `hsla(181, 79%, 54%, ${alpha})`;

  drawLine(node1.position, node2.position, color);
}

function drawConnections() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      drawConnection(nodes[i], nodes[j]);
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// each frame's actions
function frame(deltaT) {
  clear();
  drawConnections();

  for (let node of nodes) {
    node.move(deltaT);
    node.draw();
    node.bounce();
  }
}

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// MIT license
(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();

// keep track of deltaTime every frame
let prevTime = 0;
function renderNodes() {
  let now = performance.now();
  let deltaT = now - prevTime;
  prevTime = now;

  frame(deltaT);
  requestAnimationFrame(renderNodes);
}
renderNodes();
