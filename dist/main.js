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
var nodes = []; // Linear interpolation

function lerp(min, max, v) {
  return max * v + min * (1 - v);
} // min max normalization


function rescale(min, max, v) {
  return (v - min) / (max - min);
}

function populateNodes() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  nodes = [];

  for (var i = 0; i < n; i++) {
    var node = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](middle.x, middle.y);
    node.position.randomize(lerp(0, width / 2, Math.random())).add(middle);
    node.velocity.randomize(lerp(0.05, 0.1, Math.random()));
    nodes.push(node);
  }
}

populateNodes(); // max, min distance threshold

var maxDistance = 150;
var minDistance = 50;

function drawLine(pos1, pos2, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(pos1.x, pos1.y);
  ctx.lineTo(pos2.x, pos2.y);
  ctx.stroke();
}

function drawConnection(node1, node2) {
  var displacement = node2.position.minus(node1.position);
  var distance = displacement.magnitude(); // do nothing, if displacement vector is longer than maxDistance

  if (distance >= maxDistance) {
    return;
  } // scale color opacity(alpha) depending on distance between nodes


  var alpha = rescale(maxDistance, minDistance, distance);
  var color = "hsla(181, 79%, 54%, ".concat(alpha, ")");
  drawLine(node1.position, node2.position, color);
}

function drawConnections() {
  for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {
      drawConnection(nodes[i], nodes[j]);
    }
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
} // each frame's actions


function frame(deltaT) {
  clear();
  drawConnections();

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var node = _nodes[_i];
    node.move(deltaT);
    node.draw();
    node.bounce();
  }
} // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
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
})(); // keep track of deltaTime every frame


var prevTime = 0;

function renderNodes() {
  var now = performance.now();
  var deltaT = now - prevTime;
  prevTime = now;
  frame(deltaT);
  requestAnimationFrame(renderNodes);
}

renderNodes();
_text__WEBPACK_IMPORTED_MODULE_2__["initText"]();

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
    _classCallCheck(this, Node);

    this.radius = 4;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.1, 0.2);
    this.initialX = x;
    this.initialY = y;
  }

  _createClass(Node, [{
    key: "clearNode",
    value: function clearNode() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, {
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
/*! exports provided: initText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initText", function() { return initText; });
var text = document.getElementById("text"),
    ctx = text.getContext("2d");
var width = text.width = window.innerWidth;
var height = text.height = window.innerHeight;
var pix = ctx.getImageData(0, 0, width / 2, height / 2);
function initText() {
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "30px sans-serif";
  ctx.fillText("asd", width / 2, height / 2);
  ctx.strokeStyle = "white";
  ctx.strokeRect(0, 0, width, height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibWlkZGxlIiwiViIsIm5vZGVzIiwibGVycCIsIm1pbiIsIm1heCIsInYiLCJyZXNjYWxlIiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsIm1heERpc3RhbmNlIiwibWluRGlzdGFuY2UiLCJkcmF3TGluZSIsInBvczEiLCJwb3MyIiwiY29sb3IiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImRyYXdDb25uZWN0aW9uIiwibm9kZTEiLCJub2RlMiIsImRpc3BsYWNlbWVudCIsIm1pbnVzIiwiZGlzdGFuY2UiLCJtYWduaXR1ZGUiLCJhbHBoYSIsImRyYXdDb25uZWN0aW9ucyIsImxlbmd0aCIsImoiLCJjbGVhciIsImNsZWFyUmVjdCIsImZyYW1lIiwiZGVsdGFUIiwibW92ZSIsImRyYXciLCJib3VuY2UiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicHJldlRpbWUiLCJyZW5kZXJOb2RlcyIsIm5vdyIsInBlcmZvcm1hbmNlIiwiVCIsInJhZGl1cyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJ0aW1lcyIsInRleHQiLCJwaXgiLCJnZXRJbWFnZURhdGEiLCJpbml0VGV4dCIsInRleHRBbGlnbiIsImZvbnQiLCJmaWxsVGV4dCIsInN0cm9rZVJlY3QiLCJWZWN0b3IiLCJvdGhlciIsImR1cCIsInN1YnRyYWN0IiwibnVtIiwibXVsdGlwbHkiLCJzcXJ0Iiwibm9ybWFsaXplIiwiYW5nbGUiLCJjb3MiLCJzaW4iLCJzZXRBbmdsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7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QWtCeUYsUUFBbEIsQ0FBMkIsSUFBSWpGLElBQUksQ0FBQzBELEVBQVQsR0FBYzFELElBQUksQ0FBQ0MsTUFBTCxFQUF6QyxDQUFQO0FBQ0Q7Ozs7OztBQUdZcUUscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5pbXBvcnQgKiBhcyBUIGZyb20gXCIuL3RleHRcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIiksXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IHdpZHRoID0gKGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcbmNvbnN0IGhlaWdodCA9IChjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcbmNvbnN0IG1pZGRsZSA9IG5ldyBWKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG5cbmxldCBub2RlcyA9IFtdO1xuXG4vLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuZnVuY3Rpb24gbGVycChtaW4sIG1heCwgdikge1xuICByZXR1cm4gbWF4ICogdiArIG1pbiAqICgxIC0gdik7XG59XG5cbi8vIG1pbiBtYXggbm9ybWFsaXphdGlvblxuZnVuY3Rpb24gcmVzY2FsZShtaW4sIG1heCwgdikge1xuICByZXR1cm4gKHYgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm9kZXMobiA9IDEwMCkge1xuICBub2RlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShtaWRkbGUueCwgbWlkZGxlLnkpO1xuXG4gICAgbm9kZS5wb3NpdGlvbi5yYW5kb21pemUobGVycCgwLCB3aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkpKS5hZGQobWlkZGxlKTtcbiAgICBub2RlLnZlbG9jaXR5LnJhbmRvbWl6ZShsZXJwKDAuMDUsIDAuMSwgTWF0aC5yYW5kb20oKSkpO1xuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbn1cbnBvcHVsYXRlTm9kZXMoKTtcblxuLy8gbWF4LCBtaW4gZGlzdGFuY2UgdGhyZXNob2xkXG5jb25zdCBtYXhEaXN0YW5jZSA9IDE1MDtcbmNvbnN0IG1pbkRpc3RhbmNlID0gNTA7XG5cbmZ1bmN0aW9uIGRyYXdMaW5lKHBvczEsIHBvczIsIGNvbG9yKSB7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHgubW92ZVRvKHBvczEueCwgcG9zMS55KTtcbiAgY3R4LmxpbmVUbyhwb3MyLngsIHBvczIueSk7XG4gIGN0eC5zdHJva2UoKTtcbn1cblxuZnVuY3Rpb24gZHJhd0Nvbm5lY3Rpb24obm9kZTEsIG5vZGUyKSB7XG4gIGxldCBkaXNwbGFjZW1lbnQgPSBub2RlMi5wb3NpdGlvbi5taW51cyhub2RlMS5wb3NpdGlvbik7XG4gIGxldCBkaXN0YW5jZSA9IGRpc3BsYWNlbWVudC5tYWduaXR1ZGUoKTtcblxuICAvLyBkbyBub3RoaW5nLCBpZiBkaXNwbGFjZW1lbnQgdmVjdG9yIGlzIGxvbmdlciB0aGFuIG1heERpc3RhbmNlXG4gIGlmIChkaXN0YW5jZSA+PSBtYXhEaXN0YW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHNjYWxlIGNvbG9yIG9wYWNpdHkoYWxwaGEpIGRlcGVuZGluZyBvbiBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVzXG4gIGxldCBhbHBoYSA9IHJlc2NhbGUobWF4RGlzdGFuY2UsIG1pbkRpc3RhbmNlLCBkaXN0YW5jZSk7XG4gIGxldCBjb2xvciA9IGBoc2xhKDE4MSwgNzklLCA1NCUsICR7YWxwaGF9KWA7XG5cbiAgZHJhd0xpbmUobm9kZTEucG9zaXRpb24sIG5vZGUyLnBvc2l0aW9uLCBjb2xvcik7XG59XG5cbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9ucygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBkcmF3Q29ubmVjdGlvbihub2Rlc1tpXSwgbm9kZXNbal0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG4vLyBlYWNoIGZyYW1lJ3MgYWN0aW9uc1xuZnVuY3Rpb24gZnJhbWUoZGVsdGFUKSB7XG4gIGNsZWFyKCk7XG4gIGRyYXdDb25uZWN0aW9ucygpO1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKGRlbHRhVCk7XG4gICAgbm9kZS5kcmF3KCk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gTUlUIGxpY2Vuc2VcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0VGltZSA9IDA7XG4gIHZhciB2ZW5kb3JzID0gW1wibXNcIiwgXCJtb3pcIiwgXCJ3ZWJraXRcIiwgXCJvXCJdO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59KSgpO1xuXG4vLyBrZWVwIHRyYWNrIG9mIGRlbHRhVGltZSBldmVyeSBmcmFtZVxubGV0IHByZXZUaW1lID0gMDtcbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBkZWx0YVQgPSBub3cgLSBwcmV2VGltZTtcbiAgcHJldlRpbWUgPSBub3c7XG5cbiAgZnJhbWUoZGVsdGFUKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck5vZGVzKTtcbn1cbnJlbmRlck5vZGVzKCk7XG5cblQuaW5pdFRleHQoKTtcbiIsImltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5yYWRpdXMgPSA0O1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVih4LCB5KTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFYoMC4xLCAwLjIpO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuICB9XG5cbiAgY2xlYXJOb2RlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhVCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyhkZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIC8vIGlmIG91dHNpZGUgb2YgYm91bmRhcnksIGluc2VydCBiYWNrIGludG8gdGhlIGJveCBhdCB0aGUgYm91bmRhcnlcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFRvcCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNvbnN0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRcIiksXG4gIGN0eCA9IHRleHQuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9ICh0ZXh0LndpZHRoID0gd2luZG93LmlubmVyV2lkdGgpO1xuY29uc3QgaGVpZ2h0ID0gKHRleHQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblxubGV0IHBpeCA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUZXh0KCkge1xuICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LmZvbnQgPSBcIjMwcHggc2Fucy1zZXJpZlwiO1xuICBjdHguZmlsbFRleHQoXCJhc2RcIiwgd2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICBjdHguc3Ryb2tlUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn1cbiIsImNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGR1cCgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQob3RoZXIpIHtcbiAgICB0aGlzLnggKz0gb3RoZXIueDtcbiAgICB0aGlzLnkgKz0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KG90aGVyKSB7XG4gICAgdGhpcy54IC09IG90aGVyLng7XG4gICAgdGhpcy55IC09IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtaW51cyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLnN1YnRyYWN0KG90aGVyKTtcbiAgfVxuXG4gIG11bHRpcGx5KG51bSkge1xuICAgIHRoaXMueCAqPSBudW07XG4gICAgdGhpcy55ICo9IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRpbWVzKG51bSkge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLm11bHRpcGx5KG51bSk7XG4gIH1cblxuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgbm9ybWFsaXplKG51bSkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICB0aGlzLnggPSAxO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgdGhpcy5tdWx0aXBseShudW0gLyBsZW5ndGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TWFnbml0dWRlKG51bSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5KG51bSk7XG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICB0aGlzLnggPSAxO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgdGhpcy54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIHRoaXMueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJhbmRvbWl6ZShuID0gMSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZShuKS5zZXRBbmdsZSgyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=