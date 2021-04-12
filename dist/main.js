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



var stage = document.getElementById("stage"),
    text = document.getElementById("text"),
    textInput = document.getElementById("textInput"),
    ctxStage = stage.getContext("2d"),
    ctxText = text.getContext("2d");
var width = stage.width = window.innerWidth;
var height = stage.height = window.innerHeight;
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
  ctxStage.strokeStyle = color;
  ctxStage.beginPath();
  ctxStage.lineWidth = 2;
  ctxStage.moveTo(pos1.x, pos1.y);
  ctxStage.lineTo(pos2.x, pos2.y);
  ctxStage.stroke();
} // draw stage node connections


function drawConnection(node1, node2, distance) {
  // max, min distance threshold for connections
  var maxDistance = 150;
  var minDistance = 30; // do nothing, if displacement vector is longer than maxDistance

  if (distance >= maxDistance) {
    return;
  } // scale color opacity(alpha) depending on distance between nodes


  var alpha = rescale(maxDistance, minDistance, distance);
  var color = "hsla(181, 79%, 54%, ".concat(alpha, ")");
  drawLine(node1.position, node2.position, color);
} // draw text node connections


function drawTextConnection(node1, node2, distance) {
  var maxDistance = 20;
  var minDistance = 5;

  if (distance >= maxDistance) {
    return;
  }

  var alpha = rescale(maxDistance, minDistance, distance);
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
  ctxStage.clearRect(0, 0, stage.width, stage.height);
  ctxText.clearRect(0, 0, stage.width, stage.height);
} // each frame's actions


function frame(deltaT) {
  drawConnections(nodes);

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var node = _nodes[_i];
    node.move(deltaT);
    node.draw(ctxStage);
    node.bounce();
  }
}

function textFrame() {
  drawConnections(textNodes);

  for (var _i2 = 0, _textNodes = textNodes; _i2 < _textNodes.length; _i2++) {
    var textNode = _textNodes[_i2];
    textNode.draw(ctxText);
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
  textFrame();
  frame(deltaT);
  requestAnimationFrame(renderNodes);
}

function initText() {
  clear();
  _text__WEBPACK_IMPORTED_MODULE_2__["getText"]();
  _text__WEBPACK_IMPORTED_MODULE_2__["getTextData"]();
  populateTextNodes();
} // EVENT LISTENERS


textInput.addEventListener("keyup", initText);
populateNodes();
renderNodes();

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


var stage = document.getElementById("stage");

var Node = /*#__PURE__*/function () {
  function Node(x, y) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    _classCallCheck(this, Node);

    this.radius = r;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y + 50); // offsets text on y-axis by +50

    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.1, 0.2);
    this.initialX = this.position.x;
    this.initialY = this.position.y;
  }

  _createClass(Node, [{
    key: "draw",
    value: function draw(ctxType) {
      ctxType.fillStyle = "rgb(255,56,100)";
      ctxType.beginPath();
      ctxType.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctxType.closePath();
      ctxType.fill();
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
      if (this.position.y >= stage.height - this.radius) {
        this.velocity.y = -this.velocity.y; // if outside of boundary, insert back into the box at the boundary

        this.position.y = stage.height - this.radius;
      } // Right edge collision


      if (this.position.x >= stage.width - this.radius) {
        this.velocity.x = -this.velocity.x;
        this.position.x = stage.width - this.radius;
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
    textInput = document.getElementById("textInput"),
    ctx = text.getContext("2d");
var width = text.width = window.innerWidth;
var height = text.height = window.innerHeight;
var textPixels = [];
function getText() {
  ctx.textAlign = "center";
  ctx.font = "bold ".concat(width / 60, "px sans-serif");
  ctx.fillText("".concat(textInput.value), 60, 30);
}
function getTextData() {
  textPixels = [];
  var textImgData = ctx.getImageData(0, 0, width, 40); // every single pixel of image data

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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJzdGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0IiwidGV4dElucHV0IiwiY3R4U3RhZ2UiLCJnZXRDb250ZXh0IiwiY3R4VGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibWlkZGxlIiwiViIsIm5vZGVzIiwidGV4dE5vZGVzIiwibGVycCIsIm1pbiIsIm1heCIsInYiLCJyZXNjYWxlIiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsInBvcHVsYXRlVGV4dE5vZGVzIiwidGV4dFNpemUiLCJ0ZXh0Tm9kZVBvcyIsIlQiLCJsZW5ndGgiLCJ0eCIsInBvc2l0aW9uWCIsInR5IiwicG9zaXRpb25ZIiwiZHJhd0xpbmUiLCJwb3MxIiwicG9zMiIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3Q29ubmVjdGlvbiIsIm5vZGUxIiwibm9kZTIiLCJkaXN0YW5jZSIsIm1heERpc3RhbmNlIiwibWluRGlzdGFuY2UiLCJhbHBoYSIsImRyYXdUZXh0Q29ubmVjdGlvbiIsImRyYXdDb25uZWN0aW9ucyIsIm5vZGVUeXBlIiwiZGlzcGxhY2VtZW50IiwiaiIsIm1pbnVzIiwibWFnbml0dWRlIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJmcmFtZSIsImRlbHRhVCIsIm1vdmUiLCJkcmF3IiwiYm91bmNlIiwidGV4dEZyYW1lIiwidGV4dE5vZGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicHJldlRpbWUiLCJyZW5kZXJOb2RlcyIsIm5vdyIsInBlcmZvcm1hbmNlIiwiaW5pdFRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiciIsInJhZGl1cyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJjdHhUeXBlIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwidGltZXMiLCJjdHgiLCJ0ZXh0UGl4ZWxzIiwiZ2V0VGV4dCIsInRleHRBbGlnbiIsImZvbnQiLCJmaWxsVGV4dCIsInZhbHVlIiwiZ2V0VGV4dERhdGEiLCJ0ZXh0SW1nRGF0YSIsImdldEltYWdlRGF0YSIsInBpeERhdGEiLCJkYXRhIiwiVmVjdG9yIiwib3RoZXIiLCJkdXAiLCJzdWJ0cmFjdCIsIm51bSIsIm11bHRpcGx5Iiwic3FydCIsIm5vcm1hbGl6ZSIsImFuZ2xlIiwiY29zIiwic2luIiwic2V0QW5nbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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QSxhQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNEOztBQUNELFdBQUtpRyxRQUFMLENBQWNELEdBQUcsR0FBR3BGLE1BQXBCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQUVELHNCQUFhb0YsR0FBYixFQUFrQjtBQUNoQixhQUFPLEtBQUtHLFNBQUwsR0FBaUJGLFFBQWpCLENBQTBCRCxHQUExQixDQUFQO0FBQ0Q7OztXQUVELGtCQUFTSSxLQUFULEVBQWdCO0FBQ2QsVUFBSXhGLE1BQU0sR0FBRyxLQUFLNEIsU0FBTCxFQUFiOztBQUNBLFVBQUk1QixNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQkEsY0FBTSxHQUFHLENBQVQ7QUFDQSxhQUFLYixDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBQ0QsV0FBS0QsQ0FBTCxHQUFTYSxNQUFNLEdBQUdULElBQUksQ0FBQ2tHLEdBQUwsQ0FBU0QsS0FBVCxDQUFsQjtBQUNBLFdBQUtwRyxDQUFMLEdBQVNZLE1BQU0sR0FBR1QsSUFBSSxDQUFDbUcsR0FBTCxDQUFTRixLQUFULENBQWxCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQUVELHFCQUFpQjtBQUFBLFVBQVB6RyxDQUFPLHVFQUFILENBQUc7QUFDZixhQUFPLEtBQUt3RyxTQUFMLENBQWV4RyxDQUFmLEVBQWtCNEcsUUFBbEIsQ0FBMkIsSUFBSXBHLElBQUksQ0FBQ3lFLEVBQVQsR0FBY3pFLElBQUksQ0FBQ0MsTUFBTCxFQUF6QyxDQUFQO0FBQ0Q7Ozs7OztBQUdZd0YscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgKiBhcyBUIGZyb20gXCIuL3RleHRcIjtcblxuY29uc3Qgc3RhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YWdlXCIpLFxuICB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpLFxuICB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRJbnB1dFwiKSxcbiAgY3R4U3RhZ2UgPSBzdGFnZS5nZXRDb250ZXh0KFwiMmRcIiksXG4gIGN0eFRleHQgPSB0ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3Qgd2lkdGggPSAoc3RhZ2Uud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoc3RhZ2UuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcbmNvbnN0IG1pZGRsZSA9IG5ldyBWKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG5cbmxldCBub2RlcyA9IFtdO1xubGV0IHRleHROb2RlcyA9IFtdO1xuXG4vLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuZnVuY3Rpb24gbGVycChtaW4sIG1heCwgdikge1xuICByZXR1cm4gbWF4ICogdiArIG1pbiAqICgxIC0gdik7XG59XG5cbi8vIG1pbiBtYXggbm9ybWFsaXphdGlvblxuZnVuY3Rpb24gcmVzY2FsZShtaW4sIG1heCwgdikge1xuICByZXR1cm4gKHYgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm9kZXMobiA9IDUwKSB7XG4gIG5vZGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKG1pZGRsZS54LCBtaWRkbGUueSwgNCk7XG5cbiAgICBub2RlLnBvc2l0aW9uLnJhbmRvbWl6ZShsZXJwKDAsIHdpZHRoIC8gMiwgTWF0aC5yYW5kb20oKSkpLmFkZChtaWRkbGUpO1xuICAgIG5vZGUudmVsb2NpdHkucmFuZG9taXplKGxlcnAoMC4wNSwgMC4xLCBNYXRoLnJhbmRvbSgpKSk7XG5cbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGV4dE5vZGVzKCkge1xuICB0ZXh0Tm9kZXMgPSBbXTtcblxuICBsZXQgdGV4dFNpemUgPSAxMDtcbiAgbGV0IHRleHROb2RlUG9zID0gVC50ZXh0UGl4ZWxzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSB0ZXh0Tm9kZVBvcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBsZXQgdHggPSB0ZXh0Tm9kZVBvc1tpXS5wb3NpdGlvblggKiB0ZXh0U2l6ZTtcbiAgICBsZXQgdHkgPSB0ZXh0Tm9kZVBvc1tpXS5wb3NpdGlvblkgKiB0ZXh0U2l6ZTtcbiAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKHR4LCB0eSwgMik7XG5cbiAgICB0ZXh0Tm9kZXMucHVzaChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TGluZShwb3MxLCBwb3MyLCBjb2xvcikge1xuICBjdHhTdGFnZS5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHhTdGFnZS5iZWdpblBhdGgoKTtcbiAgY3R4U3RhZ2UubGluZVdpZHRoID0gMjtcbiAgY3R4U3RhZ2UubW92ZVRvKHBvczEueCwgcG9zMS55KTtcbiAgY3R4U3RhZ2UubGluZVRvKHBvczIueCwgcG9zMi55KTtcbiAgY3R4U3RhZ2Uuc3Ryb2tlKCk7XG59XG5cbi8vIGRyYXcgc3RhZ2Ugbm9kZSBjb25uZWN0aW9uc1xuZnVuY3Rpb24gZHJhd0Nvbm5lY3Rpb24obm9kZTEsIG5vZGUyLCBkaXN0YW5jZSkge1xuICAvLyBtYXgsIG1pbiBkaXN0YW5jZSB0aHJlc2hvbGQgZm9yIGNvbm5lY3Rpb25zXG4gIGNvbnN0IG1heERpc3RhbmNlID0gMTUwO1xuICBjb25zdCBtaW5EaXN0YW5jZSA9IDMwO1xuXG4gIC8vIGRvIG5vdGhpbmcsIGlmIGRpc3BsYWNlbWVudCB2ZWN0b3IgaXMgbG9uZ2VyIHRoYW4gbWF4RGlzdGFuY2VcbiAgaWYgKGRpc3RhbmNlID49IG1heERpc3RhbmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc2NhbGUgY29sb3Igb3BhY2l0eShhbHBoYSkgZGVwZW5kaW5nIG9uIGRpc3RhbmNlIGJldHdlZW4gbm9kZXNcbiAgbGV0IGFscGhhID0gcmVzY2FsZShtYXhEaXN0YW5jZSwgbWluRGlzdGFuY2UsIGRpc3RhbmNlKTtcbiAgbGV0IGNvbG9yID0gYGhzbGEoMTgxLCA3OSUsIDU0JSwgJHthbHBoYX0pYDtcblxuICBkcmF3TGluZShub2RlMS5wb3NpdGlvbiwgbm9kZTIucG9zaXRpb24sIGNvbG9yKTtcbn1cblxuLy8gZHJhdyB0ZXh0IG5vZGUgY29ubmVjdGlvbnNcbmZ1bmN0aW9uIGRyYXdUZXh0Q29ubmVjdGlvbihub2RlMSwgbm9kZTIsIGRpc3RhbmNlKSB7XG4gIGNvbnN0IG1heERpc3RhbmNlID0gMjA7XG4gIGNvbnN0IG1pbkRpc3RhbmNlID0gNTtcblxuICBpZiAoZGlzdGFuY2UgPj0gbWF4RGlzdGFuY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYWxwaGEgPSByZXNjYWxlKG1heERpc3RhbmNlLCBtaW5EaXN0YW5jZSwgZGlzdGFuY2UpO1xuICBsZXQgY29sb3IgPSBgaHNsYSgxODEsIDc5JSwgNTQlLCAke2FscGhhfSlgO1xuXG4gIGRyYXdMaW5lKG5vZGUxLnBvc2l0aW9uLCBub2RlMi5wb3NpdGlvbiwgY29sb3IpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q29ubmVjdGlvbnMobm9kZVR5cGUpIHtcbiAgbGV0IGRpc3BsYWNlbWVudDtcbiAgbGV0IGRpc3RhbmNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZVR5cGUubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBub2RlVHlwZS5sZW5ndGg7IGorKykge1xuICAgICAgLy8gc2hvcnRlc3QgcGF0aCBiZXR3ZWVuIHR3byBub2Rlc1xuICAgICAgZGlzcGxhY2VtZW50ID0gbm9kZVR5cGVbal0ucG9zaXRpb24ubWludXMobm9kZVR5cGVbaV0ucG9zaXRpb24pO1xuICAgICAgLy8gbGVuZ3RoIGJldHdlZW4gdHdvIG5vZGVzXG4gICAgICBkaXN0YW5jZSA9IGRpc3BsYWNlbWVudC5tYWduaXR1ZGUoKTtcblxuICAgICAgLy8gY2hlY2sgaWYgcGFzc2VkIGluIHR5cGUgb2Ygbm9kZXMgYXJlIHN0YWdlTm9kZXMgb3IgdGV4dE5vZGVzXG4gICAgICBpZiAobm9kZVR5cGUgPT09IHRleHROb2Rlcykge1xuICAgICAgICBkcmF3VGV4dENvbm5lY3Rpb24obm9kZVR5cGVbaV0sIG5vZGVUeXBlW2pdLCBkaXN0YW5jZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmF3Q29ubmVjdGlvbihub2RlVHlwZVtpXSwgbm9kZVR5cGVbal0sIGRpc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGN0eFN0YWdlLmNsZWFyUmVjdCgwLCAwLCBzdGFnZS53aWR0aCwgc3RhZ2UuaGVpZ2h0KTtcbiAgY3R4VGV4dC5jbGVhclJlY3QoMCwgMCwgc3RhZ2Uud2lkdGgsIHN0YWdlLmhlaWdodCk7XG59XG5cbi8vIGVhY2ggZnJhbWUncyBhY3Rpb25zXG5mdW5jdGlvbiBmcmFtZShkZWx0YVQpIHtcbiAgZHJhd0Nvbm5lY3Rpb25zKG5vZGVzKTtcbiAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGUubW92ZShkZWx0YVQpO1xuICAgIG5vZGUuZHJhdyhjdHhTdGFnZSk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXh0RnJhbWUoKSB7XG4gIGRyYXdDb25uZWN0aW9ucyh0ZXh0Tm9kZXMpO1xuICBmb3IgKGxldCB0ZXh0Tm9kZSBvZiB0ZXh0Tm9kZXMpIHtcbiAgICB0ZXh0Tm9kZS5kcmF3KGN0eFRleHQpO1xuICB9XG59XG5cbi8vIEJFR0lOIFBPTFlGSUxMXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gTUlUIGxpY2Vuc2VcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0VGltZSA9IDA7XG4gIHZhciB2ZW5kb3JzID0gW1wibXNcIiwgXCJtb3pcIiwgXCJ3ZWJraXRcIiwgXCJvXCJdO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59KSgpO1xuLy8gRU5EIFBPTFlGSUxMXG5cbi8vIHJlbmRlciBOb2Rlc1xuLy8ga2VlcCB0cmFjayBvZiBkZWx0YVRpbWUgZXZlcnkgZnJhbWVcbmxldCBwcmV2VGltZSA9IDA7XG5mdW5jdGlvbiByZW5kZXJOb2RlcygpIHtcbiAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBsZXQgZGVsdGFUID0gbm93IC0gcHJldlRpbWU7XG4gIHByZXZUaW1lID0gbm93O1xuXG4gIGNsZWFyKCk7XG4gIHRleHRGcmFtZSgpO1xuICBmcmFtZShkZWx0YVQpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBpbml0VGV4dCgpIHtcbiAgY2xlYXIoKTtcbiAgVC5nZXRUZXh0KCk7XG4gIFQuZ2V0VGV4dERhdGEoKTtcbiAgcG9wdWxhdGVUZXh0Tm9kZXMoKTtcbn1cblxuLy8gRVZFTlQgTElTVEVORVJTXG50ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGluaXRUZXh0KTtcblxucG9wdWxhdGVOb2RlcygpO1xucmVuZGVyTm9kZXMoKTtcbiIsImltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIik7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByID0gMykge1xuICAgIHRoaXMucmFkaXVzID0gcjtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSArIDUwKTsgLy8gb2Zmc2V0cyB0ZXh0IG9uIHktYXhpcyBieSArNTBcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFYoMC4xLCAwLjIpO1xuICAgIHRoaXMuaW5pdGlhbFggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgdGhpcy5pbml0aWFsWSA9IHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIGRyYXcoY3R4VHlwZSkge1xuICAgIGN0eFR5cGUuZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDU2LDEwMClcIjtcbiAgICBjdHhUeXBlLmJlZ2luUGF0aCgpO1xuICAgIGN0eFR5cGUuYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eFR5cGUuY2xvc2VQYXRoKCk7XG4gICAgY3R4VHlwZS5maWxsKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhVCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyhkZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IHN0YWdlLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgICAgLy8gaWYgb3V0c2lkZSBvZiBib3VuZGFyeSwgaW5zZXJ0IGJhY2sgaW50byB0aGUgYm94IGF0IHRoZSBib3VuZGFyeVxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gc3RhZ2UuaGVpZ2h0IC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFJpZ2h0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBzdGFnZS53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gc3RhZ2Uud2lkdGggLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gVG9wIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBMZWZ0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiY29uc3QgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKSxcbiAgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0SW5wdXRcIiksXG4gIGN0eCA9IHRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9ICh0ZXh0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGgpO1xuY29uc3QgaGVpZ2h0ID0gKHRleHQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblxuZXhwb3J0IGxldCB0ZXh0UGl4ZWxzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0KCkge1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAke3dpZHRoIC8gNjB9cHggc2Fucy1zZXJpZmA7XG4gIGN0eC5maWxsVGV4dChgJHt0ZXh0SW5wdXQudmFsdWV9YCwgNjAsIDMwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHREYXRhKCkge1xuICB0ZXh0UGl4ZWxzID0gW107XG5cbiAgbGV0IHRleHRJbWdEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgNDApO1xuICAvLyBldmVyeSBzaW5nbGUgcGl4ZWwgb2YgaW1hZ2UgZGF0YVxuICBsZXQgcGl4RGF0YSA9IHRleHRJbWdEYXRhLmRhdGE7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGV2ZXJ5IHBpeGVsIGNvbGxlY3RlZCBpbnNpZGUgQ2xhbXBlZEFycmF5ICh0ZXh0SW1nRGF0YS5kYXRhKVxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRleHRJbWdEYXRhLmhlaWdodDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0ZXh0SW1nRGF0YS53aWR0aDsgeCsrKSB7XG4gICAgICAvLyBwdXNoIHgseSBjb29yZCB0byB0ZXh0UGl4ZWxzLCBpZiBhbHBoYSB2YWx1ZSBvZiBwaXhlbERhdGEgaXMgZ3JlYXRlciB0aGFuIDEyOFxuICAgICAgaWYgKHBpeERhdGFbeSAqIDQgKiB0ZXh0SW1nRGF0YS53aWR0aCArIHggKiA0ICsgM10gPiAxMjgpIHtcbiAgICAgICAgdGV4dFBpeGVscy5wdXNoKHsgcG9zaXRpb25YOiB4LCBwb3NpdGlvblk6IHkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkdXAoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgYWRkKG90aGVyKSB7XG4gICAgdGhpcy54ICs9IG90aGVyLng7XG4gICAgdGhpcy55ICs9IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJ0cmFjdChvdGhlcikge1xuICAgIHRoaXMueCAtPSBvdGhlci54O1xuICAgIHRoaXMueSAtPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWludXMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5zdWJ0cmFjdChvdGhlcik7XG4gIH1cblxuICBtdWx0aXBseShudW0pIHtcbiAgICB0aGlzLnggKj0gbnVtO1xuICAgIHRoaXMueSAqPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aW1lcyhudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgbWFnbml0dWRlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZShudW0pIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMubXVsdGlwbHkobnVtIC8gbGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1hZ25pdHVkZShudW0pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUpIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICB0aGlzLnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByYW5kb21pemUobiA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUobikuc2V0QW5nbGUoMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9