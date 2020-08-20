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
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var canvas,
    ctx,
    flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;
var x = "black",
    y = 6;

function initialize() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500; // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  width = canvas.width;
  height = canvas.height;
  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e);
  }, false);
  canvas.addEventListener("mousedown", function (e) {
    findxy('down', e);
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    findxy('up', e);
  }, false);
  canvas.addEventListener("mouseout", function (e) {
    findxy('out', e);
  }, false);
}

function color(obj) {
  x = obj;
  if (x == "white") y = 14;else y = 2;
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

function erase() {
  var m = confirm("Erase all your hard work?");

  if (m) {
    ctx.clearRect(0, 0, width, height);
  }
}

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;
    flag = true;
    dot_flag = true;

    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = x;
      ctx.fillRect(currX, currY, 2, 2);
      ctx.closePath();
      dot_flag = false;
    }
  }

  if (res == 'up' || res == "out") {
    flag = false;
  }

  if (res == 'move') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      draw();
    }
  }
}

function download() {
  var download = document.getElementById("download");
  var image = document.getElementById("myCanvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}

function setRound() {
  ctx.lineCap = 'round';
  ctx.lineJoin = "round";
  ctx.strokeStyle = '#2b39c0';
}

function setSquare() {
  ctx.lineCap = 'butt';
  ctx.lineJoin = "miter";
  ctx.strokeStyle = '#c0392b';
}

document.getElementById("red").addEventListener("click", function () {
  return color("red");
});
document.getElementById("orange").addEventListener("click", function () {
  return color("orange");
});
document.getElementById("silica").addEventListener("click", function () {
  return color("yellow");
});
document.getElementById("green").addEventListener("click", function () {
  return color("green");
});
document.getElementById("water").addEventListener("click", function () {
  return color("blue");
});
document.getElementById("purple").addEventListener("click", function () {
  return color("purple");
});
document.getElementById("wall").addEventListener("click", function () {
  return color("black");
});
document.getElementById("void").addEventListener("click", function () {
  return color("white");
});
document.getElementById("garbage").addEventListener("click", function () {
  return erase();
});
document.getElementById("download").addEventListener("click", function () {
  return download();
});
document.getElementById("round").addEventListener("click", function () {
  return setRound();
});
document.getElementById("square").addEventListener("click", function () {
  return setSquare();
});
initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwiZmxhZyIsInByZXZYIiwiY3VyclgiLCJwcmV2WSIsImN1cnJZIiwiZG90X2ZsYWciLCJ4IiwieSIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmaW5keHkiLCJjb2xvciIsIm9iaiIsImRyYXciLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImNsb3NlUGF0aCIsImVyYXNlIiwibSIsImNvbmZpcm0iLCJjbGVhclJlY3QiLCJyZXMiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRvd25sb2FkIiwiaW1hZ2UiLCJ0b0RhdGFVUkwiLCJyZXBsYWNlIiwic2V0QXR0cmlidXRlIiwic2V0Um91bmQiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJzZXRTcXVhcmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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VCxDQUF3QixPQUF4QixFQUFpQ0ksZ0JBQWpDLENBQWtELE9BQWxELEVBQTJEO0FBQUEsU0FBTUcsS0FBSyxDQUFDLE1BQUQsQ0FBWDtBQUFBLENBQTNEO0FBQ0FSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0ksZ0JBQWxDLENBQW1ELE9BQW5ELEVBQTREO0FBQUEsU0FBTUcsS0FBSyxDQUFDLFFBQUQsQ0FBWDtBQUFBLENBQTVEO0FBQ0FSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0ksZ0JBQWhDLENBQWlELE9BQWpELEVBQTBEO0FBQUEsU0FBTUcsS0FBSyxDQUFDLE9BQUQsQ0FBWDtBQUFBLENBQTFEO0FBQ0FSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0ksZ0JBQWhDLENBQWlELE9BQWpELEVBQTBEO0FBQUEsU0FBTUcsS0FBSyxDQUFDLE9BQUQsQ0FBWDtBQUFBLENBQTFEO0FBQ0FSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixFQUFtQ0ksZ0JBQW5DLENBQW9ELE9BQXBELEVBQTZEO0FBQUEsU0FBTWEsS0FBSyxFQUFYO0FBQUEsQ0FBN0Q7QUFDQWxCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0ksZ0JBQXBDLENBQXFELE9BQXJELEVBQThEO0FBQUEsU0FBTXdCLFFBQVEsRUFBZDtBQUFBLENBQTlEO0FBQ0E3QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNJLGdCQUFqQyxDQUFrRCxPQUFsRCxFQUEyRDtBQUFBLFNBQU02QixRQUFRLEVBQWQ7QUFBQSxDQUEzRDtBQUNBbEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDSSxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQ7QUFBQSxTQUFNZ0MsU0FBUyxFQUFmO0FBQUEsQ0FBNUQ7QUFNQXRDLFVBQVUsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NjcmlwdFwiOyIsIlxuXG52YXIgY2FudmFzLCBjdHgsIGZsYWcgPSBmYWxzZSxcbiAgICBwcmV2WCA9IDAsXG4gICAgY3VyclggPSAwLFxuICAgIHByZXZZID0gMCxcbiAgICBjdXJyWSA9IDAsXG4gICAgZG90X2ZsYWcgPSBmYWxzZTtcblxudmFyIHggPSBcImJsYWNrXCIsXG4gICAgeSA9IDY7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2FudmFzJyk7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjYW52YXMud2lkdGggPSA1MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDUwMDtcbiAgICAvLyBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAvLyBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmaW5keHkoJ21vdmUnLCBlKVxuICAgIH0sIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmaW5keHkoJ2Rvd24nLCBlKVxuICAgIH0sIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZmluZHh5KCd1cCcsIGUpXG4gICAgfSwgZmFsc2UpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZmluZHh5KCdvdXQnLCBlKVxuICAgIH0sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gY29sb3Iob2JqKSB7XG4gICAgeCA9IG9iajtcbiAgICBpZiAoeCA9PSBcIndoaXRlXCIpIHkgPSAxNDtcbiAgICBlbHNlIHkgPSAyO1xufVxuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocHJldlgsIHByZXZZKTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0geDtcbiAgICBjdHgubGluZVdpZHRoID0geTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5mdW5jdGlvbiBlcmFzZSgpIHtcbiAgICB2YXIgbSA9IGNvbmZpcm0oXCJFcmFzZSBhbGwgeW91ciBoYXJkIHdvcms/XCIpO1xuICAgIGlmIChtKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGZpbmR4eShyZXMsIGUpIHtcbiAgICBpZiAocmVzID09ICdkb3duJykge1xuICAgICAgICBwcmV2WCA9IGN1cnJYO1xuICAgICAgICBwcmV2WSA9IGN1cnJZO1xuICAgICAgICBjdXJyWCA9IGUuY2xpZW50WCAtIGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICBjdXJyWSA9IGUuY2xpZW50WSAtIGNhbnZhcy5vZmZzZXRUb3A7XG5cbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIGRvdF9mbGFnID0gdHJ1ZTtcbiAgICAgICAgaWYgKGRvdF9mbGFnKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0geDtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjdXJyWCwgY3VyclksIDIsIDIpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgZG90X2ZsYWcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVzID09ICd1cCcgfHwgcmVzID09IFwib3V0XCIpIHtcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocmVzID09ICdtb3ZlJykge1xuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgcHJldlggPSBjdXJyWDtcbiAgICAgICAgICAgIHByZXZZID0gY3Vyclk7XG4gICAgICAgICAgICBjdXJyWCA9IGUuY2xpZW50WCAtIGNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgY3VyclkgPSBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wO1xuICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkb3dubG9hZCgpIHtcbiAgICB2YXIgZG93bmxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25sb2FkXCIpO1xuICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlDYW52YXNcIikudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpXG4gICAgICAgIC5yZXBsYWNlKFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpO1xuICAgIGRvd25sb2FkLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaW1hZ2UpO1xufVxuXG5mdW5jdGlvbiBzZXRSb3VuZCgpIHtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMmIzOWMwJztcbn1cblxuZnVuY3Rpb24gc2V0U3F1YXJlKCkge1xuICAgIGN0eC5saW5lQ2FwID0gJ2J1dHQnO1xuICAgIGN0eC5saW5lSm9pbiA9IFwibWl0ZXJcIjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2MwMzkyYic7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb2xvcihcInJlZFwiKSlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JhbmdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb2xvcihcIm9yYW5nZVwiKSlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lsaWNhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb2xvcihcInllbGxvd1wiKSlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JlZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbG9yKFwiZ3JlZW5cIikpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhdGVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb2xvcihcImJsdWVcIikpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB1cnBsZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29sb3IoXCJwdXJwbGVcIikpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbG9yKFwiYmxhY2tcIikpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvaWRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbG9yKFwid2hpdGVcIikpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhcmJhZ2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVyYXNlKCkpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvd25sb2FkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkb3dubG9hZCgpKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3VuZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2V0Um91bmQoKSlcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3F1YXJlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZXRTcXVhcmUoKSlcblxuXG5cblxuXG5pbml0aWFsaXplKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==