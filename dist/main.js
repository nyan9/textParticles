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
    key: "clearNode",
    value: function clearNode() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.clearNode();
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
    key: "frame",
    value: function frame() {
      this.move();
      this.bounce();
      this.draw();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.frame();
      setTimeout(this.animate, this.deltaT);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5vZGVzQXJyYXkiLCJsZXJwIiwibWluIiwibWF4IiwidiIsInBvcHVsYXRlTm9kZXMiLCJuIiwiaSIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInB1c2giLCJOb2RlIiwiY29uc29sZSIsImxvZyIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwibGVuZ3RoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsImlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJlbmRlck5vZGVzIiwibm9kZSIsImFuaW1hdGUiLCJyYWRpdXMiLCJwb3NpdGlvbiIsIlYiLCJ2ZWxvY2l0eSIsImRlbHRhVCIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJiaW5kIiwiY2xlYXJOb2RlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJjbG9zZVBhdGgiLCJmaWxsIiwiYWRkIiwidGltZXMiLCJtb3ZlIiwiYm91bmNlIiwiZHJhdyIsImZyYW1lIiwiVmVjdG9yIiwib3RoZXIiLCJudW0iLCJj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QUFHOztBQUFBOztBQUN4QixTQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7OztXQUVELGlCQUFRO0FBQ04sYUFBTyxJQUFJNkMsTUFBSixDQUFXLEtBQUtoRCxDQUFoQixFQUFtQixLQUFLRyxDQUF4QixDQUFQO0FBQ0Q7OztXQUVELGFBQUk4QyxLQUFKLEVBQVc7QUFDVCxXQUFLakQsQ0FBTCxJQUFVaUQsS0FBSyxDQUFDakQsQ0FBaEI7QUFDQSxXQUFLRyxDQUFMLElBQVU4QyxLQUFLLENBQUM5QyxDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7V0FFRCxtQkFBVThDLEtBQVYsRUFBaUI7QUFDZixXQUFLakQsQ0FBTCxJQUFVaUQsS0FBSyxDQUFDakQsQ0FBaEI7QUFDQSxXQUFLRyxDQUFMLElBQVU4QyxLQUFLLENBQUM5QyxDQUFoQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7V0FFRCxrQkFBUytDLEdBQVQsRUFBYztBQUNaLFdBQUtsRCxDQUFMLElBQVVrRCxHQUFWO0FBQ0EsV0FBSy9DLENBQUwsSUFBVStDLEdBQVY7QUFDQSxhQUFPLElBQVA7QUFDRDs7O1dBRUQsZUFBTUEsR0FBTixFQUFXO0FBQ1QsYUFBTyxLQUFLQyxLQUFMLEdBQWFDLFFBQWIsQ0FBc0JGLEdBQXRCLENBQVA7QUFDRDs7Ozs7O0FBR1lGLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbiIsImltcG9ydCBOb2RlIGZyb20gXCIuL25vZGVcIjtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jb25zdCB3aWR0aCA9IChjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jb25zdCBoZWlnaHQgPSAoY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCk7XG5sZXQgbm9kZXNBcnJheSA9IFtdO1xuXG4vLyBMaW5lYXIgaW50ZXJwb2xhdGlvblxuZnVuY3Rpb24gbGVycChtaW4sIG1heCwgdikge1xuICByZXR1cm4gbWF4ICogdiArIG1pbiAqICgxIC0gdik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlTm9kZXMobiA9IDEwMCkge1xuICBub2Rlc0FycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpICogd2lkdGg7XG4gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpICogaGVpZ2h0O1xuXG4gICAgbm9kZXNBcnJheS5wdXNoKG5ldyBOb2RlKHgsIHkpKTtcbiAgfVxufVxucG9wdWxhdGVOb2RlcygxKTtcbmNvbnNvbGUubG9nKG5vZGVzQXJyYXkpO1xuXG5mdW5jdGlvbiBjbGVhckNhbnZhcygpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbi8vIE1JVCBsaWNlbnNlXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgbGFzdFRpbWUgPSAwO1xuICB2YXIgdmVuZG9ycyA9IFtcIm1zXCIsIFwibW96XCIsIFwid2Via2l0XCIsIFwib1wiXTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID1cbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXSB8fFxuICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyBcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtcbiAgfVxuXG4gIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gIGlmICghd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKVxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gcmVuZGVyTm9kZXMoKSB7XG4gIGZvciAobGV0IG5vZGUgb2Ygbm9kZXNBcnJheSkge1xuICAgIG5vZGUuYW5pbWF0ZSgpO1xuICB9XG4gIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJOb2Rlcyk7XG59XG5yZW5kZXJOb2RlcygpO1xuIiwiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuaW1wb3J0IFYgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5yYWRpdXMgPSA2MDtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmRlbHRhVCA9IDIwO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGVhck5vZGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNsZWFyTm9kZSgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsNTYsMTAwKVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICAvLyBwb3NpdGlvbiA9IGluaXRpYWwgcG9zaXRpb24gKyB2ZWxvY2l0eSAqIGRlbHRhVGltZVxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkudGltZXModGhpcy5kZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgIH1cbiAgICAvLyBUb3AgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgIH1cbiAgICAvLyBMZWZ0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICB9XG4gIH1cblxuICBmcmFtZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgICB0aGlzLmJvdW5jZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmZyYW1lKCk7XG4gICAgc2V0VGltZW91dCh0aGlzLmFuaW1hdGUsIHRoaXMuZGVsdGFUKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgYWRkKG90aGVyKSB7XG4gICAgdGhpcy54ICs9IG90aGVyLng7XG4gICAgdGhpcy55ICs9IG90aGVyLnk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdWJzdHJhY3Qob3RoZXIpIHtcbiAgICB0aGlzLnggLT0gb3RoZXIueDtcbiAgICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG11bHRpcGx5KG51bSkge1xuICAgIHRoaXMueCAqPSBudW07XG4gICAgdGhpcy55ICo9IG51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRpbWVzKG51bSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkubXVsdGlwbHkobnVtKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3I7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9