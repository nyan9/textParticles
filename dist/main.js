/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");



/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./src/scripts/node.js");
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector */ "./src/scripts/vector.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./src/scripts/text.js");



var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var middle = new _vector__WEBPACK_IMPORTED_MODULE_1__["default"](width / 2, height / 2);
var nodes = [];
var textNodes = []; // Linear interpolation

function lerp(min, max, v) {
  return max * v + min * (1 - v);
} // min max normalization


function rescale(min, max, v) {
  return (v - min) / (max - min);
}

function populateNodes() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  nodes = [];

  for (var i = 0; i < n; i++) {
    var node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](middle.x, middle.y, 4);
    node.position.randomize(lerp(0, width / 2, Math.random())).add(middle);
    node.velocity.randomize(lerp(0.05, 0.1, Math.random()));
    nodes.push(node);
  }
}

function populateTextNodes() {
  textNodes = [];
  var textSize = 10;
  var textNodePos = _text__WEBPACK_IMPORTED_MODULE_2__["textPixels"];

  for (var i = 0; i <= textNodePos.length - 1; i++) {
    var tx = textNodePos[i].positionX * textSize;
    var ty = textNodePos[i].positionY * textSize;
    var node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](tx, ty, 2);
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
} // max, min distance threshold for stage connections


var maxDistance = 100;
var minDistance = 30; // draw stage node connections

function drawConnection(node1, node2, distance) {
  // do nothing, if displacement vector is longer than maxDistance
  if (distance >= maxDistance) {
    return;
  } // scale color opacity(alpha) depending on distance between nodes


  var alpha = rescale(maxDistance, minDistance, distance);
  var color = "hsla(181, 79%, 54%, ".concat(alpha, ")");
  drawLine(node1.position, node2.position, color);
} // draw text node connections


function drawTextConnection(node1, node2, distance) {
  if (distance >= 20) {
    return;
  }

  var alpha = rescale(20, 10, distance);
  var color = "hsla(181, 79%, 54%, ".concat(alpha, ")");
  drawLine(node1.position, node2.position, color);
}

function drawConnections(nodeType) {
  var displacement;
  var distance;

  for (var i = 0; i < nodeType.length; i++) {
    for (var j = i + 1; j < nodeType.length; j++) {
      // shortest path between two nodes
      displacement = nodeType[j].position.minus(nodeType[i].position); // length between two nodes

      distance = displacement.magnitude(); // check if passed in type of nodes are stageNodes or textNodes

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
} // each frame's actions


function frame(deltaT) {
  drawConnections(nodes);

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var node = _nodes[_i];
    node.move(deltaT);
    node.draw();
    node.bounce();
  }
}

function textFrame() {
  drawConnections(textNodes);

  for (var _i2 = 0, _textNodes = textNodes; _i2 < _textNodes.length; _i2++) {
    var textNode = _textNodes[_i2];
    textNode.draw();
  }
} // BEGIN POLYFILL
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// MIT license


(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(); // END POLYFILL
// render Nodes
// keep track of deltaTime every frame


var prevTime = 0;

function renderNodes() {
  var now = performance.now();
  var deltaT = now - prevTime;
  prevTime = now;
  clear();
  frame(deltaT);
  textFrame();
  requestAnimationFrame(renderNodes);
}

renderNodes();
populateNodes();
_text__WEBPACK_IMPORTED_MODULE_2__["getTextData"]();
populateTextNodes();

/***/ }),

/***/ "./src/scripts/node.js":
/*!*****************************!*\
  !*** ./src/scripts/node.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/scripts/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Node = /*#__PURE__*/function () {
  function Node(x, y) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    _classCallCheck(this, Node);

    this.radius = r;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.1, 0.2);
    this.initialX = this.position.x;
    this.initialY = this.position.y;
  }

  _createClass(Node, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "rgb(255,56,100)";
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "move",
    value: function move(deltaT) {
      // position = initial position + velocity * deltaTime
      this.position.add(this.velocity.times(deltaT));
    }
  }, {
    key: "bounce",
    value: function bounce() {
      // Bottom edge collision
      if (this.position.y >= canvas.height - this.radius) {
        this.velocity.y = -this.velocity.y; // if outside of boundary, insert back into the box at the boundary

        this.position.y = canvas.height - this.radius;
      } // Right edge collision


      if (this.position.x >= canvas.width - this.radius) {
        this.velocity.x = -this.velocity.x;
        this.position.x = canvas.width - this.radius;
      } // Top edge collision


      if (this.position.y <= this.radius) {
        this.velocity.y = -this.velocity.y;
        this.position.y = this.radius;
      } // Left edge collision


      if (this.position.x <= this.radius) {
        this.velocity.x = -this.velocity.x;
        this.position.x = this.radius;
      }
    }
  }]);

  return Node;
}();

/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./src/scripts/text.js":
/*!*****************************!*\
  !*** ./src/scripts/text.js ***!
  \*****************************/
/*! exports provided: textPixels, getText, getTextData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textPixels", function() { return textPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getText", function() { return getText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextData", function() { return getTextData; });
var text = document.getElementById("text"),
    ctx = text.getContext("2d");
var width = text.width = window.innerWidth;
var height = text.height = window.innerHeight;
var textPixels = [];
function getText() {
  ctx.fillStyle = "white";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText("Aeiou", 5, 25); // ctx.strokeRect(0, 0, 400, 30);
}
function getTextData() {
  var textImgData = ctx.getImageData(0, 0, 400, 30); // every single pixel of image data

  var pixData = textImgData.data; // Iterate through every pixel collected inside ClampedArray (textImgData.data)

  for (var y = 0; y < textImgData.height; y++) {
    for (var x = 0; x < textImgData.width; x++) {
      // push x,y coord to textPixels, if alpha value of pixelData is greater than 128
      if (pixData[y * 4 * textImgData.width + x * 4 + 3] > 128) {
        textPixels.push({
          positionX: x,
          positionY: y
        });
      }
    }
  }

  console.log(textImgData);
  console.log(textPixels);
}
getText();

/***/ }),

/***/ "./src/scripts/vector.js":
/*!*******************************!*\
  !*** ./src/scripts/vector.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector = /*#__PURE__*/function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "dup",
    value: function dup() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    }
  }, {
    key: "minus",
    value: function minus(other) {
      return this.dup().subtract(other);
    }
  }, {
    key: "multiply",
    value: function multiply(num) {
      this.x *= num;
      this.y *= num;
      return this;
    }
  }, {
    key: "times",
    value: function times(num) {
      return this.dup().multiply(num);
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "normalize",
    value: function normalize(num) {
      var length = this.magnitude();

      if (length === 0) {
        length = 1;
        this.x = 1;
        this.y = 0;
      }

      this.multiply(num / length);
      return this;
    }
  }, {
    key: "setMagnitude",
    value: function setMagnitude(num) {
      return this.normalize().multiply(num);
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var length = this.magnitude();

      if (length === 0) {
        length = 1;
        this.x = 1;
        this.y = 0;
      }

      this.x = length * Math.cos(angle);
      this.y = length * Math.sin(angle);
      return this;
    }
  }, {
    key: "randomize",
    value: function randomize() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return this.normalize(n).setAngle(2 * Math.PI * Math.random());
    }
  }]);

  return Vector;
}();

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibWlkZGxlIiwiViIsIm5vZGVzIiwidGV4dE5vZGVzIiwibGVycCIsIm1pbiIsIm1heCIsInYiLCJyZXNjYWxlIiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsInBvcHVsYXRlVGV4dE5vZGVzIiwidGV4dFNpemUiLCJ0ZXh0Tm9kZVBvcyIsIlQiLCJsZW5ndGgiLCJ0eCIsInBvc2l0aW9uWCIsInR5IiwicG9zaXRpb25ZIiwiZHJhd0xpbmUiLCJwb3MxIiwicG9zMiIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJtYXhEaXN0YW5jZSIsIm1pbkRpc3RhbmNlIiwiZHJhd0Nvbm5lY3Rpb24iLCJub2RlMSIsIm5vZGUyIiwiZGlzdGFuY2UiLCJhbHBoYSIsImRyYXdUZXh0Q29ubmVjdGlvbiIsImRyYXdDb25uZWN0aW9ucyIsIm5vZGVUeXBlIiwiZGlzcGxhY2VtZW50IiwiaiIsIm1pbnVzIiwibWFnbml0dWRlIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJmcmFtZSIsImRlbHRhVCIsIm1vdmUiLCJkcmF3IiwiYm91bmNlIiwidGV4dEZyYW1lIiwidGV4dE5vZGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicHJldlRpbWUiLCJyZW5kZXJOb2RlcyIsIm5vdyIsInBlcmZvcm1hbmNlIiwiciIsInJhZGl1cyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJ0aW1lcyIsInRleHQiLCJ0ZXh0UGl4ZWxzIiwiZ2V0VGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsImdldFRleHREYXRhIiwidGV4dEltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJwaXhEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJWZWN0b3IiLCJvdGhlciIsImR1cCIsInN1YnRyYWN0IiwibnVtIiwibXVsdGlwbHkiLCJzcXJ0Iiwibm9ybWFsaXplIiwiYW5nbGUiLCJjb3MiLCJzaW4iLCJzZXRBbmdsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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aUI7QUFBQSxVQUFQdEcsQ0FBTyx1RUFBSCxDQUFHO0FBQ2YsYUFBTyxLQUFLcUcsU0FBTCxDQUFlckcsQ0FBZixFQUFrQnlHLFFBQWxCLENBQTJCLElBQUlqRyxJQUFJLENBQUNzRSxFQUFULEdBQWN0RSxJQUFJLENBQUNDLE1BQUwsRUFBekMsQ0FBUDtBQUNEOzs7Ozs7QUFHWXFGLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuaW1wb3J0ICogYXMgVCBmcm9tIFwiLi90ZXh0XCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLFxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5jb25zdCBtaWRkbGUgPSBuZXcgVih3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuXG5sZXQgbm9kZXMgPSBbXTtcbmxldCB0ZXh0Tm9kZXMgPSBbXTtcblxuLy8gTGluZWFyIGludGVycG9sYXRpb25cbmZ1bmN0aW9uIGxlcnAobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuIG1heCAqIHYgKyBtaW4gKiAoMSAtIHYpO1xufVxuXG4vLyBtaW4gbWF4IG5vcm1hbGl6YXRpb25cbmZ1bmN0aW9uIHJlc2NhbGUobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuICh2IC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5vZGVzKG4gPSA1MCkge1xuICBub2RlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShtaWRkbGUueCwgbWlkZGxlLnksIDQpO1xuXG4gICAgbm9kZS5wb3NpdGlvbi5yYW5kb21pemUobGVycCgwLCB3aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkpKS5hZGQobWlkZGxlKTtcbiAgICBub2RlLnZlbG9jaXR5LnJhbmRvbWl6ZShsZXJwKDAuMDUsIDAuMSwgTWF0aC5yYW5kb20oKSkpO1xuXG4gICAgbm9kZXMucHVzaChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRleHROb2RlcygpIHtcbiAgdGV4dE5vZGVzID0gW107XG5cbiAgbGV0IHRleHRTaXplID0gMTA7XG4gIGxldCB0ZXh0Tm9kZVBvcyA9IFQudGV4dFBpeGVscztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGV4dE5vZGVQb3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgbGV0IHR4ID0gdGV4dE5vZGVQb3NbaV0ucG9zaXRpb25YICogdGV4dFNpemU7XG4gICAgbGV0IHR5ID0gdGV4dE5vZGVQb3NbaV0ucG9zaXRpb25ZICogdGV4dFNpemU7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZSh0eCwgdHksIDIpO1xuXG4gICAgdGV4dE5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZHJhd0xpbmUocG9zMSwgcG9zMiwgY29sb3IpIHtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICBjdHgubGluZVRvKHBvczIueCwgcG9zMi55KTtcbiAgY3R4LnN0cm9rZSgpO1xufVxuXG4vLyBtYXgsIG1pbiBkaXN0YW5jZSB0aHJlc2hvbGQgZm9yIHN0YWdlIGNvbm5lY3Rpb25zXG5jb25zdCBtYXhEaXN0YW5jZSA9IDEwMDtcbmNvbnN0IG1pbkRpc3RhbmNlID0gMzA7XG5cbi8vIGRyYXcgc3RhZ2Ugbm9kZSBjb25uZWN0aW9uc1xuZnVuY3Rpb24gZHJhd0Nvbm5lY3Rpb24obm9kZTEsIG5vZGUyLCBkaXN0YW5jZSkge1xuICAvLyBkbyBub3RoaW5nLCBpZiBkaXNwbGFjZW1lbnQgdmVjdG9yIGlzIGxvbmdlciB0aGFuIG1heERpc3RhbmNlXG4gIGlmIChkaXN0YW5jZSA+PSBtYXhEaXN0YW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHNjYWxlIGNvbG9yIG9wYWNpdHkoYWxwaGEpIGRlcGVuZGluZyBvbiBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVzXG4gIGxldCBhbHBoYSA9IHJlc2NhbGUobWF4RGlzdGFuY2UsIG1pbkRpc3RhbmNlLCBkaXN0YW5jZSk7XG4gIGxldCBjb2xvciA9IGBoc2xhKDE4MSwgNzklLCA1NCUsICR7YWxwaGF9KWA7XG5cbiAgZHJhd0xpbmUobm9kZTEucG9zaXRpb24sIG5vZGUyLnBvc2l0aW9uLCBjb2xvcik7XG59XG5cbi8vIGRyYXcgdGV4dCBub2RlIGNvbm5lY3Rpb25zXG5mdW5jdGlvbiBkcmF3VGV4dENvbm5lY3Rpb24obm9kZTEsIG5vZGUyLCBkaXN0YW5jZSkge1xuICBpZiAoZGlzdGFuY2UgPj0gMjApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYWxwaGEgPSByZXNjYWxlKDIwLCAxMCwgZGlzdGFuY2UpO1xuICBsZXQgY29sb3IgPSBgaHNsYSgxODEsIDc5JSwgNTQlLCAke2FscGhhfSlgO1xuXG4gIGRyYXdMaW5lKG5vZGUxLnBvc2l0aW9uLCBub2RlMi5wb3NpdGlvbiwgY29sb3IpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q29ubmVjdGlvbnMobm9kZVR5cGUpIHtcbiAgbGV0IGRpc3BsYWNlbWVudDtcbiAgbGV0IGRpc3RhbmNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZVR5cGUubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBub2RlVHlwZS5sZW5ndGg7IGorKykge1xuICAgICAgLy8gc2hvcnRlc3QgcGF0aCBiZXR3ZWVuIHR3byBub2Rlc1xuICAgICAgZGlzcGxhY2VtZW50ID0gbm9kZVR5cGVbal0ucG9zaXRpb24ubWludXMobm9kZVR5cGVbaV0ucG9zaXRpb24pO1xuICAgICAgLy8gbGVuZ3RoIGJldHdlZW4gdHdvIG5vZGVzXG4gICAgICBkaXN0YW5jZSA9IGRpc3BsYWNlbWVudC5tYWduaXR1ZGUoKTtcblxuICAgICAgLy8gY2hlY2sgaWYgcGFzc2VkIGluIHR5cGUgb2Ygbm9kZXMgYXJlIHN0YWdlTm9kZXMgb3IgdGV4dE5vZGVzXG4gICAgICBpZiAobm9kZVR5cGUgPT09IHRleHROb2Rlcykge1xuICAgICAgICBkcmF3VGV4dENvbm5lY3Rpb24obm9kZVR5cGVbaV0sIG5vZGVUeXBlW2pdLCBkaXN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmF3Q29ubmVjdGlvbihub2RlVHlwZVtpXSwgbm9kZVR5cGVbal0sIGRpc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuLy8gZWFjaCBmcmFtZSdzIGFjdGlvbnNcbmZ1bmN0aW9uIGZyYW1lKGRlbHRhVCkge1xuICBkcmF3Q29ubmVjdGlvbnMobm9kZXMpO1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKGRlbHRhVCk7XG4gICAgbm9kZS5kcmF3KCk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXh0RnJhbWUoKSB7XG4gIGRyYXdDb25uZWN0aW9ucyh0ZXh0Tm9kZXMpO1xuICBmb3IgKGxldCB0ZXh0Tm9kZSBvZiB0ZXh0Tm9kZXMpIHtcbiAgICB0ZXh0Tm9kZS5kcmF3KCk7XG4gIH1cbn1cblxuLy8gQkVHSU4gUE9MWUZJTExcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RUaW1lID0gMDtcbiAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gIH1cblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbn0pKCk7XG4vLyBFTkQgUE9MWUZJTExcblxuLy8gcmVuZGVyIE5vZGVzXG4vLyBrZWVwIHRyYWNrIG9mIGRlbHRhVGltZSBldmVyeSBmcmFtZVxubGV0IHByZXZUaW1lID0gMDtcbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBkZWx0YVQgPSBub3cgLSBwcmV2VGltZTtcbiAgcHJldlRpbWUgPSBub3c7XG5cbiAgY2xlYXIoKTtcbiAgZnJhbWUoZGVsdGFUKTtcbiAgdGV4dEZyYW1lKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJOb2Rlcyk7XG59XG5yZW5kZXJOb2RlcygpO1xuXG5wb3B1bGF0ZU5vZGVzKCk7XG5ULmdldFRleHREYXRhKCk7XG5wb3B1bGF0ZVRleHROb2RlcygpO1xuIiwiaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHIgPSAzKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByO1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVih4LCB5KTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFYoMC4xLCAwLjIpO1xuICAgIHRoaXMuaW5pdGlhbFggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgdGhpcy5pbml0aWFsWSA9IHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhVCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyhkZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIC8vIGlmIG91dHNpZGUgb2YgYm91bmRhcnksIGluc2VydCBiYWNrIGludG8gdGhlIGJveCBhdCB0aGUgYm91bmRhcnlcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFRvcCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIiksXG4gIGN0eCA9IHRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9ICh0ZXh0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGgpO1xuY29uc3QgaGVpZ2h0ID0gKHRleHQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblxuZXhwb3J0IGxldCB0ZXh0UGl4ZWxzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0KCkge1xuICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICBjdHguZm9udCA9IFwiYm9sZCAzMHB4IHNhbnMtc2VyaWZcIjtcbiAgY3R4LmZpbGxUZXh0KFwiQWVpb3VcIiwgNSwgMjUpO1xuXG4gIC8vIGN0eC5zdHJva2VSZWN0KDAsIDAsIDQwMCwgMzApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dERhdGEoKSB7XG4gIGxldCB0ZXh0SW1nRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgNDAwLCAzMCk7XG4gIC8vIGV2ZXJ5IHNpbmdsZSBwaXhlbCBvZiBpbWFnZSBkYXRhXG4gIGxldCBwaXhEYXRhID0gdGV4dEltZ0RhdGEuZGF0YTtcblxuICAvLyBJdGVyYXRlIHRocm91Z2ggZXZlcnkgcGl4ZWwgY29sbGVjdGVkIGluc2lkZSBDbGFtcGVkQXJyYXkgKHRleHRJbWdEYXRhLmRhdGEpXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgdGV4dEltZ0RhdGEuaGVpZ2h0OyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRleHRJbWdEYXRhLndpZHRoOyB4KyspIHtcbiAgICAgIC8vIHB1c2ggeCx5IGNvb3JkIHRvIHRleHRQaXhlbHMsIGlmIGFscGhhIHZhbHVlIG9mIHBpeGVsRGF0YSBpcyBncmVhdGVyIHRoYW4gMTI4XG4gICAgICBpZiAocGl4RGF0YVt5ICogNCAqIHRleHRJbWdEYXRhLndpZHRoICsgeCAqIDQgKyAzXSA+IDEyOCkge1xuICAgICAgICB0ZXh0UGl4ZWxzLnB1c2goeyBwb3NpdGlvblg6IHgsIHBvc2l0aW9uWTogeSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2codGV4dEltZ0RhdGEpO1xuICBjb25zb2xlLmxvZyh0ZXh0UGl4ZWxzKTtcbn1cblxuZ2V0VGV4dCgpO1xuIiwiY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZHVwKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGFkZChvdGhlcikge1xuICAgIHRoaXMueCArPSBvdGhlci54O1xuICAgIHRoaXMueSArPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICB0aGlzLnggLT0gb3RoZXIueDtcbiAgICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1pbnVzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkuc3VidHJhY3Qob3RoZXIpO1xuICB9XG5cbiAgbXVsdGlwbHkobnVtKSB7XG4gICAgdGhpcy54ICo9IG51bTtcbiAgICB0aGlzLnkgKj0gbnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGltZXMobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIG1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBub3JtYWxpemUobnVtKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLm11bHRpcGx5KG51bSAvIGxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYWduaXR1ZGUobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgdGhpcy55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmFuZG9taXplKG4gPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKG4pLnNldEFuZ2xlKDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==