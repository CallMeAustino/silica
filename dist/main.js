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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var elements = {
  eraser: {
    hex: "#000000",
    red: 0,
    green: 0,
    blue: 0,
    density: 0,
    gravity: 0,
    slip: 0,
    slide: 0,
    scatter: 0
  },
  wall: {
    hex: "c0c0c0",
    red: 192,
    green: 192,
    blue: 192,
    density: 1,
    gravity: 0,
    slip: 0,
    slide: 0,
    scatter: 0,
    immobile: true
  },
  sand: {
    hex: "#c2b280",
    red: 194,
    green: 178,
    blue: 128,
    density: 0.7,
    gravity: 0.8,
    slip: 0,
    slide: 0.8,
    scatter: 0
  },
  water: {
    hex: "#6BCAE2",
    red: 107,
    green: 202,
    blue: 226,
    density: 0.5,
    gravity: 0.8,
    slip: 0.95,
    slide: 0,
    scatter: 0.35
  }
};
var elementId = 0;

for (var elementName in elements) {
  elements[elementName].id = elementId++;
}

var defaultElement = elements.eraser;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function newBuffer(width, height, fill) {
  var buffer = [];
  buffer.width = width;
  buffer.height = height;

  for (var i = 0; i < width * height; i++) {
    buffer.push(fill);
  }

  return buffer;
}

function newTexture(gl, pixels) {
  return twgl.createTexture(gl, {
    target: gl.TEXTURE_2D,
    width: pixels.width,
    height: pixels.height,
    minMag: gl.NEAREST,
    format: gl.RGB,
    src: pixels
  });
}

function newPixelData(buffer) {
  var textureWidth = buffer.width;
  var textureHeight = buffer.height;
  var pixels = new Uint8Array(textureWidth * textureHeight * 3);
  pixels.width = textureWidth;
  pixels.height = textureHeight;
  return blitPixelData(pixels, buffer);
}

function blitPixelData(pixels, buffer) {
  var j = 0;

  for (var i = 0; i < buffer.length; i++) {
    pixels[j++] = Math.floor(buffer[i].red - 255);
    pixels[j++] = Math.floor(buffer[i].green - 255);
    pixels[j++] = Math.floor(buffer[i].blue - 255);
  }

  return pixels;
} //duplication


function updateBuffers(timestamp, timeBuffer, readBuffer, writeBuffer) {
  var allNeighbors = [-readBuffer.width - 1, -readBuffer.width, -readBuffer.width + 1, -1, +1, +readBuffer.width - 1, +readBuffer.width, +readBuffer.width + 1];
  var westEdgeNeighbors = [-readBuffer.width, -readBuffer.width + 1, +1, +readBuffer.width, +readBuffer.width + 1];
  var eastEdgeNeighbors = [-readBuffer.width - 1, -readBuffer.width, -1, +readBuffer.width - 1, +readBuffer.width];
  var mode = timestamp % 2; //modifies how often buffers are redrawn

  var increment = mode ? -1 : 1;
  var totalCells = readBuffer.width * readBuffer.height;
  var i = mode * (totalCells - 1);
  var west = i - 1;
  var east = i + 1;
  var north = i - readBuffer.width;
  var south = i + readBuffer.width;

  while (i >= 0 && i < totalCells) {
    var random = Math.random();

    if (timeBuffer[i] === timestamp) {
      i += increment;
      north += increment;
      south += increment;
      east += increment;
      west += increment;
      continue;
    }

    ;
    var cell = readBuffer[i];
    var northwest = north - 1;
    var northeast = north + 1;
    var southwest = south - 1;
    var southeast = south + 1;
    var inRow = i % readBuffer.width;
    var westEdge = inRow === 0;
    var eastEdge = inRow === readBuffer.width - 1;
    var slipRandom = Math.random();

    if (cell.gravity > 0 && south < totalCells && !readBuffer[south].immobile && cell.density > readBuffer[south].density) {
      if (timeBuffer[south] < timestamp && cell.gravity > random) {
        writeBuffer[i] = readBuffer[south];
        writeBuffer[south] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[south] = timestamp;
      }

      random = Math.random();
    } else if (cell.gravity < 0 && north >= 0 && !readBuffer[north].immobile && cell.density < readBuffer[north].density) {
      if (timeBuffer[north] < timestamp && cell.gravity < -random) {
        writeBuffer[i] = readBuffer[north];
        writeBuffer[north] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[north] = timestamp;
      }

      random = Math.random();
    } else if (cell.gravity && cell.slide > random) {
      var westStep = cell.gravity > 0 ? southwest : northwest;
      var eastStep = cell.gravity > 0 ? southeast : northeast;
      var westAllowed = !westEdge && westStep >= 0 && westStep < totalCells && !readBuffer[westStep].immobile && (cell.gravity > 0 ? cell.density > readBuffer[westStep].density : cell.density < readBuffer[westStep].density);
      var eastAllowed = !eastEdge && eastStep >= 0 && eastStep < totalCells && !readBuffer[eastStep].immobile && (cell.gravity > 0 ? cell.density > readBuffer[eastStep].density : cell.density < readBuffer[eastStep].density);

      if (westAllowed && (!eastAllowed || Math.random() < 0.5)) {
        writeBuffer[i] = readBuffer[westStep];
        writeBuffer[westStep] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[westStep] = timestamp;
      } else if (eastAllowed) {
        writeBuffer[i] = readBuffer[eastStep];
        writeBuffer[eastStep] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[eastStep] = timestamp;
      }

      random = Math.random();
    } else if (cell.slip > slipRandom && (cell.gravity > 0 && south < totalCells && timeBuffer[south] < timestamp - 2 || cell.gravity < 0 && north >= 0 && timeBuffer[north] < timestamp - 2)) {
      var westBound = i - i % readBuffer.width;
      var eastBound = westBound + readBuffer.width - 1;
      var westCell = i;
      var eastCell = i;

      var _westStep = cell.gravity > 0 ? south : north;

      var _eastStep = _westStep;
      var westUnder = _westStep + readBuffer.width;
      var eastUnder = westUnder;
      var westOpen = false;
      var eastOpen = false;
      var lastWest = 0;
      var lastEast = 0;

      if (cell.gravity > 0) {
        while (westCell > westBound && _westStep < totalCells - 1) {
          westCell--;
          _westStep--;
          westUnder--;
          if (readBuffer[westCell].immobile || cell.density < readBuffer[westCell].density) break;

          if (!readBuffer[_westStep].immobile && cell.density > readBuffer[_westStep].density) {
            if (timeBuffer[_westStep] < timestamp) {
              westOpen = true;
              lastWest = _westStep;
            }

            if (Math.random() < 0.25 || westUnder < totalCells && !readBuffer[westUnder].immobile && cell.density > readBuffer[westUnder].density) break;
          }
        }

        while (eastCell < eastBound && _eastStep < totalCells - 1) {
          eastCell++;
          _eastStep++;
          eastUnder++;
          if (readBuffer[eastCell].immobile || cell.density < readBuffer[eastCell].density) break;

          if (!readBuffer[_eastStep].immobile && cell.density > readBuffer[_eastStep].density) {
            if (timeBuffer[_eastStep] < timestamp) {
              eastOpen = true;
              lastEast = _eastStep;
            }

            if (Math.random() < 0.25 || eastUnder < totalCells && !readBuffer[eastUnder].immobile && cell.density > readBuffer[eastUnder].density) break;
          }
        }
      } else {}

      var swapTarget = void 0;

      if (westOpen && eastOpen) {
        swapTarget = Math.random() < 0.5 ? lastWest : lastEast;
      } else if (westOpen) {
        swapTarget = lastWest;
      } else if (eastOpen) {
        swapTarget = lastEast;
      }

      if (swapTarget !== undefined) {
        writeBuffer[i] = readBuffer[swapTarget];
        writeBuffer[swapTarget] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[swapTarget] = timestamp;
      }

      random = Math.random();
    } else if (cell.scatter > random) {
      var _westAllowed = !westEdge && timeBuffer[west] < timestamp && !readBuffer[west].immobile && (cell.gravity > 0 ? cell.density >= readBuffer[west].density : cell.density <= readBuffer[west].density);

      var _eastAllowed = !eastEdge && timeBuffer[east] < timestamp && !readBuffer[east].immobile && (cell.gravity > 0 ? cell.density >= readBuffer[east].density : cell.density <= readBuffer[east].density);

      if (_westAllowed && (!_eastAllowed || Math.random() < 0.5)) {
        writeBuffer[i] = readBuffer[west];
        writeBuffer[west] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[west] = timestamp;
      } else if (_eastAllowed) {
        writeBuffer[i] = readBuffer[east];
        writeBuffer[east] = cell;
        timeBuffer[i] = timestamp;
        timeBuffer[east] = timestamp;
      }

      random = Math.random();
    }

    if (timeBuffer[i] < timestamp) {
      writeBuffer[i] = readBuffer[i];
    }

    i += increment;
    north += increment;
    south += increment;
    east += increment;
    west += increment;
  }
}

var vertexShader = "\n    precision mediump float;\n    attribute vec2 a_position;\n    varying vec2 v_position;\n    void main(){\n        v_position = a_position;\n        gl_Position = vec4(\n            a_position.x * 2.0 - 1.0, v_position.y * -2.0 + 1.0, 0.0, 1.0\n        );\n    }\n";
var fragmentShader = "\n    precision mediump float;\n    uniform sampler2D u_texture;\n    varying vec2 v_position;\n    void main(){\n        gl_FragColor = texture2D(u_texture, v_position);\n    }\n";

function start() {
  var canvas = document.getElementById("myCanvas");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  var gl = twgl.getWebGLContext(canvas, {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false
  });
  twgl.setDefaults({
    textureColor: [1, 0, 0, 1]
  });
  twgl.setDefaults({
    attribPrefix: 'a_'
  });
  gl.enable(gl.CULL_FACE); //removes non visible triangles before rasterization

  gl.clearColor(0, 0, 0, 1);
  var bufferWidth = 128;
  var bufferHeight = 128;
  var currentBuffer = newBuffer(bufferWidth, bufferHeight, defaultElement);
  var reserveBuffer = newBuffer(bufferWidth, bufferHeight, defaultElement);
  var timeBuffer = newBuffer(bufferWidth, bufferHeight, 0);
  var pixels = newPixelData(currentBuffer);
  var texture = newTexture(gl, pixels);
  var programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);
  gl.useProgram(programInfo.program);
  twgl.setUniforms(programInfo, {
    u_texture: texture
  });
  var bufferInfo = twgl.createBufferInfoFromArrays(gl, {
    position: {
      numComponents: 2,
      data: [0, 0, 0, 1, 1, 0, 1, 1]
    }
  });
  var frame = 1;
  var drawing = false;
  var selectedElement = elements.wall;
  var lastMouseEvent = undefined;

  function drawAtMouse(event) {
    var rect = canvas.getBoundingClientRect();
    var x = (event.clientX - rect.left) / rect.width;
    var y = (event.clientY - rect.top) / rect.height;

    if (x >= 0 && y >= 0 && x < 1 && y < 1) {
      var i = Math.floor(x * bufferWidth);
      var j = Math.floor(y * bufferHeight);

      for (var brushX = -1; brushX < 1; brushX++) {
        for (var brushY = -1; brushY < 1; brushY++) {
          var drawX = i + brushX;
          var drawY = j + brushY;

          if (drawX >= 0 && drawY >= 0 && drawX < bufferWidth && drawY < bufferHeight) {
            currentBuffer[drawX + drawY * bufferWidth] = selectedElement;
          }
        }
      }
    }
  }

  canvas.addEventListener("mousedown", function (event) {
    drawing = true;
    lastMouseEvent = event;
  }, false);
  canvas.addEventListener("mousemove", function (event) {
    lastMouseEvent = event;
  }, false);
  canvas.addEventListener("mouseup", function (event) {
    drawing = false;
  }, false);
  canvas.addEventListener("mouseout", function (event) {
    drawing = false;
  }, false);
  var elementButtons = [];

  var _loop = function _loop(_elementName) {
    var element = elements[_elementName];

    if (!element.hidden) {
      var button = document.createElement("div");
      elementButtons.push(button);
      var label = document.createTextNode(_elementName);
      button.appendChild(label);
      var hex = rgbToHex(element.red, element.green, element.blue);
      button.classList.add("elementButton");
      button.style = "background-color: ".concat(hex, ";");
      document.getElementById("elementButtons").appendChild(button);

      button.onclick = function (event) {
        selectedElement = element;

        var _iterator = _createForOfIteratorHelper(elementButtons),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var other = _step.value;
            other.classList.remove("elementButtonSelected");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        button.classList.add("elementButtonSelected");
      };
    }
  };

  for (var _elementName in elements) {
    _loop(_elementName);
  }

  var update = function update() {
    // Draw to buffer
    if (drawing) drawAtMouse(lastMouseEvent); // Update game state

    updateBuffers(frame, timeBuffer, currentBuffer, reserveBuffer);
    var tempBuffer = currentBuffer;
    currentBuffer = reserveBuffer;
    reserveBuffer = tempBuffer; // Update texture

    blitPixelData(pixels, currentBuffer);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, bufferWidth, bufferHeight, gl.RGB, gl.UNSIGNED_BYTE, pixels); // Render

    twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    twgl.drawBufferInfo(gl, bufferInfo, gl.TRIANGLE_STRIP); // Ready for next frame

    requestAnimationFrame(update);
    frame++;
  };

  requestAnimationFrame(update);
}

window.onload = start;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwibmFtZXMiOlsiZWxlbWVudHMiLCJlcmFzZXIiLCJoZXgiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJkZW5zaXR5IiwiZ3Jhdml0eSIsInNsaXAiLCJzbGlkZSIsInNjYXR0ZXIiLCJ3YWxsIiwiaW1tb2JpbGUiLCJzYW5kIiwid2F0ZXIiLCJlbGVtZW50SWQiLCJlbGVtZW50TmFtZSIsImlkIiwiZGVmYXVsdEVsZW1lbnQiLCJjb21wb25lbnRUb0hleCIsImMiLCJ0b1N0cmluZyIsImxlbmd0aCIsInJnYlRvSGV4IiwiciIsImciLCJiIiwibmV3QnVmZmVyIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwiYnVmZmVyIiwiaSIsInB1c2giLCJuZXdUZXh0dXJlIiwiZ2wiLCJwaXhlbHMiLCJ0d2dsIiwiY3JlYXRlVGV4dHVyZSIsInRhcmdldCIsIlRFWFRVUkVfMkQiLCJtaW5NYWciLCJORUFSRVNUIiwiZm9ybWF0IiwiUkdCIiwic3JjIiwibmV3UGl4ZWxEYXRhIiwidGV4dHVyZVdpZHRoIiwidGV4dHVyZUhlaWdodCIsIlVpbnQ4QXJyYXkiLCJibGl0UGl4ZWxEYXRhIiwiaiIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZUJ1ZmZlcnMiLCJ0aW1lc3RhbXAiLCJ0aW1lQnVmZmVyIiwicmVhZEJ1ZmZlciIsIndyaXRlQnVmZmVyIiwiYWxsTmVpZ2hib3JzIiwid2VzdEVkZ2VOZWlnaGJvcnMiLCJlYXN0RWRnZU5laWdoYm9ycyIsIm1vZGUiLCJpbmNyZW1lbnQiLCJ0b3RhbENlbGxzIiwid2VzdCIsImVhc3QiLCJub3J0aCIsInNvdXRoIiwicmFuZG9tIiwiY2VsbCIsIm5vcnRod2VzdCIsIm5vcnRoZWFzdCIsInNvdXRod2VzdCIsInNvdXRoZWFzdCIsImluUm93Iiwid2VzdEVkZ2UiLCJlYXN0RWRnZSIsInNsaXBSYW5kb20iLCJ3ZXN0U3RlcCIsImVhc3RTdGVwIiwid2VzdEFsbG93ZWQiLCJlYXN0QWxsb3dlZCIsIndlc3RCb3VuZCIsImVhc3RCb3VuZCIsIndlc3RDZWxsIiwiZWFzdENlbGwiLCJ3ZXN0VW5kZXIiLCJlYXN0VW5kZXIiLCJ3ZXN0T3BlbiIsImVhc3RPcGVuIiwibGFzdFdlc3QiLCJsYXN0RWFzdCIsInN3YXBUYXJnZXQiLCJ1bmRlZmluZWQiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInN0YXJ0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0V2ViR0xDb250ZXh0IiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkZXB0aCIsInN0ZW5jaWwiLCJzZXREZWZhdWx0cyIsInRleHR1cmVDb2xvciIsImF0dHJpYlByZWZpeCIsImVuYWJsZSIsIkNVTExfRkFDRSIsImNsZWFyQ29sb3IiLCJidWZmZXJXaWR0aCIsImJ1ZmZlckhlaWdodCIsImN1cnJlbnRCdWZmZXIiLCJyZXNlcnZlQnVmZmVyIiwidGV4dHVyZSIsInByb2dyYW1JbmZvIiwiY3JlYXRlUHJvZ3JhbUluZm8iLCJ1c2VQcm9ncmFtIiwicHJvZ3JhbSIsInNldFVuaWZvcm1zIiwidV90ZXh0dXJlIiwiYnVmZmVySW5mbyIsImNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzIiwicG9zaXRpb24iLCJudW1Db21wb25lbnRzIiwiZGF0YSIsImZyYW1lIiwiZHJhd2luZyIsInNlbGVjdGVkRWxlbWVudCIsImxhc3RNb3VzZUV2ZW50IiwiZHJhd0F0TW91c2UiLCJldmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImJydXNoWCIsImJydXNoWSIsImRyYXdYIiwiZHJhd1kiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudEJ1dHRvbnMiLCJlbGVtZW50IiwiaGlkZGVuIiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImxhYmVsIiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwib25jbGljayIsIm90aGVyIiwicmVtb3ZlIiwidXBkYXRlIiwidGVtcEJ1ZmZlciIsImJpbmRUZXh0dXJlIiwidGV4U3ViSW1hZ2UyRCIsIlVOU0lHTkVEX0JZVEUiLCJzZXRCdWZmZXJzQW5kQXR0cmlidXRlcyIsImRyYXdCdWZmZXJJbmZvIiwiVFJJQU5HTEVfU1RSSVAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJvbmxvYWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ0pDLE9BQUcsRUFBRSxTQUREO0FBRUpDLE9BQUcsRUFBRSxDQUZEO0FBRUlDLFNBQUssRUFBRSxDQUZYO0FBRWNDLFFBQUksRUFBRSxDQUZwQjtBQUdKQyxXQUFPLEVBQUUsQ0FITDtBQUdRQyxXQUFPLEVBQUUsQ0FIakI7QUFHb0JDLFFBQUksRUFBRSxDQUgxQjtBQUc2QkMsU0FBSyxFQUFFLENBSHBDO0FBR3VDQyxXQUFPLEVBQUU7QUFIaEQsR0FESztBQU1iQyxNQUFJLEVBQUU7QUFDRlQsT0FBRyxFQUFFLFFBREg7QUFFRkMsT0FBRyxFQUFFLEdBRkg7QUFFUUMsU0FBSyxFQUFFLEdBRmY7QUFFb0JDLFFBQUksRUFBRSxHQUYxQjtBQUdGQyxXQUFPLEVBQUUsQ0FIUDtBQUdVQyxXQUFPLEVBQUUsQ0FIbkI7QUFHc0JDLFFBQUksRUFBRSxDQUg1QjtBQUcrQkMsU0FBSyxFQUFFLENBSHRDO0FBR3lDQyxXQUFPLEVBQUUsQ0FIbEQ7QUFJRkUsWUFBUSxFQUFFO0FBSlIsR0FOTztBQVliQyxNQUFJLEVBQUU7QUFDRlgsT0FBRyxFQUFFLFNBREg7QUFFRkMsT0FBRyxFQUFFLEdBRkg7QUFFUUMsU0FBSyxFQUFFLEdBRmY7QUFFb0JDLFFBQUksRUFBRSxHQUYxQjtBQUdGQyxXQUFPLEVBQUUsR0FIUDtBQUdZQyxXQUFPLEVBQUUsR0FIckI7QUFHMEJDLFFBQUksRUFBRSxDQUhoQztBQUdtQ0MsU0FBSyxFQUFFLEdBSDFDO0FBRytDQyxXQUFPLEVBQUU7QUFIeEQsR0FaTztBQWlCYkksT0FBSyxFQUFFO0FBQ0haLE9BQUcsRUFBRSxTQURGO0FBRUhDLE9BQUcsRUFBRSxHQUZGO0FBRU9DLFNBQUssRUFBRSxHQUZkO0FBRW1CQyxRQUFJLEVBQUUsR0FGekI7QUFHSEMsV0FBTyxFQUFFLEdBSE47QUFHV0MsV0FBTyxFQUFFLEdBSHBCO0FBR3lCQyxRQUFJLEVBQUUsSUFIL0I7QUFHcUNDLFNBQUssRUFBRSxDQUg1QztBQUcrQ0MsV0FBTyxFQUFFO0FBSHhEO0FBakJNLENBQWpCO0FBeUJBLElBQUlLLFNBQVMsR0FBRyxDQUFoQjs7QUFDQSxLQUFLLElBQU1DLFdBQVgsSUFBMEJoQixRQUExQixFQUFvQztBQUNoQ0EsVUFBUSxDQUFDZ0IsV0FBRCxDQUFSLENBQXNCQyxFQUF0QixHQUEyQkYsU0FBUyxFQUFwQztBQUNIOztBQUVELElBQU1HLGNBQWMsR0FBR2xCLFFBQVEsQ0FBQ0MsTUFBaEM7O0FBRUEsU0FBU2tCLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3ZCLE1BQUlsQixHQUFHLEdBQUdrQixDQUFDLENBQUNDLFFBQUYsQ0FBVyxFQUFYLENBQVY7QUFDQSxTQUFPbkIsR0FBRyxDQUFDb0IsTUFBSixJQUFjLENBQWQsR0FBa0IsTUFBTXBCLEdBQXhCLEdBQThCQSxHQUFyQztBQUNIOztBQUdELFNBQVNxQixRQUFULENBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3ZCLFNBQU8sTUFBTVAsY0FBYyxDQUFDSyxDQUFELENBQXBCLEdBQTBCTCxjQUFjLENBQUNNLENBQUQsQ0FBeEMsR0FBOENOLGNBQWMsQ0FBQ08sQ0FBRCxDQUFuRTtBQUNIOztBQUVELFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcEMsTUFBTUMsTUFBTSxHQUFHLEVBQWY7QUFDQUEsUUFBTSxDQUFDSCxLQUFQLEdBQWVBLEtBQWY7QUFDQUcsUUFBTSxDQUFDRixNQUFQLEdBQWdCQSxNQUFoQjs7QUFDQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEtBQUssR0FBR0MsTUFBNUIsRUFBb0NHLENBQUMsRUFBckMsRUFBeUM7QUFDckNELFVBQU0sQ0FBQ0UsSUFBUCxDQUFZSCxJQUFaO0FBQ0g7O0FBQ0QsU0FBT0MsTUFBUDtBQUNIOztBQUVELFNBQVNHLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM1QixTQUFPQyxJQUFJLENBQUNDLGFBQUwsQ0FBbUJILEVBQW5CLEVBQXVCO0FBQzFCSSxVQUFNLEVBQUVKLEVBQUUsQ0FBQ0ssVUFEZTtBQUUxQlosU0FBSyxFQUFFUSxNQUFNLENBQUNSLEtBRlk7QUFHMUJDLFVBQU0sRUFBRU8sTUFBTSxDQUFDUCxNQUhXO0FBSTFCWSxVQUFNLEVBQUVOLEVBQUUsQ0FBQ08sT0FKZTtBQUsxQkMsVUFBTSxFQUFFUixFQUFFLENBQUNTLEdBTGU7QUFNMUJDLE9BQUcsRUFBRVQ7QUFOcUIsR0FBdkIsQ0FBUDtBQVFIOztBQUVELFNBQVNVLFlBQVQsQ0FBc0JmLE1BQXRCLEVBQThCO0FBQzFCLE1BQU1nQixZQUFZLEdBQUloQixNQUFNLENBQUNILEtBQTdCO0FBQ0EsTUFBTW9CLGFBQWEsR0FBSWpCLE1BQU0sQ0FBQ0YsTUFBOUI7QUFDQSxNQUFNTyxNQUFNLEdBQUcsSUFBSWEsVUFBSixDQUFlRixZQUFZLEdBQUdDLGFBQWYsR0FBK0IsQ0FBOUMsQ0FBZjtBQUNBWixRQUFNLENBQUNSLEtBQVAsR0FBZW1CLFlBQWY7QUFDQVgsUUFBTSxDQUFDUCxNQUFQLEdBQWdCbUIsYUFBaEI7QUFDQSxTQUFPRSxhQUFhLENBQUNkLE1BQUQsRUFBU0wsTUFBVCxDQUFwQjtBQUNIOztBQUVELFNBQVNtQixhQUFULENBQXVCZCxNQUF2QixFQUErQkwsTUFBL0IsRUFBdUM7QUFDbkMsTUFBSW9CLENBQUMsR0FBRyxDQUFSOztBQUNBLE9BQUssSUFBSW5CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELE1BQU0sQ0FBQ1QsTUFBM0IsRUFBbUNVLENBQUMsRUFBcEMsRUFBd0M7QUFDcENJLFVBQU0sQ0FBQ2UsQ0FBQyxFQUFGLENBQU4sR0FBY0MsSUFBSSxDQUFDQyxLQUFMLENBQVd0QixNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVN0IsR0FBVixHQUFnQixHQUEzQixDQUFkO0FBQ0FpQyxVQUFNLENBQUNlLENBQUMsRUFBRixDQUFOLEdBQWNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXdEIsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVTVCLEtBQVYsR0FBa0IsR0FBN0IsQ0FBZDtBQUNBZ0MsVUFBTSxDQUFDZSxDQUFDLEVBQUYsQ0FBTixHQUFjQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3RCLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVUzQixJQUFWLEdBQWlCLEdBQTVCLENBQWQ7QUFDSDs7QUFDRCxTQUFPK0IsTUFBUDtBQUNILEMsQ0FBQzs7O0FBRUYsU0FBU2tCLGFBQVQsQ0FBdUJDLFNBQXZCLEVBQWtDQyxVQUFsQyxFQUE4Q0MsVUFBOUMsRUFBMERDLFdBQTFELEVBQXVFO0FBQ25FLE1BQU1DLFlBQVksR0FBRyxDQUNqQixDQUFDRixVQUFVLENBQUM3QixLQUFaLEdBQW9CLENBREgsRUFFakIsQ0FBQzZCLFVBQVUsQ0FBQzdCLEtBRkssRUFHakIsQ0FBQzZCLFVBQVUsQ0FBQzdCLEtBQVosR0FBb0IsQ0FISCxFQUlqQixDQUFDLENBSmdCLEVBS2pCLENBQUMsQ0FMZ0IsRUFNakIsQ0FBQzZCLFVBQVUsQ0FBQzdCLEtBQVosR0FBb0IsQ0FOSCxFQU9qQixDQUFDNkIsVUFBVSxDQUFDN0IsS0FQSyxFQVFqQixDQUFDNkIsVUFBVSxDQUFDN0IsS0FBWixHQUFvQixDQVJILENBQXJCO0FBVUEsTUFBTWdDLGlCQUFpQixHQUFHLENBQ3RCLENBQUNILFVBQVUsQ0FBQzdCLEtBRFUsRUFFdEIsQ0FBQzZCLFVBQVUsQ0FBQzdCLEtBQVosR0FBb0IsQ0FGRSxFQUd0QixDQUFDLENBSHFCLEVBSXRCLENBQUM2QixVQUFVLENBQUM3QixLQUpVLEVBS3RCLENBQUM2QixVQUFVLENBQUM3QixLQUFaLEdBQW9CLENBTEUsQ0FBMUI7QUFPQSxNQUFNaUMsaUJBQWlCLEdBQUcsQ0FDdEIsQ0FBQ0osVUFBVSxDQUFDN0IsS0FBWixHQUFvQixDQURFLEVBRXRCLENBQUM2QixVQUFVLENBQUM3QixLQUZVLEVBR3RCLENBQUMsQ0FIcUIsRUFJdEIsQ0FBQzZCLFVBQVUsQ0FBQzdCLEtBQVosR0FBb0IsQ0FKRSxFQUt0QixDQUFDNkIsVUFBVSxDQUFDN0IsS0FMVSxDQUExQjtBQU9BLE1BQU1rQyxJQUFJLEdBQUdQLFNBQVMsR0FBRyxDQUF6QixDQXpCbUUsQ0F5QnZDOztBQUM1QixNQUFNUSxTQUFTLEdBQUdELElBQUksR0FBRyxDQUFDLENBQUosR0FBUSxDQUE5QjtBQUNBLE1BQU1FLFVBQVUsR0FBR1AsVUFBVSxDQUFDN0IsS0FBWCxHQUFtQjZCLFVBQVUsQ0FBQzVCLE1BQWpEO0FBQ0EsTUFBSUcsQ0FBQyxHQUFHOEIsSUFBSSxJQUFJRSxVQUFVLEdBQUcsQ0FBakIsQ0FBWjtBQUNBLE1BQUlDLElBQUksR0FBR2pDLENBQUMsR0FBRyxDQUFmO0FBQ0EsTUFBSWtDLElBQUksR0FBR2xDLENBQUMsR0FBRyxDQUFmO0FBQ0EsTUFBSW1DLEtBQUssR0FBR25DLENBQUMsR0FBR3lCLFVBQVUsQ0FBQzdCLEtBQTNCO0FBQ0EsTUFBSXdDLEtBQUssR0FBR3BDLENBQUMsR0FBR3lCLFVBQVUsQ0FBQzdCLEtBQTNCOztBQUNBLFNBQU9JLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsR0FBR2dDLFVBQXJCLEVBQWlDO0FBQzdCLFFBQUlLLE1BQU0sR0FBR2pCLElBQUksQ0FBQ2lCLE1BQUwsRUFBYjs7QUFDQSxRQUFJYixVQUFVLENBQUN4QixDQUFELENBQVYsS0FBa0J1QixTQUF0QixFQUFpQztBQUM3QnZCLE9BQUMsSUFBSStCLFNBQUw7QUFDQUksV0FBSyxJQUFJSixTQUFUO0FBQ0FLLFdBQUssSUFBSUwsU0FBVDtBQUNBRyxVQUFJLElBQUlILFNBQVI7QUFDQUUsVUFBSSxJQUFJRixTQUFSO0FBQ0E7QUFDSDs7QUFBQTtBQUNELFFBQU1PLElBQUksR0FBR2IsVUFBVSxDQUFDekIsQ0FBRCxDQUF2QjtBQUNBLFFBQU11QyxTQUFTLEdBQUdKLEtBQUssR0FBRyxDQUExQjtBQUNBLFFBQU1LLFNBQVMsR0FBR0wsS0FBSyxHQUFHLENBQTFCO0FBQ0EsUUFBTU0sU0FBUyxHQUFHTCxLQUFLLEdBQUcsQ0FBMUI7QUFDQSxRQUFNTSxTQUFTLEdBQUdOLEtBQUssR0FBRyxDQUExQjtBQUNBLFFBQU1PLEtBQUssR0FBRzNDLENBQUMsR0FBR3lCLFVBQVUsQ0FBQzdCLEtBQTdCO0FBQ0EsUUFBTWdELFFBQVEsR0FBR0QsS0FBSyxLQUFLLENBQTNCO0FBQ0EsUUFBTUUsUUFBUSxHQUFHRixLQUFLLEtBQUtsQixVQUFVLENBQUM3QixLQUFYLEdBQW1CLENBQTlDO0FBQ0EsUUFBTWtELFVBQVUsR0FBRzFCLElBQUksQ0FBQ2lCLE1BQUwsRUFBbkI7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDL0QsT0FBTCxHQUFlLENBQWYsSUFBb0I2RCxLQUFLLEdBQUdKLFVBQTVCLElBQ0EsQ0FBQ1AsVUFBVSxDQUFDVyxLQUFELENBQVYsQ0FBa0J4RCxRQURuQixJQUVBMEQsSUFBSSxDQUFDaEUsT0FBTCxHQUFlbUQsVUFBVSxDQUFDVyxLQUFELENBQVYsQ0FBa0I5RCxPQUZyQyxFQUdFO0FBQ0UsVUFBSWtELFVBQVUsQ0FBQ1ksS0FBRCxDQUFWLEdBQW9CYixTQUFwQixJQUFpQ2UsSUFBSSxDQUFDL0QsT0FBTCxHQUFlOEQsTUFBcEQsRUFBNEQ7QUFDeERYLG1CQUFXLENBQUMxQixDQUFELENBQVgsR0FBaUJ5QixVQUFVLENBQUNXLEtBQUQsQ0FBM0I7QUFDQVYsbUJBQVcsQ0FBQ1UsS0FBRCxDQUFYLEdBQXFCRSxJQUFyQjtBQUNBZCxrQkFBVSxDQUFDeEIsQ0FBRCxDQUFWLEdBQWdCdUIsU0FBaEI7QUFDQUMsa0JBQVUsQ0FBQ1ksS0FBRCxDQUFWLEdBQW9CYixTQUFwQjtBQUNIOztBQUNEYyxZQUFNLEdBQUdqQixJQUFJLENBQUNpQixNQUFMLEVBQVQ7QUFDSCxLQVhELE1BV08sSUFBSUMsSUFBSSxDQUFDL0QsT0FBTCxHQUFlLENBQWYsSUFBb0I0RCxLQUFLLElBQUksQ0FBN0IsSUFDUCxDQUFDVixVQUFVLENBQUNVLEtBQUQsQ0FBVixDQUFrQnZELFFBRFosSUFFUDBELElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQ1UsS0FBRCxDQUFWLENBQWtCN0QsT0FGOUIsRUFHTDtBQUNFLFVBQUlrRCxVQUFVLENBQUNXLEtBQUQsQ0FBVixHQUFvQlosU0FBcEIsSUFBaUNlLElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFDOEQsTUFBckQsRUFBNkQ7QUFDekRYLG1CQUFXLENBQUMxQixDQUFELENBQVgsR0FBaUJ5QixVQUFVLENBQUNVLEtBQUQsQ0FBM0I7QUFDQVQsbUJBQVcsQ0FBQ1MsS0FBRCxDQUFYLEdBQXFCRyxJQUFyQjtBQUNBZCxrQkFBVSxDQUFDeEIsQ0FBRCxDQUFWLEdBQWdCdUIsU0FBaEI7QUFDQUMsa0JBQVUsQ0FBQ1csS0FBRCxDQUFWLEdBQW9CWixTQUFwQjtBQUNIOztBQUNEYyxZQUFNLEdBQUdqQixJQUFJLENBQUNpQixNQUFMLEVBQVQ7QUFDSCxLQVhNLE1BV0EsSUFBSUMsSUFBSSxDQUFDL0QsT0FBTCxJQUFnQitELElBQUksQ0FBQzdELEtBQUwsR0FBYTRELE1BQWpDLEVBQXlDO0FBQzVDLFVBQU1VLFFBQVEsR0FBR1QsSUFBSSxDQUFDL0QsT0FBTCxHQUFlLENBQWYsR0FBbUJrRSxTQUFuQixHQUErQkYsU0FBaEQ7QUFDQSxVQUFNUyxRQUFRLEdBQUdWLElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLEdBQW1CbUUsU0FBbkIsR0FBK0JGLFNBQWhEO0FBQ0EsVUFBTVMsV0FBVyxHQUFHLENBQUNMLFFBQUQsSUFDaEJHLFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUdmLFVBQTVCLElBQ0EsQ0FBQ1AsVUFBVSxDQUFDc0IsUUFBRCxDQUFWLENBQXFCbkUsUUFEdEIsS0FDbUMwRCxJQUFJLENBQUMvRCxPQUFMLEdBQWUsQ0FBZixHQUMvQitELElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQ3NCLFFBQUQsQ0FBVixDQUFxQnpFLE9BREwsR0FFL0JnRSxJQUFJLENBQUNoRSxPQUFMLEdBQWVtRCxVQUFVLENBQUNzQixRQUFELENBQVYsQ0FBcUJ6RSxPQUh4QyxDQURKO0FBT0EsVUFBTTRFLFdBQVcsR0FBRyxDQUFDTCxRQUFELElBQ2hCRyxRQUFRLElBQUksQ0FBWixJQUFpQkEsUUFBUSxHQUFHaEIsVUFBNUIsSUFDQSxDQUFDUCxVQUFVLENBQUN1QixRQUFELENBQVYsQ0FBcUJwRSxRQUR0QixLQUNtQzBELElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLEdBQy9CK0QsSUFBSSxDQUFDaEUsT0FBTCxHQUFlbUQsVUFBVSxDQUFDdUIsUUFBRCxDQUFWLENBQXFCMUUsT0FETCxHQUUvQmdFLElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQ3VCLFFBQUQsQ0FBVixDQUFxQjFFLE9BSHhDLENBREo7O0FBT0EsVUFBSTJFLFdBQVcsS0FBSyxDQUFDQyxXQUFELElBQWdCOUIsSUFBSSxDQUFDaUIsTUFBTCxLQUFnQixHQUFyQyxDQUFmLEVBQTBEO0FBQ3REWCxtQkFBVyxDQUFDMUIsQ0FBRCxDQUFYLEdBQWlCeUIsVUFBVSxDQUFDc0IsUUFBRCxDQUEzQjtBQUNBckIsbUJBQVcsQ0FBQ3FCLFFBQUQsQ0FBWCxHQUF3QlQsSUFBeEI7QUFDQWQsa0JBQVUsQ0FBQ3hCLENBQUQsQ0FBVixHQUFnQnVCLFNBQWhCO0FBQ0FDLGtCQUFVLENBQUN1QixRQUFELENBQVYsR0FBdUJ4QixTQUF2QjtBQUNILE9BTEQsTUFLTyxJQUFJMkIsV0FBSixFQUFpQjtBQUNwQnhCLG1CQUFXLENBQUMxQixDQUFELENBQVgsR0FBaUJ5QixVQUFVLENBQUN1QixRQUFELENBQTNCO0FBQ0F0QixtQkFBVyxDQUFDc0IsUUFBRCxDQUFYLEdBQXdCVixJQUF4QjtBQUNBZCxrQkFBVSxDQUFDeEIsQ0FBRCxDQUFWLEdBQWdCdUIsU0FBaEI7QUFDQUMsa0JBQVUsQ0FBQ3dCLFFBQUQsQ0FBVixHQUF1QnpCLFNBQXZCO0FBQ0g7O0FBQ0RjLFlBQU0sR0FBR2pCLElBQUksQ0FBQ2lCLE1BQUwsRUFBVDtBQUNILEtBN0JNLE1BNkJBLElBQUlDLElBQUksQ0FBQzlELElBQUwsR0FBWXNFLFVBQVosS0FDTlIsSUFBSSxDQUFDL0QsT0FBTCxHQUFlLENBQWYsSUFBb0I2RCxLQUFLLEdBQUdKLFVBQTVCLElBQTBDUixVQUFVLENBQUNZLEtBQUQsQ0FBVixHQUFvQmIsU0FBUyxHQUFHLENBQTNFLElBQ0NlLElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLElBQW9CNEQsS0FBSyxJQUFJLENBQTdCLElBQWtDWCxVQUFVLENBQUNXLEtBQUQsQ0FBVixHQUFvQlosU0FBUyxHQUFHLENBRjVELENBQUosRUFHSjtBQUNDLFVBQU00QixTQUFTLEdBQUduRCxDQUFDLEdBQUlBLENBQUMsR0FBR3lCLFVBQVUsQ0FBQzdCLEtBQXRDO0FBQ0EsVUFBTXdELFNBQVMsR0FBR0QsU0FBUyxHQUFHMUIsVUFBVSxDQUFDN0IsS0FBdkIsR0FBK0IsQ0FBakQ7QUFDQSxVQUFJeUQsUUFBUSxHQUFHckQsQ0FBZjtBQUNBLFVBQUlzRCxRQUFRLEdBQUd0RCxDQUFmOztBQUNBLFVBQUkrQyxTQUFRLEdBQUdULElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLEdBQW1CNkQsS0FBbkIsR0FBMkJELEtBQTFDOztBQUNBLFVBQUlhLFNBQVEsR0FBR0QsU0FBZjtBQUNBLFVBQUlRLFNBQVMsR0FBR1IsU0FBUSxHQUFHdEIsVUFBVSxDQUFDN0IsS0FBdEM7QUFDQSxVQUFJNEQsU0FBUyxHQUFHRCxTQUFoQjtBQUNBLFVBQUlFLFFBQVEsR0FBRyxLQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFDQSxVQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxDQUFmOztBQUNBLFVBQUl0QixJQUFJLENBQUMvRCxPQUFMLEdBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsZUFBTzhFLFFBQVEsR0FBR0YsU0FBWCxJQUF3QkosU0FBUSxHQUFHZixVQUFVLEdBQUcsQ0FBdkQsRUFBMEQ7QUFDdERxQixrQkFBUTtBQUFJTixtQkFBUTtBQUFJUSxtQkFBUztBQUNqQyxjQUNJOUIsVUFBVSxDQUFDNEIsUUFBRCxDQUFWLENBQXFCekUsUUFBckIsSUFDQTBELElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQzRCLFFBQUQsQ0FBVixDQUFxQi9FLE9BRnhDLEVBR0U7O0FBQ0YsY0FDSSxDQUFDbUQsVUFBVSxDQUFDc0IsU0FBRCxDQUFWLENBQXFCbkUsUUFBdEIsSUFDQTBELElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQ3NCLFNBQUQsQ0FBVixDQUFxQnpFLE9BRnhDLEVBR0U7QUFDRSxnQkFBSWtELFVBQVUsQ0FBQ3VCLFNBQUQsQ0FBVixHQUF1QnhCLFNBQTNCLEVBQXNDO0FBQ2xDa0Msc0JBQVEsR0FBRyxJQUFYO0FBQ0FFLHNCQUFRLEdBQUdaLFNBQVg7QUFDSDs7QUFDRCxnQkFBSTNCLElBQUksQ0FBQ2lCLE1BQUwsS0FBZ0IsSUFBaEIsSUFDQWtCLFNBQVMsR0FBR3ZCLFVBQVosSUFDQSxDQUFDUCxVQUFVLENBQUM4QixTQUFELENBQVYsQ0FBc0IzRSxRQUR2QixJQUVBMEQsSUFBSSxDQUFDaEUsT0FBTCxHQUFlbUQsVUFBVSxDQUFDOEIsU0FBRCxDQUFWLENBQXNCakYsT0FIekMsRUFJRztBQUNOO0FBQ0o7O0FBQ0QsZUFBT2dGLFFBQVEsR0FBR0YsU0FBWCxJQUF3QkosU0FBUSxHQUFHaEIsVUFBVSxHQUFHLENBQXZELEVBQTBEO0FBQ3REc0Isa0JBQVE7QUFBSU4sbUJBQVE7QUFBSVEsbUJBQVM7QUFDakMsY0FDSS9CLFVBQVUsQ0FBQzZCLFFBQUQsQ0FBVixDQUFxQjFFLFFBQXJCLElBQ0EwRCxJQUFJLENBQUNoRSxPQUFMLEdBQWVtRCxVQUFVLENBQUM2QixRQUFELENBQVYsQ0FBcUJoRixPQUZ4QyxFQUdFOztBQUNGLGNBQ0ksQ0FBQ21ELFVBQVUsQ0FBQ3VCLFNBQUQsQ0FBVixDQUFxQnBFLFFBQXRCLElBQ0EwRCxJQUFJLENBQUNoRSxPQUFMLEdBQWVtRCxVQUFVLENBQUN1QixTQUFELENBQVYsQ0FBcUIxRSxPQUZ4QyxFQUdFO0FBQ0UsZ0JBQUlrRCxVQUFVLENBQUN3QixTQUFELENBQVYsR0FBdUJ6QixTQUEzQixFQUFzQztBQUNsQ21DLHNCQUFRLEdBQUcsSUFBWDtBQUNBRSxzQkFBUSxHQUFHWixTQUFYO0FBQ0g7O0FBQ0QsZ0JBQUk1QixJQUFJLENBQUNpQixNQUFMLEtBQWdCLElBQWhCLElBQ0FtQixTQUFTLEdBQUd4QixVQUFaLElBQ0EsQ0FBQ1AsVUFBVSxDQUFDK0IsU0FBRCxDQUFWLENBQXNCNUUsUUFEdkIsSUFFQTBELElBQUksQ0FBQ2hFLE9BQUwsR0FBZW1ELFVBQVUsQ0FBQytCLFNBQUQsQ0FBVixDQUFzQmxGLE9BSHpDLEVBSUc7QUFDTjtBQUNKO0FBQ0osT0EzQ0QsTUEyQ08sQ0FDTjs7QUFDRCxVQUFJdUYsVUFBVSxTQUFkOztBQUNBLFVBQUlKLFFBQVEsSUFBSUMsUUFBaEIsRUFBMEI7QUFDdEJHLGtCQUFVLEdBQUd6QyxJQUFJLENBQUNpQixNQUFMLEtBQWdCLEdBQWhCLEdBQXNCc0IsUUFBdEIsR0FBaUNDLFFBQTlDO0FBQ0gsT0FGRCxNQUVPLElBQUlILFFBQUosRUFBYztBQUNqQkksa0JBQVUsR0FBR0YsUUFBYjtBQUNILE9BRk0sTUFFQSxJQUFJRCxRQUFKLEVBQWM7QUFDakJHLGtCQUFVLEdBQUdELFFBQWI7QUFDSDs7QUFDRCxVQUFJQyxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzFCcEMsbUJBQVcsQ0FBQzFCLENBQUQsQ0FBWCxHQUFpQnlCLFVBQVUsQ0FBQ29DLFVBQUQsQ0FBM0I7QUFDQW5DLG1CQUFXLENBQUNtQyxVQUFELENBQVgsR0FBMEJ2QixJQUExQjtBQUNBZCxrQkFBVSxDQUFDeEIsQ0FBRCxDQUFWLEdBQWdCdUIsU0FBaEI7QUFDQUMsa0JBQVUsQ0FBQ3FDLFVBQUQsQ0FBVixHQUF5QnRDLFNBQXpCO0FBQ0g7O0FBQ0RjLFlBQU0sR0FBR2pCLElBQUksQ0FBQ2lCLE1BQUwsRUFBVDtBQUNILEtBNUVNLE1BNEVBLElBQUlDLElBQUksQ0FBQzVELE9BQUwsR0FBZTJELE1BQW5CLEVBQTJCO0FBQzlCLFVBQU1ZLFlBQVcsR0FBRyxDQUFDTCxRQUFELElBQ2hCcEIsVUFBVSxDQUFDUyxJQUFELENBQVYsR0FBbUJWLFNBQW5CLElBQ0EsQ0FBQ0UsVUFBVSxDQUFDUSxJQUFELENBQVYsQ0FBaUJyRCxRQURsQixLQUMrQjBELElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLEdBQzNCK0QsSUFBSSxDQUFDaEUsT0FBTCxJQUFnQm1ELFVBQVUsQ0FBQ1EsSUFBRCxDQUFWLENBQWlCM0QsT0FETixHQUUzQmdFLElBQUksQ0FBQ2hFLE9BQUwsSUFBZ0JtRCxVQUFVLENBQUNRLElBQUQsQ0FBVixDQUFpQjNELE9BSHJDLENBREo7O0FBT0EsVUFBTTRFLFlBQVcsR0FBRyxDQUFDTCxRQUFELElBQ2hCckIsVUFBVSxDQUFDVSxJQUFELENBQVYsR0FBbUJYLFNBQW5CLElBQ0EsQ0FBQ0UsVUFBVSxDQUFDUyxJQUFELENBQVYsQ0FBaUJ0RCxRQURsQixLQUMrQjBELElBQUksQ0FBQy9ELE9BQUwsR0FBZSxDQUFmLEdBQzNCK0QsSUFBSSxDQUFDaEUsT0FBTCxJQUFnQm1ELFVBQVUsQ0FBQ1MsSUFBRCxDQUFWLENBQWlCNUQsT0FETixHQUUzQmdFLElBQUksQ0FBQ2hFLE9BQUwsSUFBZ0JtRCxVQUFVLENBQUNTLElBQUQsQ0FBVixDQUFpQjVELE9BSHJDLENBREo7O0FBT0EsVUFBSTJFLFlBQVcsS0FBSyxDQUFDQyxZQUFELElBQWdCOUIsSUFBSSxDQUFDaUIsTUFBTCxLQUFnQixHQUFyQyxDQUFmLEVBQTBEO0FBQ3REWCxtQkFBVyxDQUFDMUIsQ0FBRCxDQUFYLEdBQWlCeUIsVUFBVSxDQUFDUSxJQUFELENBQTNCO0FBQ0FQLG1CQUFXLENBQUNPLElBQUQsQ0FBWCxHQUFvQkssSUFBcEI7QUFDQWQsa0JBQVUsQ0FBQ3hCLENBQUQsQ0FBVixHQUFnQnVCLFNBQWhCO0FBQ0FDLGtCQUFVLENBQUNTLElBQUQsQ0FBVixHQUFtQlYsU0FBbkI7QUFDSCxPQUxELE1BS08sSUFBSTJCLFlBQUosRUFBaUI7QUFDcEJ4QixtQkFBVyxDQUFDMUIsQ0FBRCxDQUFYLEdBQWlCeUIsVUFBVSxDQUFDUyxJQUFELENBQTNCO0FBQ0FSLG1CQUFXLENBQUNRLElBQUQsQ0FBWCxHQUFvQkksSUFBcEI7QUFDQWQsa0JBQVUsQ0FBQ3hCLENBQUQsQ0FBVixHQUFnQnVCLFNBQWhCO0FBQ0FDLGtCQUFVLENBQUNVLElBQUQsQ0FBVixHQUFtQlgsU0FBbkI7QUFDSDs7QUFDRGMsWUFBTSxHQUFHakIsSUFBSSxDQUFDaUIsTUFBTCxFQUFUO0FBQ0g7O0FBQ0QsUUFBSWIsVUFBVSxDQUFDeEIsQ0FBRCxDQUFWLEdBQWdCdUIsU0FBcEIsRUFBK0I7QUFDM0JHLGlCQUFXLENBQUMxQixDQUFELENBQVgsR0FBaUJ5QixVQUFVLENBQUN6QixDQUFELENBQTNCO0FBQ0g7O0FBQ0RBLEtBQUMsSUFBSStCLFNBQUw7QUFDQUksU0FBSyxJQUFJSixTQUFUO0FBQ0FLLFNBQUssSUFBSUwsU0FBVDtBQUNBRyxRQUFJLElBQUlILFNBQVI7QUFDQUUsUUFBSSxJQUFJRixTQUFSO0FBQ0g7QUFDSjs7QUFFRCxJQUFNZ0MsWUFBWSxrUkFBbEI7QUFZQSxJQUFNQyxjQUFjLHdMQUFwQjs7QUFTQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2IsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBRixRQUFNLENBQUN0RSxLQUFQLEdBQWVzRSxNQUFNLENBQUNHLFdBQXRCO0FBQ0FILFFBQU0sQ0FBQ3JFLE1BQVAsR0FBZ0JxRSxNQUFNLENBQUNJLFlBQXZCO0FBQ0EsTUFBTW5FLEVBQUUsR0FBR0UsSUFBSSxDQUFDa0UsZUFBTCxDQUFxQkwsTUFBckIsRUFBNkI7QUFDcENNLFNBQUssRUFBRSxLQUQ2QjtBQUVwQ0MsYUFBUyxFQUFFLEtBRnlCO0FBR3BDQyxTQUFLLEVBQUUsS0FINkI7QUFJcENDLFdBQU8sRUFBRTtBQUoyQixHQUE3QixDQUFYO0FBT0F0RSxNQUFJLENBQUN1RSxXQUFMLENBQWlCO0FBQUVDLGdCQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWO0FBQWhCLEdBQWpCO0FBQ0F4RSxNQUFJLENBQUN1RSxXQUFMLENBQWlCO0FBQUVFLGdCQUFZLEVBQUU7QUFBaEIsR0FBakI7QUFFQTNFLElBQUUsQ0FBQzRFLE1BQUgsQ0FBVTVFLEVBQUUsQ0FBQzZFLFNBQWIsRUFkYSxDQWNZOztBQUN6QjdFLElBQUUsQ0FBQzhFLFVBQUgsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCO0FBRUEsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLEdBQXJCO0FBRUEsTUFBSUMsYUFBYSxHQUFHekYsU0FBUyxDQUFDdUYsV0FBRCxFQUFjQyxZQUFkLEVBQTRCakcsY0FBNUIsQ0FBN0I7QUFDQSxNQUFJbUcsYUFBYSxHQUFHMUYsU0FBUyxDQUFDdUYsV0FBRCxFQUFjQyxZQUFkLEVBQTRCakcsY0FBNUIsQ0FBN0I7QUFDQSxNQUFNc0MsVUFBVSxHQUFHN0IsU0FBUyxDQUFDdUYsV0FBRCxFQUFjQyxZQUFkLEVBQTRCLENBQTVCLENBQTVCO0FBRUEsTUFBTS9FLE1BQU0sR0FBR1UsWUFBWSxDQUFDc0UsYUFBRCxDQUEzQjtBQUNBLE1BQU1FLE9BQU8sR0FBR3BGLFVBQVUsQ0FBQ0MsRUFBRCxFQUFLQyxNQUFMLENBQTFCO0FBRUEsTUFBTW1GLFdBQVcsR0FBR2xGLElBQUksQ0FBQ21GLGlCQUFMLENBQXVCckYsRUFBdkIsRUFBMkIsQ0FDM0M0RCxZQUQyQyxFQUM3QkMsY0FENkIsQ0FBM0IsQ0FBcEI7QUFHQTdELElBQUUsQ0FBQ3NGLFVBQUgsQ0FBY0YsV0FBVyxDQUFDRyxPQUExQjtBQUNBckYsTUFBSSxDQUFDc0YsV0FBTCxDQUFpQkosV0FBakIsRUFBOEI7QUFDMUJLLGFBQVMsRUFBRU47QUFEZSxHQUE5QjtBQUlBLE1BQU1PLFVBQVUsR0FBR3hGLElBQUksQ0FBQ3lGLDBCQUFMLENBQWdDM0YsRUFBaEMsRUFBb0M7QUFDbkQ0RixZQUFRLEVBQUU7QUFDTkMsbUJBQWEsRUFBRSxDQURUO0FBQ1lDLFVBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBRGxCO0FBRHlDLEdBQXBDLENBQW5CO0FBTUEsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDtBQUNBLE1BQUlDLGVBQWUsR0FBR3BJLFFBQVEsQ0FBQ1csSUFBL0I7QUFFQSxNQUFJMEgsY0FBYyxHQUFHdkMsU0FBckI7O0FBQ0EsV0FBU3dDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3hCLFFBQU1DLElBQUksR0FBR3RDLE1BQU0sQ0FBQ3VDLHFCQUFQLEVBQWI7QUFDQSxRQUFNQyxDQUFDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSSxPQUFOLEdBQWdCSCxJQUFJLENBQUNJLElBQXRCLElBQThCSixJQUFJLENBQUM1RyxLQUE3QztBQUNBLFFBQU1pSCxDQUFDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDTyxPQUFOLEdBQWdCTixJQUFJLENBQUNPLEdBQXRCLElBQTZCUCxJQUFJLENBQUMzRyxNQUE1Qzs7QUFDQSxRQUFJNkcsQ0FBQyxJQUFJLENBQUwsSUFBVUcsQ0FBQyxJQUFJLENBQWYsSUFBb0JILENBQUMsR0FBRyxDQUF4QixJQUE2QkcsQ0FBQyxHQUFHLENBQXJDLEVBQXdDO0FBQ3BDLFVBQU03RyxDQUFDLEdBQUdvQixJQUFJLENBQUNDLEtBQUwsQ0FBV3FGLENBQUMsR0FBR3hCLFdBQWYsQ0FBVjtBQUNBLFVBQU0vRCxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXd0YsQ0FBQyxHQUFHMUIsWUFBZixDQUFWOztBQUNBLFdBQUssSUFBSTZCLE1BQU0sR0FBRyxDQUFDLENBQW5CLEVBQXNCQSxNQUFNLEdBQUcsQ0FBL0IsRUFBa0NBLE1BQU0sRUFBeEMsRUFBNEM7QUFDeEMsYUFBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBQyxDQUFuQixFQUFzQkEsTUFBTSxHQUFHLENBQS9CLEVBQWtDQSxNQUFNLEVBQXhDLEVBQTRDO0FBQ3hDLGNBQU1DLEtBQUssR0FBR2xILENBQUMsR0FBR2dILE1BQWxCO0FBQ0EsY0FBTUcsS0FBSyxHQUFHaEcsQ0FBQyxHQUFHOEYsTUFBbEI7O0FBQ0EsY0FBSUMsS0FBSyxJQUFJLENBQVQsSUFBY0MsS0FBSyxJQUFJLENBQXZCLElBQTRCRCxLQUFLLEdBQUdoQyxXQUFwQyxJQUFtRGlDLEtBQUssR0FBR2hDLFlBQS9ELEVBQTZFO0FBQ3pFQyx5QkFBYSxDQUFDOEIsS0FBSyxHQUFHQyxLQUFLLEdBQUdqQyxXQUFqQixDQUFiLEdBQTZDa0IsZUFBN0M7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOztBQUVEbEMsUUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBVWIsS0FBVixFQUFpQjtBQUNsREosV0FBTyxHQUFHLElBQVY7QUFDQUUsa0JBQWMsR0FBR0UsS0FBakI7QUFDSCxHQUhELEVBR0csS0FISDtBQUlBckMsUUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBVWIsS0FBVixFQUFpQjtBQUNsREYsa0JBQWMsR0FBR0UsS0FBakI7QUFDSCxHQUZELEVBRUcsS0FGSDtBQUdBckMsUUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBVWIsS0FBVixFQUFpQjtBQUNoREosV0FBTyxHQUFHLEtBQVY7QUFDSCxHQUZELEVBRUcsS0FGSDtBQUdBakMsUUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBVWIsS0FBVixFQUFpQjtBQUNqREosV0FBTyxHQUFHLEtBQVY7QUFDSCxHQUZELEVBRUcsS0FGSDtBQUlBLE1BQU1rQixjQUFjLEdBQUcsRUFBdkI7O0FBaEZhLDZCQWlGRnJJLFlBakZFO0FBa0ZULFFBQU1zSSxPQUFPLEdBQUd0SixRQUFRLENBQUNnQixZQUFELENBQXhCOztBQUNBLFFBQUksQ0FBQ3NJLE9BQU8sQ0FBQ0MsTUFBYixFQUFxQjtBQUNqQixVQUFNQyxNQUFNLEdBQUdyRCxRQUFRLENBQUNzRCxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQUosb0JBQWMsQ0FBQ3BILElBQWYsQ0FBb0J1SCxNQUFwQjtBQUNBLFVBQU1FLEtBQUssR0FBR3ZELFFBQVEsQ0FBQ3dELGNBQVQsQ0FBd0IzSSxZQUF4QixDQUFkO0FBQ0F3SSxZQUFNLENBQUNJLFdBQVAsQ0FBbUJGLEtBQW5CO0FBQ0EsVUFBTXhKLEdBQUcsR0FBR3FCLFFBQVEsQ0FBQytILE9BQU8sQ0FBQ25KLEdBQVQsRUFBY21KLE9BQU8sQ0FBQ2xKLEtBQXRCLEVBQTZCa0osT0FBTyxDQUFDakosSUFBckMsQ0FBcEI7QUFDQW1KLFlBQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsZUFBckI7QUFDQU4sWUFBTSxDQUFDTyxLQUFQLCtCQUFvQzdKLEdBQXBDO0FBQ0FpRyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDd0QsV0FBMUMsQ0FBc0RKLE1BQXREOztBQUNBQSxZQUFNLENBQUNRLE9BQVAsR0FBaUIsVUFBVXpCLEtBQVYsRUFBaUI7QUFDOUJILHVCQUFlLEdBQUdrQixPQUFsQjs7QUFEOEIsbURBRVZELGNBRlU7QUFBQTs7QUFBQTtBQUU5Qiw4REFBb0M7QUFBQSxnQkFBekJZLEtBQXlCO0FBQ2hDQSxpQkFBSyxDQUFDSixTQUFOLENBQWdCSyxNQUFoQixDQUF1Qix1QkFBdkI7QUFDSDtBQUo2QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUs5QlYsY0FBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQix1QkFBckI7QUFDSCxPQU5EO0FBT0g7QUFuR1E7O0FBaUZiLE9BQUssSUFBTTlJLFlBQVgsSUFBMEJoQixRQUExQixFQUFvQztBQUFBLFVBQXpCZ0IsWUFBeUI7QUFtQm5DOztBQUVELE1BQU1tSixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCO0FBQ0EsUUFBSWhDLE9BQUosRUFBYUcsV0FBVyxDQUFDRCxjQUFELENBQVgsQ0FGSSxDQUdqQjs7QUFDQS9FLGlCQUFhLENBQUM0RSxLQUFELEVBQVExRSxVQUFSLEVBQW9CNEQsYUFBcEIsRUFBbUNDLGFBQW5DLENBQWI7QUFDQSxRQUFNK0MsVUFBVSxHQUFHaEQsYUFBbkI7QUFDQUEsaUJBQWEsR0FBR0MsYUFBaEI7QUFDQUEsaUJBQWEsR0FBRytDLFVBQWhCLENBUGlCLENBUWpCOztBQUNBbEgsaUJBQWEsQ0FBQ2QsTUFBRCxFQUFTZ0YsYUFBVCxDQUFiO0FBQ0FqRixNQUFFLENBQUNrSSxXQUFILENBQWVsSSxFQUFFLENBQUNLLFVBQWxCLEVBQThCOEUsT0FBOUI7QUFDQW5GLE1BQUUsQ0FBQ21JLGFBQUgsQ0FDSW5JLEVBQUUsQ0FBQ0ssVUFEUCxFQUNtQixDQURuQixFQUNzQixDQUR0QixFQUN5QixDQUR6QixFQUM0QjBFLFdBRDVCLEVBQ3lDQyxZQUR6QyxFQUVJaEYsRUFBRSxDQUFDUyxHQUZQLEVBRVlULEVBQUUsQ0FBQ29JLGFBRmYsRUFFOEJuSSxNQUY5QixFQVhpQixDQWVqQjs7QUFDQUMsUUFBSSxDQUFDbUksdUJBQUwsQ0FBNkJySSxFQUE3QixFQUFpQ29GLFdBQWpDLEVBQThDTSxVQUE5QztBQUNBeEYsUUFBSSxDQUFDb0ksY0FBTCxDQUFvQnRJLEVBQXBCLEVBQXdCMEYsVUFBeEIsRUFBb0MxRixFQUFFLENBQUN1SSxjQUF2QyxFQWpCaUIsQ0FrQmpCOztBQUNBQyx5QkFBcUIsQ0FBQ1IsTUFBRCxDQUFyQjtBQUNBakMsU0FBSztBQUNSLEdBckJEOztBQXVCQXlDLHVCQUFxQixDQUFDUixNQUFELENBQXJCO0FBQ0g7O0FBR0RTLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjVFLEtBQWhCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zY3JpcHRcIjsiLCJjb25zdCBlbGVtZW50cyA9IHtcbiAgICBlcmFzZXI6IHtcbiAgICAgICAgaGV4OiBcIiMwMDAwMDBcIixcbiAgICAgICAgcmVkOiAwLCBncmVlbjogMCwgYmx1ZTogMCxcbiAgICAgICAgZGVuc2l0eTogMCwgZ3Jhdml0eTogMCwgc2xpcDogMCwgc2xpZGU6IDAsIHNjYXR0ZXI6IDAsXG4gICAgfSxcbiAgICB3YWxsOiB7XG4gICAgICAgIGhleDogXCJjMGMwYzBcIixcbiAgICAgICAgcmVkOiAxOTIsIGdyZWVuOiAxOTIsIGJsdWU6IDE5MixcbiAgICAgICAgZGVuc2l0eTogMSwgZ3Jhdml0eTogMCwgc2xpcDogMCwgc2xpZGU6IDAsIHNjYXR0ZXI6IDAsXG4gICAgICAgIGltbW9iaWxlOiB0cnVlLFxuICAgIH0sXG4gICAgc2FuZDoge1xuICAgICAgICBoZXg6IFwiI2MyYjI4MFwiLFxuICAgICAgICByZWQ6IDE5NCwgZ3JlZW46IDE3OCwgYmx1ZTogMTI4LFxuICAgICAgICBkZW5zaXR5OiAwLjcsIGdyYXZpdHk6IDAuOCwgc2xpcDogMCwgc2xpZGU6IDAuOCwgc2NhdHRlcjogMCxcbiAgICB9LFxuICAgIHdhdGVyOiB7XG4gICAgICAgIGhleDogXCIjNkJDQUUyXCIsXG4gICAgICAgIHJlZDogMTA3LCBncmVlbjogMjAyLCBibHVlOiAyMjYsXG4gICAgICAgIGRlbnNpdHk6IDAuNSwgZ3Jhdml0eTogMC44LCBzbGlwOiAwLjk1LCBzbGlkZTogMCwgc2NhdHRlcjogMC4zNSxcbiAgICB9LFxuICAgIFxufTtcblxubGV0IGVsZW1lbnRJZCA9IDA7XG5mb3IgKGNvbnN0IGVsZW1lbnROYW1lIGluIGVsZW1lbnRzKSB7XG4gICAgZWxlbWVudHNbZWxlbWVudE5hbWVdLmlkID0gZWxlbWVudElkKys7XG59XG5cbmNvbnN0IGRlZmF1bHRFbGVtZW50ID0gZWxlbWVudHMuZXJhc2VyO1xuXG5mdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuXG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgY29tcG9uZW50VG9IZXgocikgKyBjb21wb25lbnRUb0hleChnKSArIGNvbXBvbmVudFRvSGV4KGIpO1xufVxuXG5mdW5jdGlvbiBuZXdCdWZmZXIod2lkdGgsIGhlaWdodCwgZmlsbCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgIGJ1ZmZlci53aWR0aCA9IHdpZHRoO1xuICAgIGJ1ZmZlci5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGJ1ZmZlci5wdXNoKGZpbGwpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBuZXdUZXh0dXJlKGdsLCBwaXhlbHMpIHtcbiAgICByZXR1cm4gdHdnbC5jcmVhdGVUZXh0dXJlKGdsLCB7XG4gICAgICAgIHRhcmdldDogZ2wuVEVYVFVSRV8yRCxcbiAgICAgICAgd2lkdGg6IHBpeGVscy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwaXhlbHMuaGVpZ2h0LFxuICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsXG4gICAgICAgIGZvcm1hdDogZ2wuUkdCLFxuICAgICAgICBzcmM6IHBpeGVscyxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbmV3UGl4ZWxEYXRhKGJ1ZmZlcikge1xuICAgIGNvbnN0IHRleHR1cmVXaWR0aCA9IChidWZmZXIud2lkdGgpO1xuICAgIGNvbnN0IHRleHR1cmVIZWlnaHQgPSAoYnVmZmVyLmhlaWdodCk7XG4gICAgY29uc3QgcGl4ZWxzID0gbmV3IFVpbnQ4QXJyYXkodGV4dHVyZVdpZHRoICogdGV4dHVyZUhlaWdodCAqIDMpO1xuICAgIHBpeGVscy53aWR0aCA9IHRleHR1cmVXaWR0aDtcbiAgICBwaXhlbHMuaGVpZ2h0ID0gdGV4dHVyZUhlaWdodDtcbiAgICByZXR1cm4gYmxpdFBpeGVsRGF0YShwaXhlbHMsIGJ1ZmZlcik7XG59XG5cbmZ1bmN0aW9uIGJsaXRQaXhlbERhdGEocGl4ZWxzLCBidWZmZXIpIHtcbiAgICBsZXQgaiA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGl4ZWxzW2orK10gPSBNYXRoLmZsb29yKGJ1ZmZlcltpXS5yZWQgLSAyNTUpO1xuICAgICAgICBwaXhlbHNbaisrXSA9IE1hdGguZmxvb3IoYnVmZmVyW2ldLmdyZWVuIC0gMjU1KTtcbiAgICAgICAgcGl4ZWxzW2orK10gPSBNYXRoLmZsb29yKGJ1ZmZlcltpXS5ibHVlIC0gMjU1KTtcbiAgICB9XG4gICAgcmV0dXJuIHBpeGVscztcbn0gLy9kdXBsaWNhdGlvblxuXG5mdW5jdGlvbiB1cGRhdGVCdWZmZXJzKHRpbWVzdGFtcCwgdGltZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgd3JpdGVCdWZmZXIpIHtcbiAgICBjb25zdCBhbGxOZWlnaGJvcnMgPSBbXG4gICAgICAgIC1yZWFkQnVmZmVyLndpZHRoIC0gMSxcbiAgICAgICAgLXJlYWRCdWZmZXIud2lkdGgsXG4gICAgICAgIC1yZWFkQnVmZmVyLndpZHRoICsgMSxcbiAgICAgICAgLTEsXG4gICAgICAgICsxLFxuICAgICAgICArcmVhZEJ1ZmZlci53aWR0aCAtIDEsXG4gICAgICAgICtyZWFkQnVmZmVyLndpZHRoLFxuICAgICAgICArcmVhZEJ1ZmZlci53aWR0aCArIDEsXG4gICAgXTtcbiAgICBjb25zdCB3ZXN0RWRnZU5laWdoYm9ycyA9IFtcbiAgICAgICAgLXJlYWRCdWZmZXIud2lkdGgsXG4gICAgICAgIC1yZWFkQnVmZmVyLndpZHRoICsgMSxcbiAgICAgICAgKzEsXG4gICAgICAgICtyZWFkQnVmZmVyLndpZHRoLFxuICAgICAgICArcmVhZEJ1ZmZlci53aWR0aCArIDEsXG4gICAgXTtcbiAgICBjb25zdCBlYXN0RWRnZU5laWdoYm9ycyA9IFtcbiAgICAgICAgLXJlYWRCdWZmZXIud2lkdGggLSAxLFxuICAgICAgICAtcmVhZEJ1ZmZlci53aWR0aCxcbiAgICAgICAgLTEsXG4gICAgICAgICtyZWFkQnVmZmVyLndpZHRoIC0gMSxcbiAgICAgICAgK3JlYWRCdWZmZXIud2lkdGgsXG4gICAgXTtcbiAgICBjb25zdCBtb2RlID0gdGltZXN0YW1wICUgMjsgLy9tb2RpZmllcyBob3cgb2Z0ZW4gYnVmZmVycyBhcmUgcmVkcmF3blxuICAgIGNvbnN0IGluY3JlbWVudCA9IG1vZGUgPyAtMSA6IDE7XG4gICAgY29uc3QgdG90YWxDZWxscyA9IHJlYWRCdWZmZXIud2lkdGggKiByZWFkQnVmZmVyLmhlaWdodDtcbiAgICBsZXQgaSA9IG1vZGUgKiAodG90YWxDZWxscyAtIDEpO1xuICAgIGxldCB3ZXN0ID0gaSAtIDE7XG4gICAgbGV0IGVhc3QgPSBpICsgMTtcbiAgICBsZXQgbm9ydGggPSBpIC0gcmVhZEJ1ZmZlci53aWR0aDtcbiAgICBsZXQgc291dGggPSBpICsgcmVhZEJ1ZmZlci53aWR0aDtcbiAgICB3aGlsZSAoaSA+PSAwICYmIGkgPCB0b3RhbENlbGxzKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBpZiAodGltZUJ1ZmZlcltpXSA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICBpICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgIG5vcnRoICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgIHNvdXRoICs9IGluY3JlbWVudDtcbiAgICAgICAgICAgIGVhc3QgKz0gaW5jcmVtZW50O1xuICAgICAgICAgICAgd2VzdCArPSBpbmNyZW1lbnQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHJlYWRCdWZmZXJbaV07XG4gICAgICAgIGNvbnN0IG5vcnRod2VzdCA9IG5vcnRoIC0gMTtcbiAgICAgICAgY29uc3Qgbm9ydGhlYXN0ID0gbm9ydGggKyAxO1xuICAgICAgICBjb25zdCBzb3V0aHdlc3QgPSBzb3V0aCAtIDE7XG4gICAgICAgIGNvbnN0IHNvdXRoZWFzdCA9IHNvdXRoICsgMTtcbiAgICAgICAgY29uc3QgaW5Sb3cgPSBpICUgcmVhZEJ1ZmZlci53aWR0aDtcbiAgICAgICAgY29uc3Qgd2VzdEVkZ2UgPSBpblJvdyA9PT0gMDtcbiAgICAgICAgY29uc3QgZWFzdEVkZ2UgPSBpblJvdyA9PT0gcmVhZEJ1ZmZlci53aWR0aCAtIDE7XG4gICAgICAgIGNvbnN0IHNsaXBSYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICBpZiAoY2VsbC5ncmF2aXR5ID4gMCAmJiBzb3V0aCA8IHRvdGFsQ2VsbHMgJiZcbiAgICAgICAgICAgICFyZWFkQnVmZmVyW3NvdXRoXS5pbW1vYmlsZSAmJlxuICAgICAgICAgICAgY2VsbC5kZW5zaXR5ID4gcmVhZEJ1ZmZlcltzb3V0aF0uZGVuc2l0eVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGlmICh0aW1lQnVmZmVyW3NvdXRoXSA8IHRpbWVzdGFtcCAmJiBjZWxsLmdyYXZpdHkgPiByYW5kb20pIHtcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcltpXSA9IHJlYWRCdWZmZXJbc291dGhdO1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW3NvdXRoXSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgdGltZUJ1ZmZlcltpXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW3NvdXRoXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5ncmF2aXR5IDwgMCAmJiBub3J0aCA+PSAwICYmXG4gICAgICAgICAgICAhcmVhZEJ1ZmZlcltub3J0aF0uaW1tb2JpbGUgJiZcbiAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA8IHJlYWRCdWZmZXJbbm9ydGhdLmRlbnNpdHlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAodGltZUJ1ZmZlcltub3J0aF0gPCB0aW1lc3RhbXAgJiYgY2VsbC5ncmF2aXR5IDwgLXJhbmRvbSkge1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW2ldID0gcmVhZEJ1ZmZlcltub3J0aF07XG4gICAgICAgICAgICAgICAgd3JpdGVCdWZmZXJbbm9ydGhdID0gY2VsbDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW2ldID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHRpbWVCdWZmZXJbbm9ydGhdID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmdyYXZpdHkgJiYgY2VsbC5zbGlkZSA+IHJhbmRvbSkge1xuICAgICAgICAgICAgY29uc3Qgd2VzdFN0ZXAgPSBjZWxsLmdyYXZpdHkgPiAwID8gc291dGh3ZXN0IDogbm9ydGh3ZXN0O1xuICAgICAgICAgICAgY29uc3QgZWFzdFN0ZXAgPSBjZWxsLmdyYXZpdHkgPiAwID8gc291dGhlYXN0IDogbm9ydGhlYXN0O1xuICAgICAgICAgICAgY29uc3Qgd2VzdEFsbG93ZWQgPSAhd2VzdEVkZ2UgJiYgKFxuICAgICAgICAgICAgICAgIHdlc3RTdGVwID49IDAgJiYgd2VzdFN0ZXAgPCB0b3RhbENlbGxzICYmXG4gICAgICAgICAgICAgICAgIXJlYWRCdWZmZXJbd2VzdFN0ZXBdLmltbW9iaWxlICYmIChjZWxsLmdyYXZpdHkgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5kZW5zaXR5ID4gcmVhZEJ1ZmZlclt3ZXN0U3RlcF0uZGVuc2l0eSA6XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA8IHJlYWRCdWZmZXJbd2VzdFN0ZXBdLmRlbnNpdHlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZWFzdEFsbG93ZWQgPSAhZWFzdEVkZ2UgJiYgKFxuICAgICAgICAgICAgICAgIGVhc3RTdGVwID49IDAgJiYgZWFzdFN0ZXAgPCB0b3RhbENlbGxzICYmXG4gICAgICAgICAgICAgICAgIXJlYWRCdWZmZXJbZWFzdFN0ZXBdLmltbW9iaWxlICYmIChjZWxsLmdyYXZpdHkgPiAwID9cbiAgICAgICAgICAgICAgICAgICAgY2VsbC5kZW5zaXR5ID4gcmVhZEJ1ZmZlcltlYXN0U3RlcF0uZGVuc2l0eSA6XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA8IHJlYWRCdWZmZXJbZWFzdFN0ZXBdLmRlbnNpdHlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHdlc3RBbGxvd2VkICYmICghZWFzdEFsbG93ZWQgfHwgTWF0aC5yYW5kb20oKSA8IDAuNSkpIHtcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcltpXSA9IHJlYWRCdWZmZXJbd2VzdFN0ZXBdO1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW3dlc3RTdGVwXSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgdGltZUJ1ZmZlcltpXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW3dlc3RTdGVwXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFzdEFsbG93ZWQpIHtcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcltpXSA9IHJlYWRCdWZmZXJbZWFzdFN0ZXBdO1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW2Vhc3RTdGVwXSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgdGltZUJ1ZmZlcltpXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW2Vhc3RTdGVwXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5zbGlwID4gc2xpcFJhbmRvbSAmJiAoXG4gICAgICAgICAgICAoY2VsbC5ncmF2aXR5ID4gMCAmJiBzb3V0aCA8IHRvdGFsQ2VsbHMgJiYgdGltZUJ1ZmZlcltzb3V0aF0gPCB0aW1lc3RhbXAgLSAyKSB8fFxuICAgICAgICAgICAgKGNlbGwuZ3Jhdml0eSA8IDAgJiYgbm9ydGggPj0gMCAmJiB0aW1lQnVmZmVyW25vcnRoXSA8IHRpbWVzdGFtcCAtIDIpXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlc3RCb3VuZCA9IGkgLSAoaSAlIHJlYWRCdWZmZXIud2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgZWFzdEJvdW5kID0gd2VzdEJvdW5kICsgcmVhZEJ1ZmZlci53aWR0aCAtIDE7XG4gICAgICAgICAgICBsZXQgd2VzdENlbGwgPSBpO1xuICAgICAgICAgICAgbGV0IGVhc3RDZWxsID0gaTtcbiAgICAgICAgICAgIGxldCB3ZXN0U3RlcCA9IGNlbGwuZ3Jhdml0eSA+IDAgPyBzb3V0aCA6IG5vcnRoO1xuICAgICAgICAgICAgbGV0IGVhc3RTdGVwID0gd2VzdFN0ZXA7XG4gICAgICAgICAgICBsZXQgd2VzdFVuZGVyID0gd2VzdFN0ZXAgKyByZWFkQnVmZmVyLndpZHRoO1xuICAgICAgICAgICAgbGV0IGVhc3RVbmRlciA9IHdlc3RVbmRlcjtcbiAgICAgICAgICAgIGxldCB3ZXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGVhc3RPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbGFzdFdlc3QgPSAwO1xuICAgICAgICAgICAgbGV0IGxhc3RFYXN0ID0gMDtcbiAgICAgICAgICAgIGlmIChjZWxsLmdyYXZpdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHdlc3RDZWxsID4gd2VzdEJvdW5kICYmIHdlc3RTdGVwIDwgdG90YWxDZWxscyAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2VzdENlbGwtLTsgd2VzdFN0ZXAtLTsgd2VzdFVuZGVyLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRCdWZmZXJbd2VzdENlbGxdLmltbW9iaWxlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRlbnNpdHkgPCByZWFkQnVmZmVyW3dlc3RDZWxsXS5kZW5zaXR5XG4gICAgICAgICAgICAgICAgICAgICkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICFyZWFkQnVmZmVyW3dlc3RTdGVwXS5pbW1vYmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kZW5zaXR5ID4gcmVhZEJ1ZmZlclt3ZXN0U3RlcF0uZGVuc2l0eVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lQnVmZmVyW3dlc3RTdGVwXSA8IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlc3RPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0V2VzdCA9IHdlc3RTdGVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjI1IHx8IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZXN0VW5kZXIgPCB0b3RhbENlbGxzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJlYWRCdWZmZXJbd2VzdFVuZGVyXS5pbW1vYmlsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA+IHJlYWRCdWZmZXJbd2VzdFVuZGVyXS5kZW5zaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICApKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoZWFzdENlbGwgPCBlYXN0Qm91bmQgJiYgZWFzdFN0ZXAgPCB0b3RhbENlbGxzIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBlYXN0Q2VsbCsrOyBlYXN0U3RlcCsrOyBlYXN0VW5kZXIrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEJ1ZmZlcltlYXN0Q2VsbF0uaW1tb2JpbGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA8IHJlYWRCdWZmZXJbZWFzdENlbGxdLmRlbnNpdHlcbiAgICAgICAgICAgICAgICAgICAgKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIXJlYWRCdWZmZXJbZWFzdFN0ZXBdLmltbW9iaWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRlbnNpdHkgPiByZWFkQnVmZmVyW2Vhc3RTdGVwXS5kZW5zaXR5XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVCdWZmZXJbZWFzdFN0ZXBdIDwgdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzdE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFYXN0ID0gZWFzdFN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMjUgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc3RVbmRlciA8IHRvdGFsQ2VsbHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcmVhZEJ1ZmZlcltlYXN0VW5kZXJdLmltbW9iaWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kZW5zaXR5ID4gcmVhZEJ1ZmZlcltlYXN0VW5kZXJdLmRlbnNpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzd2FwVGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHdlc3RPcGVuICYmIGVhc3RPcGVuKSB7XG4gICAgICAgICAgICAgICAgc3dhcFRhcmdldCA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyBsYXN0V2VzdCA6IGxhc3RFYXN0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3ZXN0T3Blbikge1xuICAgICAgICAgICAgICAgIHN3YXBUYXJnZXQgPSBsYXN0V2VzdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWFzdE9wZW4pIHtcbiAgICAgICAgICAgICAgICBzd2FwVGFyZ2V0ID0gbGFzdEVhc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3dhcFRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgd3JpdGVCdWZmZXJbaV0gPSByZWFkQnVmZmVyW3N3YXBUYXJnZXRdO1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW3N3YXBUYXJnZXRdID0gY2VsbDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW2ldID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIHRpbWVCdWZmZXJbc3dhcFRhcmdldF0gPSB0aW1lc3RhbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuc2NhdHRlciA+IHJhbmRvbSkge1xuICAgICAgICAgICAgY29uc3Qgd2VzdEFsbG93ZWQgPSAhd2VzdEVkZ2UgJiYgKFxuICAgICAgICAgICAgICAgIHRpbWVCdWZmZXJbd2VzdF0gPCB0aW1lc3RhbXAgJiZcbiAgICAgICAgICAgICAgICAhcmVhZEJ1ZmZlclt3ZXN0XS5pbW1vYmlsZSAmJiAoY2VsbC5ncmF2aXR5ID4gMCA/XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGVuc2l0eSA+PSByZWFkQnVmZmVyW3dlc3RdLmRlbnNpdHkgOlxuICAgICAgICAgICAgICAgICAgICBjZWxsLmRlbnNpdHkgPD0gcmVhZEJ1ZmZlclt3ZXN0XS5kZW5zaXR5XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGVhc3RBbGxvd2VkID0gIWVhc3RFZGdlICYmIChcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW2Vhc3RdIDwgdGltZXN0YW1wICYmXG4gICAgICAgICAgICAgICAgIXJlYWRCdWZmZXJbZWFzdF0uaW1tb2JpbGUgJiYgKGNlbGwuZ3Jhdml0eSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmRlbnNpdHkgPj0gcmVhZEJ1ZmZlcltlYXN0XS5kZW5zaXR5IDpcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5kZW5zaXR5IDw9IHJlYWRCdWZmZXJbZWFzdF0uZGVuc2l0eVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAod2VzdEFsbG93ZWQgJiYgKCFlYXN0QWxsb3dlZCB8fCBNYXRoLnJhbmRvbSgpIDwgMC41KSkge1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW2ldID0gcmVhZEJ1ZmZlclt3ZXN0XTtcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlclt3ZXN0XSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgdGltZUJ1ZmZlcltpXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW3dlc3RdID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlYXN0QWxsb3dlZCkge1xuICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyW2ldID0gcmVhZEJ1ZmZlcltlYXN0XTtcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcltlYXN0XSA9IGNlbGw7XG4gICAgICAgICAgICAgICAgdGltZUJ1ZmZlcltpXSA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICB0aW1lQnVmZmVyW2Vhc3RdID0gdGltZXN0YW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZUJ1ZmZlcltpXSA8IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgd3JpdGVCdWZmZXJbaV0gPSByZWFkQnVmZmVyW2ldO1xuICAgICAgICB9XG4gICAgICAgIGkgKz0gaW5jcmVtZW50O1xuICAgICAgICBub3J0aCArPSBpbmNyZW1lbnQ7XG4gICAgICAgIHNvdXRoICs9IGluY3JlbWVudDtcbiAgICAgICAgZWFzdCArPSBpbmNyZW1lbnQ7XG4gICAgICAgIHdlc3QgKz0gaW5jcmVtZW50O1xuICAgIH1cbn1cblxuY29uc3QgdmVydGV4U2hhZGVyID0gYFxuICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xuICAgIGF0dHJpYnV0ZSB2ZWMyIGFfcG9zaXRpb247XG4gICAgdmFyeWluZyB2ZWMyIHZfcG9zaXRpb247XG4gICAgdm9pZCBtYWluKCl7XG4gICAgICAgIHZfcG9zaXRpb24gPSBhX3Bvc2l0aW9uO1xuICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoXG4gICAgICAgICAgICBhX3Bvc2l0aW9uLnggKiAyLjAgLSAxLjAsIHZfcG9zaXRpb24ueSAqIC0yLjAgKyAxLjAsIDAuMCwgMS4wXG4gICAgICAgICk7XG4gICAgfVxuYDtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBgXG4gICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XG4gICAgdW5pZm9ybSBzYW1wbGVyMkQgdV90ZXh0dXJlO1xuICAgIHZhcnlpbmcgdmVjMiB2X3Bvc2l0aW9uO1xuICAgIHZvaWQgbWFpbigpe1xuICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV90ZXh0dXJlLCB2X3Bvc2l0aW9uKTtcbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBnbCA9IHR3Z2wuZ2V0V2ViR0xDb250ZXh0KGNhbnZhcywge1xuICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgIGRlcHRoOiBmYWxzZSxcbiAgICAgICAgc3RlbmNpbDogZmFsc2UsXG4gICAgfSk7XG4gICAgXG4gICAgdHdnbC5zZXREZWZhdWx0cyh7IHRleHR1cmVDb2xvcjogWzEsIDAsIDAsIDFdIH0pO1xuICAgIHR3Z2wuc2V0RGVmYXVsdHMoeyBhdHRyaWJQcmVmaXg6ICdhXycgfSk7XG5cbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTsgLy9yZW1vdmVzIG5vbiB2aXNpYmxlIHRyaWFuZ2xlcyBiZWZvcmUgcmFzdGVyaXphdGlvblxuICAgIGdsLmNsZWFyQ29sb3IoMCwgMCwgMCwgMSk7XG5cbiAgICBjb25zdCBidWZmZXJXaWR0aCA9IDEyODtcbiAgICBjb25zdCBidWZmZXJIZWlnaHQgPSAxMjg7XG5cbiAgICBsZXQgY3VycmVudEJ1ZmZlciA9IG5ld0J1ZmZlcihidWZmZXJXaWR0aCwgYnVmZmVySGVpZ2h0LCBkZWZhdWx0RWxlbWVudCk7XG4gICAgbGV0IHJlc2VydmVCdWZmZXIgPSBuZXdCdWZmZXIoYnVmZmVyV2lkdGgsIGJ1ZmZlckhlaWdodCwgZGVmYXVsdEVsZW1lbnQpO1xuICAgIGNvbnN0IHRpbWVCdWZmZXIgPSBuZXdCdWZmZXIoYnVmZmVyV2lkdGgsIGJ1ZmZlckhlaWdodCwgMCk7XG5cbiAgICBjb25zdCBwaXhlbHMgPSBuZXdQaXhlbERhdGEoY3VycmVudEJ1ZmZlcik7XG4gICAgY29uc3QgdGV4dHVyZSA9IG5ld1RleHR1cmUoZ2wsIHBpeGVscyk7XG5cbiAgICBjb25zdCBwcm9ncmFtSW5mbyA9IHR3Z2wuY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIFtcbiAgICAgICAgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcixcbiAgICBdKTtcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHtcbiAgICAgICAgdV90ZXh0dXJlOiB0ZXh0dXJlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYnVmZmVySW5mbyA9IHR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIG51bUNvbXBvbmVudHM6IDIsIGRhdGE6IFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXVxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IGZyYW1lID0gMTtcblxuICAgIGxldCBkcmF3aW5nID0gZmFsc2U7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGVsZW1lbnRzLndhbGw7XG5cbiAgICBsZXQgbGFzdE1vdXNlRXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgZnVuY3Rpb24gZHJhd0F0TW91c2UoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IHkgPSAoZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0O1xuICAgICAgICBpZiAoeCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgMSAmJiB5IDwgMSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCAqIGJ1ZmZlcldpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKHkgKiBidWZmZXJIZWlnaHQpO1xuICAgICAgICAgICAgZm9yIChsZXQgYnJ1c2hYID0gLTE7IGJydXNoWCA8IDE7IGJydXNoWCsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnJ1c2hZID0gLTE7IGJydXNoWSA8IDE7IGJydXNoWSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYXdYID0gaSArIGJydXNoWDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhd1kgPSBqICsgYnJ1c2hZO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhd1ggPj0gMCAmJiBkcmF3WSA+PSAwICYmIGRyYXdYIDwgYnVmZmVyV2lkdGggJiYgZHJhd1kgPCBidWZmZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCdWZmZXJbZHJhd1ggKyBkcmF3WSAqIGJ1ZmZlcldpZHRoXSA9IHNlbGVjdGVkRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkcmF3aW5nID0gdHJ1ZTtcbiAgICAgICAgbGFzdE1vdXNlRXZlbnQgPSBldmVudDtcbiAgICB9LCBmYWxzZSk7XG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxhc3RNb3VzZUV2ZW50ID0gZXZlbnQ7XG4gICAgfSwgZmFsc2UpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZHJhd2luZyA9IGZhbHNlO1xuICAgIH0sIGZhbHNlKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBkcmF3aW5nID0gZmFsc2U7XG4gICAgfSwgZmFsc2UpO1xuXG4gICAgY29uc3QgZWxlbWVudEJ1dHRvbnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnROYW1lIGluIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tlbGVtZW50TmFtZV07XG4gICAgICAgIGlmICghZWxlbWVudC5oaWRkZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBlbGVtZW50QnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnROYW1lKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBjb25zdCBoZXggPSByZ2JUb0hleChlbGVtZW50LnJlZCwgZWxlbWVudC5ncmVlbiwgZWxlbWVudC5ibHVlKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudEJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zdHlsZSA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2hleH07YDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlbWVudEJ1dHRvbnNcIikuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyIG9mIGVsZW1lbnRCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJlbGVtZW50QnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudEJ1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAvLyBEcmF3IHRvIGJ1ZmZlclxuICAgICAgICBpZiAoZHJhd2luZykgZHJhd0F0TW91c2UobGFzdE1vdXNlRXZlbnQpO1xuICAgICAgICAvLyBVcGRhdGUgZ2FtZSBzdGF0ZVxuICAgICAgICB1cGRhdGVCdWZmZXJzKGZyYW1lLCB0aW1lQnVmZmVyLCBjdXJyZW50QnVmZmVyLCByZXNlcnZlQnVmZmVyKVxuICAgICAgICBjb25zdCB0ZW1wQnVmZmVyID0gY3VycmVudEJ1ZmZlcjtcbiAgICAgICAgY3VycmVudEJ1ZmZlciA9IHJlc2VydmVCdWZmZXI7XG4gICAgICAgIHJlc2VydmVCdWZmZXIgPSB0ZW1wQnVmZmVyO1xuICAgICAgICAvLyBVcGRhdGUgdGV4dHVyZVxuICAgICAgICBibGl0UGl4ZWxEYXRhKHBpeGVscywgY3VycmVudEJ1ZmZlcik7XG4gICAgICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKFxuICAgICAgICAgICAgZ2wuVEVYVFVSRV8yRCwgMCwgMCwgMCwgYnVmZmVyV2lkdGgsIGJ1ZmZlckhlaWdodCxcbiAgICAgICAgICAgIGdsLlJHQiwgZ2wuVU5TSUdORURfQllURSwgcGl4ZWxzXG4gICAgICAgICk7XG4gICAgICAgIC8vIFJlbmRlclxuICAgICAgICB0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbyk7XG4gICAgICAgIHR3Z2wuZHJhd0J1ZmZlckluZm8oZ2wsIGJ1ZmZlckluZm8sIGdsLlRSSUFOR0xFX1NUUklQKTtcbiAgICAgICAgLy8gUmVhZHkgZm9yIG5leHQgZnJhbWVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgIGZyYW1lKys7XG4gICAgfTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufVxuXG5cbndpbmRvdy5vbmxvYWQgPSBzdGFydDsiXSwic291cmNlUm9vdCI6IiJ9