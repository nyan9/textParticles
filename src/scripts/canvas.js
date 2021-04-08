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

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function frame() {
  clear();
  for (let node of nodes) {
    node.move();
    node.draw();
    node.bounce();
  }
}

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
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

function renderNodes() {
  frame();
  requestAnimationFrame(renderNodes);
}
renderNodes();
