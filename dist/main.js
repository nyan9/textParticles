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
}

function frame() {
  clear();

  for (var _i = 0, _nodes = nodes; _i < _nodes.length; _i++) {
    var node = _nodes[_i];
    node.move();
    node.draw();
    node.bounce();
  }
} // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm1pZGRsZSIsIlYiLCJub2RlcyIsImxlcnAiLCJtaW4iLCJtYXgiLCJ2IiwicG9wdWxhdGVOb2RlcyIsIm4iLCJpIiwibm9kZSIsIk5vZGUiLCJ4IiwieSIsInBvc2l0aW9uIiwicmFuZG9taXplIiwiTWF0aCIsInJhbmRvbSIsImFkZCIsInZlbG9jaXR5IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsImNsZWFyUmVjdCIsImZyYW1lIiwibW92ZSIsImRyYXciLCJib3VuY2UiLCJsYXN0VGltZSIsInZlbmRvcnMiLCJsZW5ndGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwiZWxlbWVudCIsImN1cnJUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lVG9DYWxsIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyTm9kZXMiLCJyYWRpdXMiLCJkZWx0YVQiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwidGltZXMiLCJWZWN0b3IiLCJvdGhlciIsImR1cCIsInN1YnRyYWN0IiwibnVtIiwibXVsdGlwbHkiLCJzcXJ0IiwibWFnbml0dWRlIiwibm9ybWFsaXplIiwiYW5nbGUiLCJjb3MiLCJzaW4iLCJzZXRBbmdsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUVBLElBQU1DLEtBQUssR0FBSUwsTUFBTSxDQUFDSyxLQUFQLEdBQWVDLE1BQU0sQ0FBQ0MsVUFBckM7QUFDQSxJQUFNQyxNQUFNLEdBQUlSLE1BQU0sQ0FBQ1EsTUFBUCxHQUFnQkYsTUFBTSxDQUFDRyxXQUF2QztBQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUFN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QUFMLENBQVNELEtBQVQsQ0FBbEI7QUFDQSxXQUFLbkQsQ0FBTCxHQUFTa0IsTUFBTSxHQUFHZixJQUFJLENBQUNrRCxHQUFMLENBQVNGLEtBQVQsQ0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQscUJBQWlCO0FBQUEsVUFBUHhELENBQU8sdUVBQUgsQ0FBRztBQUNmLGFBQU8sS0FBS3VELFNBQUwsQ0FBZXZELENBQWYsRUFBa0IyRCxRQUFsQixDQUEyQixJQUFJbkQsSUFBSSxDQUFDbUMsRUFBVCxHQUFjbkMsSUFBSSxDQUFDQyxNQUFMLEVBQXpDLENBQVA7QUFDRDs7Ozs7O0FBR1lzQyxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FudmFzXCI7XG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5pbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5jb25zdCBtaWRkbGUgPSBuZXcgVih3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xubGV0IG5vZGVzID0gW107XG5cbi8vIExpbmVhciBpbnRlcnBvbGF0aW9uXG5mdW5jdGlvbiBsZXJwKG1pbiwgbWF4LCB2KSB7XG4gIHJldHVybiBtYXggKiB2ICsgbWluICogKDEgLSB2KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOb2RlcyhuID0gMTAwKSB7XG4gIG5vZGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IG5vZGUgPSBuZXcgTm9kZShtaWRkbGUueCwgbWlkZGxlLnkpO1xuICAgIG5vZGUucG9zaXRpb24ucmFuZG9taXplKGxlcnAoMCwgd2lkdGggLyAyLCBNYXRoLnJhbmRvbSgpKSkuYWRkKG1pZGRsZSk7XG4gICAgbm9kZS52ZWxvY2l0eS5yYW5kb21pemUobGVycCgwLjA1LCAwLjEsIE1hdGgucmFuZG9tKCkpKTtcbiAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICB9XG59XG5wb3B1bGF0ZU5vZGVzKCk7XG5jb25zb2xlLmxvZyhub2Rlcyk7XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIGZyYW1lKCkge1xuICBjbGVhcigpO1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZS5tb3ZlKCk7XG4gICAgbm9kZS5kcmF3KCk7XG4gICAgbm9kZS5ib3VuY2UoKTtcbiAgfVxufVxuXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuLy8gTUlUIGxpY2Vuc2VcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXN0VGltZSA9IDA7XG4gIHZhciB2ZW5kb3JzID0gW1wibXNcIiwgXCJtb3pcIiwgXCJ3ZWJraXRcIiwgXCJvXCJdO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK3gpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0gKyBcIlJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdIHx8XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICB9XG5cbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG5cbiAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiByZW5kZXJOb2RlcygpIHtcbiAgZnJhbWUoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlck5vZGVzKTtcbn1cbnJlbmRlck5vZGVzKCk7XG4iLCJpbXBvcnQgViBmcm9tIFwiLi92ZWN0b3JcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucmFkaXVzID0gMztcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmRlbHRhVCA9IDIwO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuICB9XG5cbiAgY2xlYXJOb2RlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDI1NSw1NiwxMDApXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIC8vIHBvc2l0aW9uID0gaW5pdGlhbCBwb3NpdGlvbiArIHZlbG9jaXR5ICogZGVsdGFUaW1lXG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS50aW1lcyh0aGlzLmRlbHRhVCkpO1xuICB9XG5cbiAgYm91bmNlKCkge1xuICAgIC8vIEJvdHRvbSBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPj0gY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgICAgLy8gaWYgb3V0c2lkZSBvZiBib3VuZGFyeSwgaW5zZXJ0IGJhY2sgaW50byB0aGUgYm94IGF0IHRoZSBib3VuZGFyeVxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBSaWdodCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPj0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSBjYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gVG9wIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgICAvLyBMZWZ0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucmFkaXVzO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZHVwKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGFkZChvdGhlcikge1xuICAgIHRoaXMueCArPSBvdGhlci54O1xuICAgIHRoaXMueSArPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICB0aGlzLnggLT0gb3RoZXIueDtcbiAgICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1pbnVzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkuc3VidHJhY3Qob3RoZXIpO1xuICB9XG5cbiAgbXVsdGlwbHkobnVtKSB7XG4gICAgdGhpcy54ICo9IG51bTtcbiAgICB0aGlzLnkgKj0gbnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGltZXMobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIG1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBub3JtYWxpemUobnVtKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLm11bHRpcGx5KG51bSAvIGxlbmd0aCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRNYWduaXR1ZGUobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnggPSBsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSk7XG4gICAgdGhpcy55ID0gbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmFuZG9taXplKG4gPSAxKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKG4pLnNldEFuZ2xlKDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==