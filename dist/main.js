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
console.log(nodesArray); // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9ub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIm5vZGVzQXJyYXkiLCJsZXJwIiwibWluIiwibWF4IiwidiIsInBvcHVsYXRlTm9kZXMiLCJuIiwiaSIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsInB1c2giLCJOb2RlIiwiY29uc29sZSIsImxvZyIsImxhc3RUaW1lIiwidmVuZG9ycyIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJlbGVtZW50IiwiY3VyclRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVUb0NhbGwiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJyZW5kZXJOb2RlcyIsIm5vZGUiLCJhbmltYXRlIiwicmFkaXVzIiwicG9zaXRpb24iLCJWIiwidmVsb2NpdHkiLCJkZWx0YVQiLCJpbml0aWFsWCIsImluaXRpYWxZIiwiYmluZCIsImNsZWFyUmVjdCIsImNsZWFyTm9kZSIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImFkZCIsInRpbWVzIiwibW92ZSIsImJvdW5jZSIsImRyYXciLCJmcmFtZSIsIlZlY3RvciIsIm90aGVyIiwiZHVwIiwic3VidHJhY3QiLCJudW0i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QyxNQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7V0FFRCxzQkFBYXlDLEdBQWIsRUFBa0I7QUFDaEIsYUFBTyxLQUFLSSxTQUFMLEdBQWlCSCxRQUFqQixDQUEwQkQsR0FBMUIsQ0FBUDtBQUNEOzs7Ozs7QUFHWUoscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuIiwiaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZVwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNvbnN0IHdpZHRoID0gKGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoKTtcbmNvbnN0IGhlaWdodCA9IChjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0KTtcbmxldCBub2Rlc0FycmF5ID0gW107XG5cbi8vIExpbmVhciBpbnRlcnBvbGF0aW9uXG5mdW5jdGlvbiBsZXJwKG1pbiwgbWF4LCB2KSB7XG4gIHJldHVybiBtYXggKiB2ICsgbWluICogKDEgLSB2KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOb2RlcyhuID0gMTAwKSB7XG4gIG5vZGVzQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgKiB3aWR0aDtcbiAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiBoZWlnaHQ7XG5cbiAgICBub2Rlc0FycmF5LnB1c2gobmV3IE5vZGUoeCwgeSkpO1xuICB9XG59XG5wb3B1bGF0ZU5vZGVzKDEpO1xuY29uc29sZS5sb2cobm9kZXNBcnJheSk7XG5cbi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RUaW1lID0gMDtcbiAgdmFyIHZlbmRvcnMgPSBbXCJtc1wiLCBcIm1velwiLCBcIndlYmtpdFwiLCBcIm9cIl07XG4gIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsreCkge1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSArIFwiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO1xuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XG4gICAgICB3aW5kb3dbdmVuZG9yc1t4XSArIFwiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl0gfHxcbiAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgXCJDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl07XG4gIH1cblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKTtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIHJlbmRlck5vZGVzKCkge1xuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzQXJyYXkpIHtcbiAgICBub2RlLmFuaW1hdGUoKTtcbiAgfVxuICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTm9kZXMpO1xufVxucmVuZGVyTm9kZXMoKTtcbiIsImltcG9ydCBWIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy5yYWRpdXMgPSA2MDtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFYoeCwgeSk7XG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWKDAuMSwgMC4yKTtcbiAgICB0aGlzLmRlbHRhVCA9IDIwO1xuICAgIHRoaXMuaW5pdGlhbFggPSB4O1xuICAgIHRoaXMuaW5pdGlhbFkgPSB5O1xuXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGVhck5vZGUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNsZWFyTm9kZSgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigyNTUsNTYsMTAwKVwiO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICAvLyBwb3NpdGlvbiA9IGluaXRpYWwgcG9zaXRpb24gKyB2ZWxvY2l0eSAqIGRlbHRhVGltZVxuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkudGltZXModGhpcy5kZWx0YVQpKTtcbiAgfVxuXG4gIGJvdW5jZSgpIHtcbiAgICAvLyBCb3R0b20gZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ID49IGNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICB9XG4gICAgLy8gUmlnaHQgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ID49IGNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgIH1cbiAgICAvLyBUb3AgZWRnZSBjb2xsaXNpb25cbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xuICAgIH1cbiAgICAvLyBMZWZ0IGVkZ2UgY29sbGlzaW9uXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCA8PSB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICB9XG4gIH1cblxuICBmcmFtZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgICB0aGlzLmJvdW5jZSgpO1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLmZyYW1lKCk7XG4gICAgc2V0VGltZW91dCh0aGlzLmFuaW1hdGUsIHRoaXMuZGVsdGFUKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuIiwiY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZHVwKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGFkZChvdGhlcikge1xuICAgIHRoaXMueCArPSBvdGhlci54O1xuICAgIHRoaXMueSArPSBvdGhlci55O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3VidHJhY3Qob3RoZXIpIHtcbiAgICB0aGlzLnggLT0gb3RoZXIueDtcbiAgICB0aGlzLnkgLT0gb3RoZXIueTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG1pbnVzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkuc3VidHJhY3Qob3RoZXIpO1xuICB9XG5cbiAgbXVsdGlwbHkobnVtKSB7XG4gICAgdGhpcy54ICo9IG51bTtcbiAgICB0aGlzLnkgKj0gbnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdGltZXMobnVtKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVwKCkubXVsdGlwbHkobnVtKTtcbiAgfVxuXG4gIG1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBub3JtYWxpemUoKSB7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIHRoaXMueCA9IDE7XG4gICAgICB0aGlzLnkgPSAwO1xuICAgIH1cbiAgICB0aGlzLm11bHRpcGx5KDEgLyBsZW5ndGgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TWFnbml0dWRlKG51bSkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5KG51bSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==