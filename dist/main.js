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
var nodesArray = []; // Linear interpolation

function lerp(min, max, v) {
  return max * v + min * (1 - v);
}

function populateNodes() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  nodesArray = [];

  for (var i = 0; i < n; i++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    nodesArray.push(new _node__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
  }
}

populateNodes(1);
console.log(nodesArray);

function clearCanvas() {
  ctx.clearRect(0, 0, width, height);
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
  for (var _i = 0, _nodesArray = nodesArray; _i < _nodesArray.length; _i++) {
    var node = _nodesArray[_i];
    node.animate();
  } // requestAnimationFrame(renderNodes);

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

    this.radius = 60;
    this.position = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["default"](0.1, 0.2);
    this.deltaT = 20;
    this.initialX = x;
    this.initialY = y;
    this.animate = this.animate.bind(this);
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
    value: function move() {
      // position = initial position + velocity * deltaTime
      this.position.add(this.velocity.times(this.deltaT));
    }
  }, {
    key: "bounce",
    value: function bounce() {
      // Bottom edge collision
      if (this.position.y >= canvas.height - this.radius) {
        this.velocity.y = -this.velocity.y;
      } // Right edge collision


      if (this.position.x >= canvas.width - this.radius) {
        this.velocity.x = -this.velocity.x;
      } // Top edge collision


      if (this.position.y <= this.radius) {
        this.velocity.y = -this.velocity.y;
      } // Left edge collision


      if (this.position.x <= this.radius) {
        this.velocity.x = -this.velocity.x;
      }
    }
  }, {
    key: "clearNode",
    value: function clearNode() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.clearNode();
      setTimeout(this.animate, this.deltaT);
      this.move();
      this.bounce();
      this.draw();
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
    key: "clone",
    value: function clone() {
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
    key: "substract",
    value: function substract(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
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
      return this.clone().multiply(num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5vZGVzQXJyYXkiLCJsZXJwIiwibWluIiwibWF4IiwidiIsInBvcHVsYXRlTm9kZXMiLCJuIiwiaSIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInB1c2giLCJOb2RlIiwiY29uc29sZSIsImxvZyIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlbmRlck5vZGVzIiwibm9kZSIsImFuaW1hdGUiLCJyYWRpdXMiLCJwb3NpdGlvbiIsIlYiLCJ2ZWxvY2l0eSIsImRlbHRhVCIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJiaW5kIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiYWRkIiwidGltZXMiLCJjbGVhck5vZGUiLCJtb3ZlIiwiYm91bmNlIiwiZHJhdyIsIlZlY3RvciIsIm90aGVyIiwibnVtIiwiY2xvbmUiLCJt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U0FBS0csQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7V0FFRCxpQkFBUTtBQUNOLGFBQU8sSUFBSTRDLE1BQUosQ0FBVyxLQUFLL0MsQ0FBaEIsRUFBbUIsS0FBS0csQ0FBeEIsQ0FBUDtBQUNEOzs7V0FFRCxhQUFJNkMsS0FBSixFQUFXO0FBQ1QsV0FBS2hELENBQUwsSUFBVWdELEtBQUssQ0FBQ2hELENBQWhCO0FBQ0EsV0FBS0csQ0FBTCxJQUFVNkMsS0FBSyxDQUFDN0MsQ0FBaEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsbUJBQVU2QyxLQUFWLEVBQWlCO0FBQ2YsV0FBS2hELENBQUwsSUFBVWdELEtBQUssQ0FBQ2hELENBQWhCO0FBQ0EsV0FBS0csQ0FBTCxJQUFVNkMsS0FBSyxDQUFDN0MsQ0FBaEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsa0JBQVM4QyxHQUFULEVBQWM7QUFDWixXQUFLakQsQ0FBTCxJQUFVaUQsR0FBVjtBQUNBLFdBQUs5QyxDQUFMLElBQVU4QyxHQUFWO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztXQUVELGVBQU1BLEdBQU4sRUFBVztBQUNULGFBQU8sS0FBS0MsS0FBTCxHQUFhQyxRQUFiLENBQXNCRixHQUF0QixDQUFQO0FBQ0Q7Ozs7OztBQUdZRixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvY2FudmFzXCI7XG4iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3Qgd2lkdGggPSAoY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGgpO1xuY29uc3QgaGVpZ2h0ID0gKGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xubGV0IG5vZGVzQXJyYXkgPSBbXTtcblxuLy8gTGluZWFyIGludGVycG9sYXRpb25cbmZ1bmN0aW9uIGxlcnAobWluLCBtYXgsIHYpIHtcbiAgcmV0dXJuIG1heCAqIHYgKyBtaW4gKiAoMSAtIHYpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZU5vZGVzKG4gPSAxMDApIHtcbiAgbm9kZXNBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIHdpZHRoO1xuICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSAqIGhlaWdodDtcblxuICAgIG5vZGVzQXJyYXkucHVzaChuZXcgTm9kZSh4LCB5KSk7XG4gIH1cbn1cbnBvcHVsYXRlTm9kZXMoMSk7XG5jb25zb2xlLmxvZyhub2Rlc0FycmF5KTtcblxuZnVuY3Rpb24gY2xlYXJDYW52YXMoKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG59XG5cbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RUaW1lID0gMDtcbiAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gIH1cblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzQXJyYXkpIHtcbiAgICBub2RlLmFuaW1hdGUoKTtcbiAgfVxuICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTm9kZXMpO1xufVxucmVuZGVyTm9kZXMoKTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMucmFkaXVzID0gNjA7XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWKHgsIHkpO1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVigwLjEsIDAuMik7XG4gICAgdGhpcy5kZWx0YVQgPSAyMDtcbiAgICB0aGlzLmluaXRpYWxYID0geDtcbiAgICB0aGlzLmluaXRpYWxZID0geTtcblxuICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMjU1LDU2LDEwMClcIjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgLy8gcG9zaXRpb24gPSBpbml0aWFsIHBvc2l0aW9uICsgdmVsb2NpdHkgKiBkZWx0YVRpbWVcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LnRpbWVzKHRoaXMuZGVsdGFUKSk7XG4gIH1cblxuICBib3VuY2UoKSB7XG4gICAgLy8gQm90dG9tIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA+PSBjYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgfVxuICAgIC8vIFJpZ2h0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA+PSBjYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICB9XG4gICAgLy8gVG9wIGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICB9XG4gICAgLy8gTGVmdCBlZGdlIGNvbGxpc2lvblxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPD0gdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJOb2RlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5jbGVhck5vZGUoKTtcbiAgICBzZXRUaW1lb3V0KHRoaXMuYW5pbWF0ZSwgdGhpcy5kZWx0YVQpO1xuICAgIHRoaXMubW92ZSgpO1xuICAgIHRoaXMuYm91bmNlKCk7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcbiIsImNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGFkZChvdGhlcikge1xuICAgIHRoaXMueCArPSBvdGhlci54O1xuICAgIHRoaXMueSArPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3Vic3RyYWN0KG90aGVyKSB7XG4gICAgdGhpcy54IC09IG90aGVyLng7XG4gICAgdGhpcy55IC09IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWx0aXBseShudW0pIHtcbiAgICB0aGlzLnggKj0gbnVtO1xuICAgIHRoaXMueSAqPSBudW07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aW1lcyhudW0pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm11bHRpcGx5KG51bSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==