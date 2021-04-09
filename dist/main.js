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


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
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

populateNodes();
console.log(nodes); // max, min distance threshold

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsIlYiLCJub2RlcyIsImxlcnAiLCJtaW4iLCJtYXgiLCJ2IiwicmVzY2FsZSIsInBvcHVsYXRlTm9kZXMiLCJuIiwiaSIsIm5vZGUiLCJOb2RlIiwieCIsInkiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsIk1hdGgiLCJyYW5kb20iLCJhZGQiLCJ2ZWxvY2l0eSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibWF4RGlzdGFuY2UiLCJtaW5EaXN0YW5jZSIsImRyYXdMaW5lIiwicG9zMSIsInBvczIiLCJjb2xvciIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhd0Nvbm5lY3Rpb24iLCJub2RlMSIsIm5vZGUyIiwiZGlzcGxhY2VtZW50IiwibWludXMiLCJkaXN0YW5jZSIsIm1hZ25pdHVkZSIsImFscGhhIiwiZHJhd0Nvbm5lY3Rpb25zIiwibGVuZ3RoIiwiaiIsImNsZWFyIiwiY2xlYXJSZWN0IiwiZnJhbWUiLCJkZWx0YVQiLCJtb3ZlIiwiZHJhdyIsImJvdW5jZSIsImxhc3RUaW1lIiwidmVuZG9ycyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJwcmV2VGltZSIsInJlbmRlck5vZGVzIiwibm93IiwicGVyZm9ybWFuY2UiLCJyYWRpdXMiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwidGltZXMiLCJWZWN0b3IiLCJvdGhlciIsImR1cCIsInN1YnRyYWN0IiwibnVtIiwibXVsdGlwbHkiLCJzcXJ0Iiwibm9ybWFsaXplIiwiYW5nbGUiLCJjb3MiLCJzaW4iLCJzZXRBbmdsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdB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Q0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQscUJBQWlCO0FBQUEsVUFBUC9FLENBQU8sdUVBQUgsQ0FBRztBQUNmLGFBQU8sS0FBSzhFLFNBQUwsQ0FBZTlFLENBQWYsRUFBa0JrRixRQUFsQixDQUEyQixJQUFJMUUsSUFBSSxDQUFDMkQsRUFBVCxHQUFjM0QsSUFBSSxDQUFDQyxNQUFMLEVBQXpDLENBQVA7QUFDRDs7Ozs7O0FBR1k4RCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FudmFzXCI7XG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbmNvbnN0IG1pZGRsZSA9IG5ldyBWKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG5sZXQgbm9kZXMgPSBbXTtcblxuLy8gTGluZWFyIGludGVycG9sYXRpb25cbmZ1bmN0aW9uIGxlcnAobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuIG1heCAqIHYgKyBtaW4gKiAoMSAtIHYpO1xufVxuXG4vLyBtaW4gbWF4IG5vcm1hbGl6YXRpb25cbmZ1bmN0aW9uIHJlc2NhbGUobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuICh2IC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5vZGVzKG4gPSAxMDApIHtcbiAgbm9kZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGxldCBub2RlID0gbmV3IE5vZGUobWlkZGxlLngsIG1pZGRsZS55KTtcblxuICAgIG5vZGUucG9zaXRpb24ucmFuZG9taXplKGxlcnAoMCwgd2lkdGggLyAyLCBNYXRoLnJhbmRvbSgpKSkuYWRkKG1pZGRsZSk7XG4gICAgbm9kZS52ZWxvY2l0eS5yYW5kb21pemUobGVycCgwLjA1LCAwLjEsIE1hdGgucmFuZG9tKCkpKTtcbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICB9XG59XG5wb3B1bGF0ZU5vZGVzKCk7XG5jb25zb2xlLmxvZyhub2Rlcyk7XG5cbi8vIG1heCwgbWluIGRpc3RhbmNlIHRocmVzaG9sZFxuY29uc3QgbWF4RGlzdGFuY2UgPSAxNTA7XG5jb25zdCBtaW5EaXN0YW5jZSA9IDUwO1xuZnVuY3Rpb24gZHJhd0xpbmUocG9zMSwgcG9zMiwgY29sb3IpIHtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5tb3ZlVG8ocG9zMS54LCBwb3MxLnkpO1xuICBjdHgubGluZVRvKHBvczIueCwgcG9zMi55KTtcbiAgY3R4LnN0cm9rZSgpO1xufVxuXG5cbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9uKG5vZGUxLCBub2RlMikge1xuICBsZXQgZGlzcGxhY2VtZW50ID0gbm9kZTIucG9zaXRpb24ubWludXMobm9kZTEucG9zaXRpb24pO1xuICBsZXQgZGlzdGFuY2UgPSBkaXNwbGFjZW1lbnQubWFnbml0dWRlKCk7XG5cbiAgLy8gZG8gbm90aGluZywgaWYgZGlzcGxhY2VtZW50IHZlY3RvciBpcyBsb25nZXIgdGhhbiBtYXhEaXN0YW5jZVxuICBpZiAoZGlzdGFuY2UgPj0gbWF4RGlzdGFuY2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBzY2FsZSBjb2xvciBvcGFjaXR5KGFscGhhKSBkZXBlbmRpbmcgb24gZGlzdGFuY2UgYmV0d2VlbiBub2Rlc1xuICBsZXQgYWxwaGEgPSByZXNjYWxlKG1heERpc3RhbmNlLCBtaW5EaXN0YW5jZSwgZGlzdGFuY2UpO1xuICBsZXQgY29sb3IgPSBgaHNsYSgxODEsIDc5JSwgNTQlLCAke2FscGhhfSlgO1xuXG4gIGRyYXdMaW5lKG5vZGUxLnBvc2l0aW9uLCBub2RlMi5wb3NpdGlvbiwgY29sb3IpO1xufVxuXG5mdW5jdGlvbiBkcmF3Q29ubmVjdGlvbnMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgZHJhd0Nvbm5lY3Rpb24obm9kZXNbaV0sIG5vZGVzW2pdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuLy8gZWFjaCBmcmFtZSdzIGFjdGlvbnNcbmZ1bmN0aW9uIGZyYW1lKGRlbHRhVCkge1xuICBjbGVhcigpO1xuICBkcmF3Q29ubmVjdGlvbnMoKTtcblxuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKGRlbHRhVCk7XG4gICAgbm9kZS5kcmF3KCk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gTUlUIGxpY2Vuc2VcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0VGltZSA9IDA7XG4gIHZhciB2ZW5kb3JzID0gW1wibXNcIiwgXCJtb3pcIiwgXCJ3ZWJraXRcIiwgXCJvXCJdO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59KSgpO1xuXG4vLyBrZWVwIHRyYWNrIG9mIGRlbHRhVGltZSBldmVyeSBmcmFtZVxubGV0IHByZXZUaW1lID0gMDtcbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBsZXQgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBkZWx0YVQgPSBub3cgLSBwcmV2VGltZTtcbiAgcHJldlRpbWUgPSBub3c7XG5cbiAgZnJhbWUoZGVsdGFUKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck5vZGVzKTtcbn1cbnJlbmRlck5vZGVzKCk7XG4iLCJpbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucmFkaXVzID0gNDtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmluaXRpYWxYID0geDtcbiAgICB0aGlzLmluaXRpYWxZID0geTtcbiAgfVxuXG4gIGNsZWFyTm9kZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsNTYsMTAwKVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZShkZWx0YVQpIHtcbiAgICAvLyBwb3NpdGlvbiA9IGluaXRpYWwgcG9zaXRpb24gKyB2ZWxvY2l0eSAqIGRlbHRhVGltZVxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkudGltZXMoZGVsdGFUKSk7XG4gIH1cblxuICBib3VuY2UoKSB7XG4gICAgLy8gQm90dG9tIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA+PSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAvLyBpZiBvdXRzaWRlIG9mIGJvdW5kYXJ5LCBpbnNlcnQgYmFjayBpbnRvIHRoZSBib3ggYXQgdGhlIGJvdW5kYXJ5XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFJpZ2h0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBjYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBUb3AgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIExlZnQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IDw9IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG4iLCJjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBkdXAoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgYWRkKG90aGVyKSB7XG4gICAgdGhpcy54ICs9IG90aGVyLng7XG4gICAgdGhpcy55ICs9IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJ0cmFjdChvdGhlcikge1xuICAgIHRoaXMueCAtPSBvdGhlci54O1xuICAgIHRoaXMueSAtPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWludXMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5zdWJ0cmFjdChvdGhlcik7XG4gIH1cblxuICBtdWx0aXBseShudW0pIHtcbiAgICB0aGlzLnggKj0gbnVtO1xuICAgIHRoaXMueSAqPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aW1lcyhudW0pIHtcbiAgICByZXR1cm4gdGhpcy5kdXAoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgbWFnbml0dWRlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIG5vcm1hbGl6ZShudW0pIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMubXVsdGlwbHkobnVtIC8gbGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1hZ25pdHVkZShudW0pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseShudW0pO1xuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUpIHtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5tYWduaXR1ZGUoKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICBsZW5ndGggPSAxO1xuICAgICAgdGhpcy54ID0gMTtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHRoaXMueCA9IGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKTtcbiAgICB0aGlzLnkgPSBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByYW5kb21pemUobiA9IDEpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUobikuc2V0QW5nbGUoMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9