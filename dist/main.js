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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsIlYiLCJub2RlcyIsImxlcnAiLCJtaW4iLCJtYXgiLCJ2IiwicmVzY2FsZSIsInBvcHVsYXRlTm9kZXMiLCJuIiwiaSIsIm5vZGUiLCJOb2RlIiwieCIsInkiLCJwb3NpdGlvbiIsInJhbmRvbWl6ZSIsIk1hdGgiLCJyYW5kb20iLCJhZGQiLCJ2ZWxvY2l0eSIsInB1c2giLCJtYXhEaXN0YW5jZSIsIm1pbkRpc3RhbmNlIiwiZHJhd0xpbmUiLCJwb3MxIiwicG9zMiIsImNvbG9yIiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3Q29ubmVjdGlvbiIsIm5vZGUxIiwibm9kZTIiLCJkaXNwbGFjZW1lbnQiLCJtaW51cyIsImRpc3RhbmNlIiwibWFnbml0dWRlIiwiYWxwaGEiLCJkcmF3Q29ubmVjdGlvbnMiLCJsZW5ndGgiLCJqIiwiY2xlYXIiLCJjbGVhclJlY3QiLCJmcmFtZSIsImRlbHRhVCIsIm1vdmUiLCJkcmF3IiwiYm91bmNlIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInByZXZUaW1lIiwicmVuZGVyTm9kZXMiLCJub3ciLCJwZXJmb3JtYW5jZSIsInJhZGl1cyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJmaWxsU3R5bGUiLCJhcmMiLCJQSSIsImNsb3NlUGF0aCIsImZpbGwiLCJ0aW1lcyIsIlZlY3RvciIsIm90aGVyIiwiZHVwIiwic3VidHJhY3QiLCJudW0iLCJtdWx0aXBseSIsInNxcnQiLCJub3JtYWxpemUiLCJhbmdsZSIsImNvcyIsInNpbiIsInNldEFuZ2xlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxj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Q0FBTyx1RUFBSCxDQUFHO0FBQ2YsYUFBTyxLQUFLNEUsU0FBTCxDQUFlNUUsQ0FBZixFQUFrQmdGLFFBQWxCLENBQTJCLElBQUl4RSxJQUFJLENBQUN5RCxFQUFULEdBQWN6RCxJQUFJLENBQUNDLE1BQUwsRUFBekMsQ0FBUDtBQUNEOzs7Ozs7QUFHWTRELHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcbmltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IHdpZHRoID0gKGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcbmNvbnN0IGhlaWdodCA9IChjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcblxuY29uc3QgbWlkZGxlID0gbmV3IFYod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbmxldCBub2RlcyA9IFtdO1xuXG4vLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuZnVuY3Rpb24gbGVycChtaW4sIG1heCwgdikge1xuICByZXR1cm4gbWF4ICogdiArIG1pbiAqICgxIC0gdik7XG59XG5cbi8vIG1pbiBtYXggbm9ybWFsaXphdGlvblxuZnVuY3Rpb24gcmVzY2FsZShtaW4sIG1heCwgdikge1xuICByZXR1cm4gKHYgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm9kZXMobiA9IDEwMCkge1xuICBub2RlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShtaWRkbGUueCwgbWlkZGxlLnkpO1xuXG4gICAgbm9kZS5wb3NpdGlvbi5yYW5kb21pemUobGVycCgwLCB3aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkpKS5hZGQobWlkZGxlKTtcbiAgICBub2RlLnZlbG9jaXR5LnJhbmRvbWl6ZShsZXJwKDAuMDUsIDAuMSwgTWF0aC5yYW5kb20oKSkpO1xuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbn1cbnBvcHVsYXRlTm9kZXMoKTtcblxuLy8gbWF4LCBtaW4gZGlzdGFuY2UgdGhyZXNob2xkXG5jb25zdCBtYXhEaXN0YW5jZSA9IDE1MDtcbmNvbnN0IG1pbkRpc3RhbmNlID0gNTA7XG5cbmZ1bmN0aW9uIGRyYXdMaW5lKHBvczEsIHBvczIsIGNvbG9yKSB7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHgubW92ZVRvKHBvczEueCwgcG9zMS55KTtcbiAgY3R4LmxpbmVUbyhwb3MyLngsIHBvczIueSk7XG4gIGN0eC5zdHJva2UoKTtcbn1cblxuZnVuY3Rpb24gZHJhd0Nvbm5lY3Rpb24obm9kZTEsIG5vZGUyKSB7XG4gIGxldCBkaXNwbGFjZW1lbnQgPSBub2RlMi5wb3NpdGlvbi5taW51cyhub2RlMS5wb3NpdGlvbik7XG4gIGxldCBkaXN0YW5jZSA9IGRpc3BsYWNlbWVudC5tYWduaXR1ZGUoKTtcblxuICAvLyBkbyBub3RoaW5nLCBpZiBkaXNwbGFjZW1lbnQgdmVjdG9yIGlzIGxvbmdlciB0aGFuIG1heERpc3RhbmNlXG4gIGlmIChkaXN0YW5jZSA+PSBtYXhEaXN0YW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHNjYWxlIGNvbG9yIG9wYWNpdHkoYWxwaGEpIGRlcGVuZGluZyBvbiBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVzXG4gIGxldCBhbHBoYSA9IHJlc2NhbGUobWF4RGlzdGFuY2UsIG1pbkRpc3RhbmNlLCBkaXN0YW5jZSk7XG4gIGxldCBjb2xvciA9IGBoc2xhKDE4MSwgNzklLCA1NCUsICR7YWxwaGF9KWA7XG5cbiAgZHJhd0xpbmUobm9kZTEucG9zaXRpb24sIG5vZGUyLnBvc2l0aW9uLCBjb2xvcik7XG59XG5cbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9ucygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBkcmF3Q29ubmVjdGlvbihub2Rlc1tpXSwgbm9kZXNbal0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG4vLyBlYWNoIGZyYW1lJ3MgYWN0aW9uc1xuZnVuY3Rpb24gZnJhbWUoZGVsdGFUKSB7XG4gIGNsZWFyKCk7XG4gIGRyYXdDb25uZWN0aW9ucygpO1xuXG4gIGZvciAobGV0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBub2RlLm1vdmUoZGVsdGFUKTtcbiAgICBub2RlLmRyYXcoKTtcbiAgICBub2RlLmJvdW5jZSgpO1xuICB9XG59XG5cbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RUaW1lID0gMDtcbiAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gIH1cblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbn0pKCk7XG5cbi8vIGtlZXAgdHJhY2sgb2YgZGVsdGFUaW1lIGV2ZXJ5IGZyYW1lXG5sZXQgcHJldlRpbWUgPSAwO1xuZnVuY3Rpb24gcmVuZGVyTm9kZXMoKSB7XG4gIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgbGV0IGRlbHRhVCA9IG5vdyAtIHByZXZUaW1lO1xuICBwcmV2VGltZSA9IG5vdztcblxuICBmcmFtZShkZWx0YVQpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTm9kZXMpO1xufVxucmVuZGVyTm9kZXMoKTtcbiIsImltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5yYWRpdXMgPSA0O1xuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVih4LCB5KTtcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFYoMC4xLCAwLjIpO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuICB9XG5cbiAgY2xlYXJOb2RlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKGRlbHRhVCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyhkZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIC8vIGlmIG91dHNpZGUgb2YgYm91bmRhcnksIGluc2VydCBiYWNrIGludG8gdGhlIGJveCBhdCB0aGUgYm91bmRhcnlcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFRvcCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGR1cCgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQob3RoZXIpIHtcbiAgICB0aGlzLnggKz0gb3RoZXIueDtcbiAgICB0aGlzLnkgKz0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KG90aGVyKSB7XG4gICAgdGhpcy54IC09IG90aGVyLng7XG4gICAgdGhpcy55IC09IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtaW51cyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLnN1YnRyYWN0KG90aGVyKTtcbiAgfVxuXG4gIG11bHRpcGx5KG51bSkge1xuICAgIHRoaXMueCAqPSBudW07XG4gICAgdGhpcy55ICo9IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRpbWVzKG51bSkge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLm11bHRpcGx5KG51bSk7XG4gIH1cblxuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgbm9ybWFsaXplKG51bSkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICB0aGlzLnggPSAxO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgdGhpcy5tdWx0aXBseShudW0gLyBsZW5ndGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TWFnbml0dWRlKG51bSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5KG51bSk7XG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICB0aGlzLnggPSAxO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgdGhpcy54ID0gbGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpO1xuICAgIHRoaXMueSA9IGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJhbmRvbWl6ZShuID0gMSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZShuKS5zZXRBbmdsZSgyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=