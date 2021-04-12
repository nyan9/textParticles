import Node from "./node";
import V from "./vector";
import * as T from "./text";

const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const middle = new V(width / 2, height / 2);

let nodes = [];
let textNodes = [];

// Linear interpolation
function lerp(min, max, v) {
  return max * v + min * (1 - v);
}

// min max normalization
function rescale(min, max, v) {
  return (v - min) / (max - min);
}

function populateNodes(n = 50) {
  nodes = [];

  for (let i = 0; i < n; i++) {
    let node = new Node(middle.x, middle.y, 4);

    node.position.randomize(lerp(0, width / 2, Math.random())).add(middle);
    node.velocity.randomize(lerp(0.05, 0.1, Math.random()));

    nodes.push(node);
  }
}

function populateTextNodes() {
  textNodes = [];

  let textSize = 10;
  let textNodePos = T.textPixels;
  for (let i = 0; i <= textNodePos.length - 1; i++) {
    let tx = textNodePos[i].positionX * textSize;
    let ty = textNodePos[i].positionY * textSize;
    let node = new Node(tx, ty, 2);

    textNodes.push(node);
  }
}

function drawLine(pos1, pos2, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(pos1.x, pos1.y);
  ctx.lineTo(pos2.x, pos2.y);
  ctx.stroke();
}

// max, min distance threshold for stage connections
const maxDistance = 100;
const minDistance = 30;

// draw stage node connections
function drawConnection(node1, node2, distance) {
  // do nothing, if displacement vector is longer than maxDistance
  if (distance >= maxDistance) {
    return;
  }

  // scale color opacity(alpha) depending on distance between nodes
  let alpha = rescale(maxDistance, minDistance, distance);
  let color = `hsla(181, 79%, 54%, ${alpha})`;

  drawLine(node1.position, node2.position, color);
}

// draw text node connections
function drawTextConnection(node1, node2, distance) {
  if (distance >= 20) {
    return;
  }

  let alpha = rescale(20, 10, distance);
  let color = `hsla(181, 79%, 54%, ${alpha})`;

  drawLine(node1.position, node2.position, color);
}

function drawConnections(nodeType) {
  let displacement;
  let distance;

  for (let i = 0; i < nodeType.length; i++) {
    for (let j = i + 1; j < nodeType.length; j++) {
      // shortest path between two nodes
      displacement = nodeType[j].position.minus(nodeType[i].position);
      // length between two nodes
      distance = displacement.magnitude();

      // check if passed in type of nodes are stageNodes or textNodes
      if (nodeType === textNodes) {
        drawTextConnection(nodeType[i], nodeType[j], distance);
      } else {
        drawConnection(nodeType[i], nodeType[j], distance);
      }
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// each frame's actions
function frame(deltaT) {
  drawConnections(nodes);
  for (let node of nodes) {
    node.move(deltaT);
    node.draw();
    node.bounce();
  }
}

function textFrame() {
  drawConnections(textNodes);
  for (let textNode of textNodes) {
    textNode.draw();
  }
}

// BEGIN POLYFILL
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
// END POLYFILL

// render Nodes
// keep track of deltaTime every frame
let prevTime = 0;
function renderNodes() {
  let now = performance.now();
  let deltaT = now - prevTime;
  prevTime = now;

  clear();
  frame(deltaT);
  textFrame();
  requestAnimationFrame(renderNodes);
}
renderNodes();

populateNodes();
T.getTextData();
populateTextNodes();
