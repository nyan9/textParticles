const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = width;
canvas.height = height;

import Node from "./node";

let node;
function setupNode() {
  node = new Node(width / 2, height / 2);
}
setupNode();

function showNode() {
  node.animate(width, height);
}
showNode();
