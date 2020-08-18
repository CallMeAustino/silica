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
    y = 2;

function initialize() {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("webgl");
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

function material(obj) {
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
  // var m = confirm("Want to clear");
  // if (m) {
  ctx.clearRect(0, 0, width, height);
  document.getElementById("myCanvas").style.display = "none"; // }
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

document.getElementById("water").addEventListener("click", function () {
  return material("blue");
});
document.getElementById("wall").addEventListener("click", function () {
  return material("black");
});
document.getElementById("silica").addEventListener("click", function () {
  return material("yellow");
});
document.getElementById("void").addEventListener("click", function () {
  return material("white");
});
initialize();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiY3R4IiwiZmxhZyIsInByZXZYIiwiY3VyclgiLCJwcmV2WSIsImN1cnJZIiwiZG90X2ZsYWciLCJ4IiwieSIsImluaXRpYWxpemUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmaW5keHkiLCJtYXRlcmlhbCIsIm9iaiIsImRyYXciLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImNsb3NlUGF0aCIsImVyYXNlIiwiY2xlYXJSZWN0Iiwic3R5bGUiLCJkaXNwbGF5IiwicmVzIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QVIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDSSxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQ7QUFBQSxTQUFNRyxRQUFRLENBQUMsUUFBRCxDQUFkO0FBQUEsQ0FBNUQ7QUFDQVIsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLEVBQWdDSSxnQkFBaEMsQ0FBaUQsT0FBakQsRUFBMEQ7QUFBQSxTQUFNRyxRQUFRLENBQUMsT0FBRCxDQUFkO0FBQUEsQ0FBMUQ7QUFFQVQsVUFBVSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc2NyaXB0XCI7IiwiXG5cbnZhciBjYW52YXMsIGN0eCwgZmxhZyA9IGZhbHNlLFxuICAgIHByZXZYID0gMCxcbiAgICBjdXJyWCA9IDAsXG4gICAgcHJldlkgPSAwLFxuICAgIGN1cnJZID0gMCxcbiAgICBkb3RfZmxhZyA9IGZhbHNlO1xuXG52YXIgeCA9IFwiYmxhY2tcIixcbiAgICB5ID0gMjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDYW52YXMnKTtcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuICAgIHdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmaW5keHkoJ21vdmUnLCBlKVxuICAgIH0sIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmaW5keHkoJ2Rvd24nLCBlKVxuICAgIH0sIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZmluZHh5KCd1cCcsIGUpXG4gICAgfSwgZmFsc2UpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZmluZHh5KCdvdXQnLCBlKVxuICAgIH0sIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gbWF0ZXJpYWwob2JqKSB7XG4gICAgeCA9IG9iajtcbiAgICBpZiAoeCA9PSBcIndoaXRlXCIpIHkgPSAxNDtcbiAgICBlbHNlIHkgPSAyO1xufVxuXG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8ocHJldlgsIHByZXZZKTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0geDtcbiAgICBjdHgubGluZVdpZHRoID0geTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5mdW5jdGlvbiBlcmFzZSgpIHtcbiAgICAvLyB2YXIgbSA9IGNvbmZpcm0oXCJXYW50IHRvIGNsZWFyXCIpO1xuICAgIC8vIGlmIChtKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyB9XG59XG5mdW5jdGlvbiBmaW5keHkocmVzLCBlKSB7XG4gICAgaWYgKHJlcyA9PSAnZG93bicpIHtcbiAgICAgICAgcHJldlggPSBjdXJyWDtcbiAgICAgICAgcHJldlkgPSBjdXJyWTtcbiAgICAgICAgY3VyclggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICAgICAgY3VyclkgPSBlLmNsaWVudFkgLSBjYW52YXMub2Zmc2V0VG9wO1xuXG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICBkb3RfZmxhZyA9IHRydWU7XG4gICAgICAgIGlmIChkb3RfZmxhZykge1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHg7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY3VyclgsIGN1cnJZLCAyLCAyKTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGRvdF9mbGFnID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlcyA9PSAndXAnIHx8IHJlcyA9PSBcIm91dFwiKSB7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlcyA9PSAnbW92ZScpIHtcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHByZXZYID0gY3Vyclg7XG4gICAgICAgICAgICBwcmV2WSA9IGN1cnJZO1xuICAgICAgICAgICAgY3VyclggPSBlLmNsaWVudFggLSBjYW52YXMub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGN1cnJZID0gZS5jbGllbnRZIC0gY2FudmFzLm9mZnNldFRvcDtcbiAgICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXRlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbWF0ZXJpYWwoXCJibHVlXCIpKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWxsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtYXRlcmlhbChcImJsYWNrXCIpKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWxpY2FcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1hdGVyaWFsKFwieWVsbG93XCIpKVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2lkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtYXRlcmlhbChcIndoaXRlXCIpKVxuXG5pbml0aWFsaXplKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==