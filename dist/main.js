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
console.log(textNodes);
console.log(_text__WEBPACK_IMPORTED_MODULE_2__["textPixels"]);

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
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
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
  ctx.font = "bold 30px sans-serif";
  ctx.fillText("".concat(textInput.value), 5, 20);
}
function getTextData() {
  textPixels = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJzdGFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0IiwidGV4dElucHV0IiwiY3R4U3RhZ2UiLCJnZXRDb250ZXh0IiwiY3R4VGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibWlkZGxlIiwiViIsIm5vZGVzIiwidGV4dE5vZGVzIiwibGVycCIsIm1pbiIsIm1heCIsInYiLCJyZXNjYWxlIiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsInBvcHVsYXRlVGV4dE5vZGVzIiwidGV4dFNpemUiLCJ0ZXh0Tm9kZVBvcyIsIlQiLCJsZW5ndGgiLCJ0eCIsInBvc2l0aW9uWCIsInR5IiwicG9zaXRpb25ZIiwiZHJhd0xpbmUiLCJwb3MxIiwicG9zMiIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3Q29ubmVjdGlvbiIsIm5vZGUxIiwibm9kZTIiLCJkaXN0YW5jZSIsIm1heERpc3RhbmNlIiwibWluRGlzdGFuY2UiLCJhbHBoYSIsImRyYXdUZXh0Q29ubmVjdGlvbiIsImRyYXdDb25uZWN0aW9ucyIsIm5vZGVUeXBlIiwiZGlzcGxhY2VtZW50IiwiaiIsIm1pbnVzIiwibWFnbml0dWRlIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJmcmFtZSIsImRlbHRhVCIsIm1vdmUiLCJkcmF3IiwiYm91bmNlIiwidGV4dEZyYW1lIiwidGV4dE5vZGUiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicHJldlRpbWUiLCJyZW5kZXJOb2RlcyIsIm5vdyIsInBlcmZvcm1hbmNlIiwiaW5pdFRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInIiLCJyYWRpdXMiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiY3R4VHlwZSIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInRpbWVzIiwiY3R4IiwidGV4dFBpeGVscyIsImdldFRleHQiLCJmb250IiwiZmlsbFRleHQiLCJ2YWx1ZSIsImdldFRleHREYXRhIiwidGV4dEltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJwaXhEYXRhIiwiZGF0YSIsIlZlY3RvciIsIm90aGVyIiwiZHVwIiwic3VidHJhY3QiLCJudW0iLCJtdWx0aXBseSIsInNxcnQiLCJub3JtYWxpemUiLCJhbmdsZSIsImNvcyIsInNpbiIsInNldEFuZ2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFD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LGFBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBQ0QsV0FBS2tHLFFBQUwsQ0FBY0QsR0FBRyxHQUFHckYsTUFBcEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsc0JBQWFxRixHQUFiLEVBQWtCO0FBQ2hCLGFBQU8sS0FBS0csU0FBTCxHQUFpQkYsUUFBakIsQ0FBMEJELEdBQTFCLENBQVA7QUFDRDs7O1dBRUQsa0JBQVNJLEtBQVQsRUFBZ0I7QUFDZCxVQUFJekYsTUFBTSxHQUFHLEtBQUs0QixTQUFMLEVBQWI7O0FBQ0EsVUFBSTVCLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCQSxjQUFNLEdBQUcsQ0FBVDtBQUNBLGFBQUtiLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDRDs7QUFDRCxXQUFLRCxDQUFMLEdBQVNhLE1BQU0sR0FBR1QsSUFBSSxDQUFDbUcsR0FBTCxDQUFTRCxLQUFULENBQWxCO0FBQ0EsV0FBS3JHLENBQUwsR0FBU1ksTUFBTSxHQUFHVCxJQUFJLENBQUNvRyxHQUFMLENBQVNGLEtBQVQsQ0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQscUJBQWlCO0FBQUEsVUFBUDFHLENBQU8sdUVBQUgsQ0FBRztBQUNmLGFBQU8sS0FBS3lHLFNBQUwsQ0FBZXpHLENBQWYsRUFBa0I2RyxRQUFsQixDQUEyQixJQUFJckcsSUFBSSxDQUFDMkUsRUFBVCxHQUFjM0UsSUFBSSxDQUFDQyxNQUFMLEVBQXpDLENBQVA7QUFDRDs7Ozs7O0FBR1l5RixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FudmFzXCI7XG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcbmltcG9ydCAqIGFzIFQgZnJvbSBcIi4vdGV4dFwiO1xuXG5jb25zdCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIiksXG4gIHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIiksXG4gIHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpLFxuICBjdHhTdGFnZSA9IHN0YWdlLmdldENvbnRleHQoXCIyZFwiKSxcbiAgY3R4VGV4dCA9IHRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChzdGFnZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcbmNvbnN0IGhlaWdodCA9IChzdGFnZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuY29uc3QgbWlkZGxlID0gbmV3IFYod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcblxubGV0IG5vZGVzID0gW107XG5sZXQgdGV4dE5vZGVzID0gW107XG5cbi8vIExpbmVhciBpbnRlcnBvbGF0aW9uXG5mdW5jdGlvbiBsZXJwKG1pbiwgbWF4LCB2KSB7XG4gIHJldHVybiBtYXggKiB2ICsgbWluICogKDEgLSB2KTtcbn1cblxuLy8gbWluIG1heCBub3JtYWxpemF0aW9uXG5mdW5jdGlvbiByZXNjYWxlKG1pbiwgbWF4LCB2KSB7XG4gIHJldHVybiAodiAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOb2RlcyhuID0gNTApIHtcbiAgbm9kZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUobWlkZGxlLngsIG1pZGRsZS55LCA0KTtcblxuICAgIG5vZGUucG9zaXRpb24ucmFuZG9taXplKGxlcnAoMCwgd2lkdGggLyAyLCBNYXRoLnJhbmRvbSgpKSkuYWRkKG1pZGRsZSk7XG4gICAgbm9kZS52ZWxvY2l0eS5yYW5kb21pemUobGVycCgwLjA1LCAwLjEsIE1hdGgucmFuZG9tKCkpKTtcblxuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUZXh0Tm9kZXMoKSB7XG4gIHRleHROb2RlcyA9IFtdO1xuXG4gIGxldCB0ZXh0U2l6ZSA9IDEwO1xuICBsZXQgdGV4dE5vZGVQb3MgPSBULnRleHRQaXhlbHM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHRleHROb2RlUG9zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGxldCB0eCA9IHRleHROb2RlUG9zW2ldLnBvc2l0aW9uWCAqIHRleHRTaXplO1xuICAgIGxldCB0eSA9IHRleHROb2RlUG9zW2ldLnBvc2l0aW9uWSAqIHRleHRTaXplO1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUodHgsIHR5LCAyKTtcblxuICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lKHBvczEsIHBvczIsIGNvbG9yKSB7XG4gIGN0eFN0YWdlLnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eFN0YWdlLmJlZ2luUGF0aCgpO1xuICBjdHhTdGFnZS5saW5lV2lkdGggPSAyO1xuICBjdHhTdGFnZS5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICBjdHhTdGFnZS5saW5lVG8ocG9zMi54LCBwb3MyLnkpO1xuICBjdHhTdGFnZS5zdHJva2UoKTtcbn1cblxuLy8gZHJhdyBzdGFnZSBub2RlIGNvbm5lY3Rpb25zXG5mdW5jdGlvbiBkcmF3Q29ubmVjdGlvbihub2RlMSwgbm9kZTIsIGRpc3RhbmNlKSB7XG4gIC8vIG1heCwgbWluIGRpc3RhbmNlIHRocmVzaG9sZCBmb3IgY29ubmVjdGlvbnNcbiAgY29uc3QgbWF4RGlzdGFuY2UgPSAxNTA7XG4gIGNvbnN0IG1pbkRpc3RhbmNlID0gMzA7XG5cbiAgLy8gZG8gbm90aGluZywgaWYgZGlzcGxhY2VtZW50IHZlY3RvciBpcyBsb25nZXIgdGhhbiBtYXhEaXN0YW5jZVxuICBpZiAoZGlzdGFuY2UgPj0gbWF4RGlzdGFuY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBzY2FsZSBjb2xvciBvcGFjaXR5KGFscGhhKSBkZXBlbmRpbmcgb24gZGlzdGFuY2UgYmV0d2VlbiBub2Rlc1xuICBsZXQgYWxwaGEgPSByZXNjYWxlKG1heERpc3RhbmNlLCBtaW5EaXN0YW5jZSwgZGlzdGFuY2UpO1xuICBsZXQgY29sb3IgPSBgaHNsYSgxODEsIDc5JSwgNTQlLCAke2FscGhhfSlgO1xuXG4gIGRyYXdMaW5lKG5vZGUxLnBvc2l0aW9uLCBub2RlMi5wb3NpdGlvbiwgY29sb3IpO1xufVxuXG4vLyBkcmF3IHRleHQgbm9kZSBjb25uZWN0aW9uc1xuZnVuY3Rpb24gZHJhd1RleHRDb25uZWN0aW9uKG5vZGUxLCBub2RlMiwgZGlzdGFuY2UpIHtcbiAgY29uc3QgbWF4RGlzdGFuY2UgPSAyMDtcbiAgY29uc3QgbWluRGlzdGFuY2UgPSA1O1xuXG4gIGlmIChkaXN0YW5jZSA+PSBtYXhEaXN0YW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBhbHBoYSA9IHJlc2NhbGUobWF4RGlzdGFuY2UsIG1pbkRpc3RhbmNlLCBkaXN0YW5jZSk7XG4gIGxldCBjb2xvciA9IGBoc2xhKDE4MSwgNzklLCA1NCUsICR7YWxwaGF9KWA7XG5cbiAgZHJhd0xpbmUobm9kZTEucG9zaXRpb24sIG5vZGUyLnBvc2l0aW9uLCBjb2xvcik7XG59XG5cbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9ucyhub2RlVHlwZSkge1xuICBsZXQgZGlzcGxhY2VtZW50O1xuICBsZXQgZGlzdGFuY2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlVHlwZS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG5vZGVUeXBlLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBzaG9ydGVzdCBwYXRoIGJldHdlZW4gdHdvIG5vZGVzXG4gICAgICBkaXNwbGFjZW1lbnQgPSBub2RlVHlwZVtqXS5wb3NpdGlvbi5taW51cyhub2RlVHlwZVtpXS5wb3NpdGlvbik7XG4gICAgICAvLyBsZW5ndGggYmV0d2VlbiB0d28gbm9kZXNcbiAgICAgIGRpc3RhbmNlID0gZGlzcGxhY2VtZW50Lm1hZ25pdHVkZSgpO1xuXG4gICAgICAvLyBjaGVjayBpZiBwYXNzZWQgaW4gdHlwZSBvZiBub2RlcyBhcmUgc3RhZ2VOb2RlcyBvciB0ZXh0Tm9kZXNcbiAgICAgIGlmIChub2RlVHlwZSA9PT0gdGV4dE5vZGVzKSB7XG4gICAgICAgIGRyYXdUZXh0Q29ubmVjdGlvbihub2RlVHlwZVtpXSwgbm9kZVR5cGVbal0sIGRpc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYXdDb25uZWN0aW9uKG5vZGVUeXBlW2ldLCBub2RlVHlwZVtqXSwgZGlzdGFuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY3R4U3RhZ2UuY2xlYXJSZWN0KDAsIDAsIHN0YWdlLndpZHRoLCBzdGFnZS5oZWlnaHQpO1xuICBjdHhUZXh0LmNsZWFyUmVjdCgwLCAwLCBzdGFnZS53aWR0aCwgc3RhZ2UuaGVpZ2h0KTtcbn1cblxuLy8gZWFjaCBmcmFtZSdzIGFjdGlvbnNcbmZ1bmN0aW9uIGZyYW1lKGRlbHRhVCkge1xuICBkcmF3Q29ubmVjdGlvbnMobm9kZXMpO1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKGRlbHRhVCk7XG4gICAgbm9kZS5kcmF3KGN0eFN0YWdlKTtcbiAgICBub2RlLmJvdW5jZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRleHRGcmFtZSgpIHtcbiAgZHJhd0Nvbm5lY3Rpb25zKHRleHROb2Rlcyk7XG4gIGZvciAobGV0IHRleHROb2RlIG9mIHRleHROb2Rlcykge1xuICAgIHRleHROb2RlLmRyYXcoY3R4VGV4dCk7XG4gIH1cbn1cblxuLy8gQkVHSU4gUE9MWUZJTExcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RUaW1lID0gMDtcbiAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gIH1cblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbn0pKCk7XG4vLyBFTkQgUE9MWUZJTExcblxuLy8gcmVuZGVyIE5vZGVzXG4vLyBrZWVwIHRyYWNrIG9mIGRlbHRhVGltZSBldmVyeSBmcmFtZVxubGV0IHByZXZUaW1lID0gMDtcbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBkZWx0YVQgPSBub3cgLSBwcmV2VGltZTtcbiAgcHJldlRpbWUgPSBub3c7XG5cbiAgY2xlYXIoKTtcbiAgdGV4dEZyYW1lKCk7XG4gIGZyYW1lKGRlbHRhVCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJOb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0KCkge1xuICBjbGVhcigpO1xuICBULmdldFRleHQoKTtcbiAgVC5nZXRUZXh0RGF0YSgpO1xuICBwb3B1bGF0ZVRleHROb2RlcygpO1xufVxuXG4vLyBFVkVOVCBMSVNURU5FUlNcbnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaW5pdFRleHQpO1xuXG5wb3B1bGF0ZU5vZGVzKCk7XG5yZW5kZXJOb2RlcygpO1xuXG5jb25zb2xlLmxvZyh0ZXh0Tm9kZXMpO1xuY29uc29sZS5sb2coVC50ZXh0UGl4ZWxzKTtcbiIsImltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBzdGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhZ2VcIik7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCByID0gMykge1xuICAgIHRoaXMucmFkaXVzID0gcjtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmluaXRpYWxYID0gdGhpcy5wb3NpdGlvbi54O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB0aGlzLnBvc2l0aW9uLnk7XG4gIH1cblxuICBkcmF3KGN0eFR5cGUpIHtcbiAgICBjdHhUeXBlLmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4VHlwZS5iZWdpblBhdGgoKTtcbiAgICBjdHhUeXBlLmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHhUeXBlLmNsb3NlUGF0aCgpO1xuICAgIGN0eFR5cGUuZmlsbCgpO1xuICB9XG5cbiAgbW92ZShkZWx0YVQpIHtcbiAgICAvLyBwb3NpdGlvbiA9IGluaXRpYWwgcG9zaXRpb24gKyB2ZWxvY2l0eSAqIGRlbHRhVGltZVxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkudGltZXMoZGVsdGFUKSk7XG4gIH1cblxuICBib3VuY2UoKSB7XG4gICAgLy8gQm90dG9tIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA+PSBzdGFnZS5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIC8vIGlmIG91dHNpZGUgb2YgYm91bmRhcnksIGluc2VydCBiYWNrIGludG8gdGhlIGJveCBhdCB0aGUgYm91bmRhcnlcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHN0YWdlLmhlaWdodCAtIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBSaWdodCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gc3RhZ2Uud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHN0YWdlLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFRvcCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIiksXG4gIHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dElucHV0XCIpLFxuICBjdHggPSB0ZXh0LmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3Qgd2lkdGggPSAodGV4dC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcbmNvbnN0IGhlaWdodCA9ICh0ZXh0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbmV4cG9ydCBsZXQgdGV4dFBpeGVscyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dCgpIHtcbiAgY3R4LmZvbnQgPSBcImJvbGQgMzBweCBzYW5zLXNlcmlmXCI7XG4gIGN0eC5maWxsVGV4dChgJHt0ZXh0SW5wdXQudmFsdWV9YCwgNSwgMjApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGV4dERhdGEoKSB7XG4gIHRleHRQaXhlbHMgPSBbXTtcblxuICBsZXQgdGV4dEltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDQwMCwgMzApO1xuICAvLyBldmVyeSBzaW5nbGUgcGl4ZWwgb2YgaW1hZ2UgZGF0YVxuICBsZXQgcGl4RGF0YSA9IHRleHRJbWdEYXRhLmRhdGE7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGV2ZXJ5IHBpeGVsIGNvbGxlY3RlZCBpbnNpZGUgQ2xhbXBlZEFycmF5ICh0ZXh0SW1nRGF0YS5kYXRhKVxuICBmb3IgKGxldCB5ID0gMDsgeSA8IHRleHRJbWdEYXRhLmhlaWdodDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0ZXh0SW1nRGF0YS53aWR0aDsgeCsrKSB7XG4gICAgICAvLyBwdXNoIHgseSBjb29yZCB0byB0ZXh0UGl4ZWxzLCBpZiBhbHBoYSB2YWx1ZSBvZiBwaXhlbERhdGEgaXMgZ3JlYXRlciB0aGFuIDEyOFxuICAgICAgaWYgKHBpeERhdGFbeSAqIDQgKiB0ZXh0SW1nRGF0YS53aWR0aCArIHggKiA0ICsgM10gPiAxMjgpIHtcbiAgICAgICAgdGV4dFBpeGVscy5wdXNoKHsgcG9zaXRpb25YOiB4LCBwb3NpdGlvblk6IHkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkdXAoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgYWRkKG90aGVyKSB7XG4gICAgdGhpcy54ICs9IG90aGVyLng7XG4gICAgdGhpcy55ICs9IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJ0cmFjdChvdGhlcikge1xuICAgIHRoaXMueCAtPSBvdGhlci54O1xuICAgIHRoaXMueSAtPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWludXMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5zdWJ0cmFjdChvdGhlcik7XG4gIH1cblxuICBtdWx0aXBseShudW0pIHtcbiAgICB0aGlzLnggKj0gbnVtO1xuICAgIHRoaXMueSAqPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aW1lcyhudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgbWFnbml0dWRlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZShudW0pIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMubXVsdGlwbHkobnVtIC8gbGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1hZ25pdHVkZShudW0pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUpIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICB0aGlzLnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByYW5kb21pemUobiA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUobikuc2V0QW5nbGUoMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9