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
console.log(nodes);

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
} // each frame's actions


function frame() {
  clear();

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var node = _nodes[_i];
    node.move();
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
})();

function renderNodes() {
  frame();
  requestAnimationFrame(renderNodes);
}

renderNodes();

function drawConnections() {
  for (var i = 0; i < nodes.length; i++) {
    for (var j = i + 1; j < nodes.length; j++) {}
  }
}

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

    this.radius = 3;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.1, 0.2);
    this.deltaT = 20;
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
    value: function move() {
      // position = initial position + velocity * deltaTime
      this.position.add(this.velocity.times(this.deltaT));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsIlYiLCJub2RlcyIsImxlcnAiLCJtaW4iLCJtYXgiLCJ2IiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsImNsZWFyUmVjdCIsImZyYW1lIiwibW92ZSIsImRyYXciLCJib3VuY2UiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyTm9kZXMiLCJkcmF3Q29ubmVjdGlvbnMiLCJqIiwicmFkaXVzIiwiZGVsdGFUIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsInRpbWVzIiwiVmVjdG9yIiwib3RoZXIiLCJkdXAiLCJzdWJ0cmFjdCIsIm51bSIsIm11bHRpcGx5Iiwic3FydCIsIm1hZ25pdHVkZSIsIm5vcm1hbGl6ZSIsImFuZ2xlIiwiY29zIiwic2luIiwic2V0QW5nbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQSxJQUFNQyxLQUFLLEdBQUlMLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlQyxNQUFNLENBQUNDLFVBQXJDO0FBQ0EsSUFBTUMsTUFBTSxHQUFJUixNQUFNLENBQUNRLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkM7QUFDQSxJQUFNQyxNQUFN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QUtJLFNBQUwsR0FBaUJILFFBQWpCLENBQTBCRCxHQUExQixDQUFQO0FBQ0Q7OztXQUVELGtCQUFTSyxLQUFULEVBQWdCO0FBQ2QsVUFBSW5DLE1BQU0sR0FBRyxLQUFLaUMsU0FBTCxFQUFiOztBQUNBLFVBQUlqQyxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQkEsY0FBTSxHQUFHLENBQVQ7QUFDQSxhQUFLbkIsQ0FBTCxHQUFTLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNEOztBQUNELFdBQUtELENBQUwsR0FBU21CLE1BQU0sR0FBR2YsSUFBSSxDQUFDbUQsR0FBTCxDQUFTRCxLQUFULENBQWxCO0FBQ0EsV0FBS3JELENBQUwsR0FBU2tCLE1BQU0sR0FBR2YsSUFBSSxDQUFDb0QsR0FBTCxDQUFTRixLQUFULENBQWxCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQUVELHFCQUFpQjtBQUFBLFVBQVAxRCxDQUFPLHVFQUFILENBQUc7QUFDZixhQUFPLEtBQUt5RCxTQUFMLENBQWV6RCxDQUFmLEVBQWtCNkQsUUFBbEIsQ0FBMkIsSUFBSXJELElBQUksQ0FBQ3FDLEVBQVQsR0FBY3JDLElBQUksQ0FBQ0MsTUFBTCxFQUF6QyxDQUFQO0FBQ0Q7Ozs7OztBQUdZd0MscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3Qgd2lkdGggPSAoY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgpO1xuY29uc3QgaGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuY29uc3QgbWlkZGxlID0gbmV3IFYod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbmxldCBub2RlcyA9IFtdO1xuXG4vLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuZnVuY3Rpb24gbGVycChtaW4sIG1heCwgdikge1xuICByZXR1cm4gbWF4ICogdiArIG1pbiAqICgxIC0gdik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm9kZXMobiA9IDEwMCkge1xuICBub2RlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShtaWRkbGUueCwgbWlkZGxlLnkpO1xuXG4gICAgbm9kZS5wb3NpdGlvbi5yYW5kb21pemUobGVycCgwLCB3aWR0aCAvIDIsIE1hdGgucmFuZG9tKCkpKS5hZGQobWlkZGxlKTtcbiAgICBub2RlLnZlbG9jaXR5LnJhbmRvbWl6ZShsZXJwKDAuMDUsIDAuMSwgTWF0aC5yYW5kb20oKSkpO1xuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbn1cbnBvcHVsYXRlTm9kZXMoKTtcbmNvbnNvbGUubG9nKG5vZGVzKTtcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn1cblxuLy8gZWFjaCBmcmFtZSdzIGFjdGlvbnNcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICBjbGVhcigpO1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKCk7XG4gICAgbm9kZS5kcmF3KCk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gTUlUIGxpY2Vuc2VcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0VGltZSA9IDA7XG4gIHZhciB2ZW5kb3JzID0gW1wibXNcIiwgXCJtb3pcIiwgXCJ3ZWJraXRcIiwgXCJvXCJdO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiByZW5kZXJOb2RlcygpIHtcbiAgZnJhbWUoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck5vZGVzKTtcbn1cbnJlbmRlck5vZGVzKCk7XG5cbmZ1bmN0aW9uIGRyYXdDb25uZWN0aW9ucygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7fVxuICB9XG59XG4iLCJpbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucmFkaXVzID0gMztcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmRlbHRhVCA9IDIwO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuICB9XG5cbiAgY2xlYXJOb2RlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyh0aGlzLmRlbHRhVCkpO1xuICB9XG5cbiAgYm91bmNlKCkge1xuICAgIC8vIEJvdHRvbSBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgICAgLy8gaWYgb3V0c2lkZSBvZiBib3VuZGFyeSwgaW5zZXJ0IGJhY2sgaW50byB0aGUgYm94IGF0IHRoZSBib3VuZGFyeVxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBSaWdodCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSBjYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gVG9wIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBMZWZ0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZHVwKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGFkZChvdGhlcikge1xuICAgIHRoaXMueCArPSBvdGhlci54O1xuICAgIHRoaXMueSArPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICB0aGlzLnggLT0gb3RoZXIueDtcbiAgICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1pbnVzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkuc3VidHJhY3Qob3RoZXIpO1xuICB9XG5cbiAgbXVsdGlwbHkobnVtKSB7XG4gICAgdGhpcy54ICo9IG51bTtcbiAgICB0aGlzLnkgKj0gbnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGltZXMobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIG1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBub3JtYWxpemUobnVtKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLm11bHRpcGx5KG51bSAvIGxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYWduaXR1ZGUobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgdGhpcy55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmFuZG9taXplKG4gPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKG4pLnNldEFuZ2xlKDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==