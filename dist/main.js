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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var nodes = []; // Linear interpolation

function lerp(min, max, v) {
  return max * v + min * (1 - v);
}

function populateNodes() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  nodes = [];

  for (var i = 0; i < n; i++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    nodes.push(new _node__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
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
  function Node(x, y, vx, vy) {
    _classCallCheck(this, Node);

    this.radius = 10;
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
    value: function normalize() {
      var length = this.magnitude();

      if (length === 0) {
        length = 1;
        this.x = 1;
        this.y = 0;
      }

      this.multiply(1 / length);
      return this;
    }
  }, {
    key: "setMagnitude",
    value: function setMagnitude(num) {
      return this.normalize().multiply(num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5vZGVzIiwibGVycCIsIm1pbiIsIm1heCIsInYiLCJwb3B1bGF0ZU5vZGVzIiwibiIsImkiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJwdXNoIiwiTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhciIsImNsZWFyUmVjdCIsImZyYW1lIiwibm9kZSIsIm1vdmUiLCJkcmF3IiwiYm91bmNlIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlbmRlck5vZGVzIiwidngiLCJ2eSIsInJhZGl1cyIsInBvc2l0aW9uIiwiViIsInZlbG9jaXR5IiwiZGVsdGFUIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImFkZCIsInRpbWVzIiwiVmVjdG9yIiwib3RoZXIiLCJkdXAiLCJzdWJ0cmFjdCIsIm51bSIsIm11bHRpcGx5Iiwic3Fy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QUwsR0FBUyxLQUFLQSxDQUFkLEdBQWtCLEtBQUtHLENBQUwsR0FBUyxLQUFLQSxDQUExQyxDQUFQO0FBQ0Q7OztXQUVELHFCQUFZO0FBQ1YsVUFBSWMsTUFBTSxHQUFHLEtBQUtxQyxTQUFMLEVBQWI7O0FBQ0EsVUFBSXJDLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCQSxjQUFNLEdBQUcsQ0FBVDtBQUNBLGFBQUtqQixDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUtHLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBQ0QsV0FBS2lELFFBQUwsQ0FBYyxJQUFJbkMsTUFBbEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsc0JBQWFrQyxHQUFiLEVBQWtCO0FBQ2hCLGFBQU8sS0FBS0ksU0FBTCxHQUFpQkgsUUFBakIsQ0FBMEJELEdBQTFCLENBQVA7QUFDRDs7Ozs7O0FBR1lKLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5sZXQgbm9kZXMgPSBbXTtcblxuLy8gTGluZWFyIGludGVycG9sYXRpb25cbmZ1bmN0aW9uIGxlcnAobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuIG1heCAqIHYgKyBtaW4gKiAoMSAtIHYpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5vZGVzKG4gPSAxMDApIHtcbiAgbm9kZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgKiB3aWR0aDtcbiAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiBoZWlnaHQ7XG5cbiAgICBub2Rlcy5wdXNoKG5ldyBOb2RlKHgsIHkpKTtcbiAgfVxufVxucG9wdWxhdGVOb2RlcygpO1xuY29uc29sZS5sb2cobm9kZXMpO1xuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgY2xlYXIoKTtcbiAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGUubW92ZSgpO1xuICAgIG5vZGUuZHJhdygpO1xuICAgIG5vZGUuYm91bmNlKCk7XG4gIH1cbn1cblxuLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIE1JVCBsaWNlbnNlXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgbGFzdFRpbWUgPSAwO1xuICB2YXIgdmVuZG9ycyA9IFtcIm1zXCIsIFwibW96XCIsIFwid2Via2l0XCIsIFwib1wiXTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgfVxuXG4gIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gcmVuZGVyTm9kZXMoKSB7XG4gIGZyYW1lKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJOb2Rlcyk7XG59XG5yZW5kZXJOb2RlcygpO1xuIiwiaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHZ4LCB2eSkge1xuICAgIHRoaXMucmFkaXVzID0gMTA7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWKHgsIHkpO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVigwLjEsIDAuMik7XG4gICAgdGhpcy5kZWx0YVQgPSAyMDtcbiAgICB0aGlzLmluaXRpYWxYID0geDtcbiAgICB0aGlzLmluaXRpYWxZID0geTtcbiAgfVxuXG4gIGNsZWFyTm9kZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsNTYsMTAwKVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICAvLyBwb3NpdGlvbiA9IGluaXRpYWwgcG9zaXRpb24gKyB2ZWxvY2l0eSAqIGRlbHRhVGltZVxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkudGltZXModGhpcy5kZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIC8vIGlmIG91dHNpZGUgb2YgYm91bmRhcnksIGluc2VydCBiYWNrIGludG8gdGhlIGJveCBhdCB0aGUgYm91bmRhcnlcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXM7XG4gICAgfVxuICAgIC8vIFRvcCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGR1cCgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICBhZGQob3RoZXIpIHtcbiAgICB0aGlzLnggKz0gb3RoZXIueDtcbiAgICB0aGlzLnkgKz0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YnRyYWN0KG90aGVyKSB7XG4gICAgdGhpcy54IC09IG90aGVyLng7XG4gICAgdGhpcy55IC09IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtaW51cyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLnN1YnRyYWN0KG90aGVyKTtcbiAgfVxuXG4gIG11bHRpcGx5KG51bSkge1xuICAgIHRoaXMueCAqPSBudW07XG4gICAgdGhpcy55ICo9IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRpbWVzKG51bSkge1xuICAgIHJldHVybiB0aGlzLmR1cCgpLm11bHRpcGx5KG51bSk7XG4gIH1cblxuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGxldCBsZW5ndGggPSB0aGlzLm1hZ25pdHVkZSgpO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgICB0aGlzLnggPSAxO1xuICAgICAgdGhpcy55ID0gMDtcbiAgICB9XG4gICAgdGhpcy5tdWx0aXBseSgxIC8gbGVuZ3RoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldE1hZ25pdHVkZShudW0pIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemUoKS5tdWx0aXBseShudW0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=