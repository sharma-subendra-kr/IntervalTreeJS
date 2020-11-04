/** @license IntervalTreeJS

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IntervalTreeJS"] = factory();
	else
		root["IntervalTreeJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/



if (true) {
	module.exports = __webpack_require__(2);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license Queue

Queue, a JavaScript FIFO Queue.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Queue.

Queue is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Queue is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Queue.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/



if (true) {
	module.exports = __webpack_require__(3);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/
!function(t,r){ true?module.exports=r():undefined}(window,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="assets",e(e.s=0)}([function(t,r,e){"use strict";e.r(r),e.d(r,"ArrayStack",(function(){return i})),e.d(r,"ListStack",(function(){return s}));var n=function(t){this.initialSize=t.initialSize||100,this.length=this.initialSize,this.stack=new Array(this.length),this.ptr=-1,t&&Array.isArray(t.data)&&this.constructStack(t.data,t.constructReverse)};n.prototype.constructor=n,n.prototype.constructStack=function(t,r){var e=t.length;if(r)for(var n=e-1;n>=0;n--)this.push(t[n]);else for(var i=0;i<e;i++)this.push(t[i])},n.prototype.push=function(t){return null!=t&&(this.ptr===this.length-1&&this.resize(),this.stack[++this.ptr]=t,this.ptr+1)},n.prototype.pop=function(){if(this.ptr>=0){var t=this.stack[this.ptr];return this.ptr--,t}},n.prototype.resize=function(){var t=this.length,r=this.stack;this.length=2*this.length,this.stack=new Array(this.length);for(var e=0;e<t;e++)this.stack[e]=r[e]},n.prototype.isEmpty=function(){return this.ptr<0},n.prototype.peak=function(){if(this.ptr>=0)return this.stack[this.ptr]},n.prototype.getData=function(){for(var t=new Array(this.ptr+1),r=0;r<=this.ptr;r++)t[r]=this.stack[r];return t},n.prototype.getSize=function(){return this.ptr+1},n.prototype.empty=function(){this.ptr=-1},n.prototype.wipe=function(){this.length=this.initialSize,this.stack=new Array(this.length),this.ptr=-1};var i=n;function o(t){this.length=0,this.HEAD=null,t&&Array.isArray(t.data)&&this.constructStack(t.data,t.constructReverse)}o.prototype.constructor=o,o.prototype.constructNode=function(t){return{next:null,d:t}},o.prototype.constructStack=function(t,r){var e,n=t.length;if(r)for(e=n-1;e>=0;e--)this.push(t[e]);else for(e=0;e<n;e++)this.push(t[e])},o.prototype.push=function(t){var r=this.constructNode(t);return this.HEAD?(r.next=this.HEAD,this.HEAD=r):this.HEAD=r,++this.length},o.prototype.pop=function(){if(this.HEAD){var t=this.HEAD;return this.HEAD=this.HEAD.next,t.next=null,this.length--,t.d}},o.prototype.isEmpty=function(){return!this.HEAD},o.prototype.peak=function(){var t;return null===(t=this.HEAD)||void 0===t?void 0:t.d},o.prototype.getData=function(){for(var t=this.HEAD,r=new Array(this.length),e=0;null!=t;)r[e++]=t.d,t=t.next;return r},o.prototype.getSize=function(){return this.length},o.prototype.empty=function(){this.HEAD=null,this.length=0};var s=o;
/** @license Stack

Stack, a JavaScript LIFO stack Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Stack.

Stack is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Stack is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Stack.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/}])}));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/** @license Queue

Queue, a JavaScript FIFO Queue.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Queue.

Queue is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Queue is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Queue.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="assets",r(r.s=0)}([function(t,e,r){"use strict";function n(t){this.maxSize=t.maxSize,this.length=0,this.HEAD=null,this.TAIL=null,t&&Array.isArray(t.data)&&this.constructQueue(t.data,t.constructReverse)}r.r(e),r.d(e,"ArrayQueue",(function(){return u})),r.d(e,"ListQueue",(function(){return i})),n.prototype.constructor=n,n.prototype.constructNode=function(t){return{next:null,prev:null,d:t}},n.prototype.constructQueue=function(t,e){var r,n=t.length;if(e)for(r=n-1;r>=0;r--)this.enqueue(t[r]);else for(r=0;r<n;r++)this.enqueue(t[r])},n.prototype.enqueue=function(t){var e=this.constructNode(t);return this.HEAD?(e.next=this.HEAD,this.HEAD.prev=e,this.HEAD=e):(this.HEAD=e,this.TAIL=e),this.length+1>this.maxSize&&this.dequeue(),++this.length},n.prototype.dequeue=function(){if(this.TAIL){this.TAIL===this.HEAD&&(this.HEAD=null);var t=this.TAIL;return this.TAIL=this.TAIL.prev,this.TAIL&&(this.TAIL.next=null),t.prev=null,this.length--,t.d}},n.prototype.isEmpty=function(){return!this.HEAD},n.prototype.peak=function(){var t;return null===(t=this.TAIL)||void 0===t?void 0:t.d},n.prototype.getData=function(){for(var t=this.HEAD,e=new Array(this.length),r=0;null!=t;)e[r++]=t.d,t=t.next;return e},n.prototype.getSize=function(){return this.length},n.prototype.empty=function(){this.HEAD=null,this.TAIL=null,this.length=0};var i=n;function o(t){this.maxSize=t.maxSize,this.initialSize=t.initialSize||100,this.length=this.initialSize,this.queue=new Array(this.length),this.front=0,this.rear=-1,t&&Array.isArray(t.data)&&this.constructQueue(t.data,t.constructReverse)}o.prototype.constructor=o,o.prototype.constructQueue=function(t,e){var r=t.length;if(e)for(var n=r-1;n>=0;n--)this.enqueue(t[n]);else for(var i=0;i<r;i++)this.enqueue(t[i])},o.prototype.enqueue=function(t){return null!=t&&(this.rear===this.length-1&&this.resize(),this.queue[++this.rear]=t,this.rear-this.front+1>this.maxSize&&this.dequeue(),this.rear-this.front+1)},o.prototype.dequeue=function(){if(this.front<=this.rear)return this.queue[this.front++]},o.prototype.resize=function(){var t;this.rear-this.front+1<this.length/2?t=this.queue:(this.length*=2,t=new Array(this.length));for(var e=this.front,r=0;r<=this.rear-this.front;r++)t[r]=this.queue[e++];this.rear=this.rear-this.front,this.front=0,this.queue=t},o.prototype.isEmpty=function(){return this.front>this.rear},o.prototype.peak=function(){if(this.front<=this.rear)return this.queue[this.rear]},o.prototype.getData=function(){for(var t=this.rear-this.front+1,e=new Array(t),r=this.front,n=0;n<t;n++)e[n]=this.queue[r++];return e},o.prototype.getSize=function(){return this.rear-this.front+1},o.prototype.empty=function(){this.front=0,this.rear=-1},o.prototype.wipe=function(){this.length=this.initialSize,this.stack=new Array(this.length),this.front=0,this.rear=-1};var u=o;
/** @license Queue

Queue, a JavaScript FIFO Queue.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Queue.

Queue is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Queue is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Queue.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/}])}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "IntervalTreesRecursive", function() { return /* reexport */ intervalTreesRecursive; });
__webpack_require__.d(__webpack_exports__, "IntervalTreesIterative", function() { return /* reexport */ intervalTreesIterative; });

// EXTERNAL MODULE: ./node_modules/Stack/dist/index.js
var dist = __webpack_require__(0);

// CONCATENATED MODULE: ./src/utils/utils.js
/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

var utils_inOrder = function inOrder(node, predictedHeight) {
  var current = node;
  var stack = new dist["ArrayStack"]({
    initialSize: predictedHeight
  });
  stack.push(current); // const path = new Array(length);
  // let pathIter = -1;
  // path[++pathIter] = current;

  while (current.left !== null) {
    current = current.left;
    stack.push(current); // path[++pathIter] = current;
  }

  var leafLow = current.interval.low; // let copyPathIter = pathIter;

  var copyPathIter = stack.ptr;
  var top = null; // const currentToTopArr = new Array(pathIter + 1);

  var currentToTopArr = new Array(copyPathIter + 1);
  var currentToTopArrIter = -1; // while (copyPathIter >= 0 && path[copyPathIter].interval.low === leafLow) {

  while (copyPathIter >= 0 && stack.stack[copyPathIter].interval.low === leafLow) {
    // top = path[copyPathIter];
    top = stack.stack[copyPathIter];
    copyPathIter--;
    currentToTopArr[++currentToTopArrIter] = top;
  }

  currentToTopArr.length = currentToTopArrIter + 1;

  if (copyPathIter >= 0) {
    // make the immediate left node of parent of top (or current if top === current) to null
    //  OR right child of top (or current if top === current)
    if (top.right !== null) {
      // path[copyPathIter].left = top.right;
      stack.stack[copyPathIter].left = top.right;
      top.right = null;
    } else {
      stack.stack[copyPathIter].left = null;
    }
  } // pathIter = copyPathIter;


  var pathIter = copyPathIter;

  while (pathIter >= 0) {
    // update min, max of all the nodes above top.
    // const newMinMax = getNewMinMax(path[pathIter]);
    // path[pathIter].min = newMinMax.min;
    // path[pathIter].max = newMinMax.max;
    var newMinMax = getNewMinMax(stack.stack[pathIter]);
    stack.stack[pathIter].min = newMinMax.min;
    stack.stack[pathIter].max = newMinMax.max;
    pathIter--;
  }

  var right = null;

  if (top !== current) {
    if (top === node) {
      right = top.right;
    } else {
      right = node;
    }
  } else {
    if (current === node) {
      right = current.right;
    } else {
      right = node;
    }
  }

  return {
    top: top,
    current: current,
    right: right,
    currentToTopArr: currentToTopArr
  };
};
var fixMinMaxFromCurrentToTop = function fixMinMaxFromCurrentToTop(currentToTopArr) {
  var iter = 0;
  var len = currentToTopArr.length;

  while (iter < len) {
    var newMinMax = getNewMinMax(currentToTopArr[iter]);
    currentToTopArr[iter].min = newMinMax.min;
    currentToTopArr[iter].max = newMinMax.max;
    iter++;
  }
};
var getNewMinMax = function getNewMinMax(root) {
  var _root$left, _root$right, _root$right2, _root$left2, _root$left3, _root$right3, _root$right4;

  var min = root.interval.low;
  var max = root.interval.high;
  var leftMin = !isNaN((_root$left = root.left) === null || _root$left === void 0 ? void 0 : _root$left.min) ? root.left.min : null;
  var rightMin = !isNaN((_root$right = root.right) === null || _root$right === void 0 ? void 0 : _root$right.min) ? (_root$right2 = root.right) === null || _root$right2 === void 0 ? void 0 : _root$right2.min : null;
  var leftMax = !isNaN((_root$left2 = root.left) === null || _root$left2 === void 0 ? void 0 : _root$left2.max) ? (_root$left3 = root.left) === null || _root$left3 === void 0 ? void 0 : _root$left3.max : null;
  var rightMax = !isNaN((_root$right3 = root.right) === null || _root$right3 === void 0 ? void 0 : _root$right3.max) ? (_root$right4 = root.right) === null || _root$right4 === void 0 ? void 0 : _root$right4.max : null;

  if (leftMin < min && leftMin !== null) {
    min = leftMin;
  }

  if (rightMin < min && rightMin !== null) {
    min = rightMin;
  }

  if (leftMax > max && leftMax !== null) {
    max = leftMax;
  }

  if (rightMax > max && rightMax !== null) {
    max = rightMax;
  }

  return {
    min: min,
    max: max
  };
};
// CONCATENATED MODULE: ./src/utils/printUtils.js
/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/
var getNodelevel = function getNodelevel(root, node) {
  var level = 0;

  while (root !== node) {
    if (root.interval.low >= node.interval.low) {
      root = root.left;
    } else {
      root = root.right;
    }

    level++;
  }

  if (root === node) {
    level++;
  } else if (root === null) {
    level = 0;
  }

  return level;
};
var printBinaryTree = function printBinaryTree(root, length, func) {
  var _root = JSON.parse(JSON.stringify(root));

  var s = new Array(length);
  var sIter = -1;
  var totalLevels = 0;
  var count = -1;
  s[++sIter] = _root;

  while (sIter >= 0) {
    var t = s[sIter];
    t.id = ++count;
    sIter--;
    var level = getNodelevel(_root, t) - 1;

    if (level > totalLevels) {
      totalLevels = level;
    }

    t.level = level;

    if (t.right !== null) {
      t.right.parentId = t.id;
      t.right.branched = "right";
      t.right.parent = t;
      s[++sIter] = t.right;
    }

    if (t.left !== null) {
      t.left.parentId = t.id;
      t.left.branched = "left";
      t.left.parent = t;
      s[++sIter] = t.left;
    }
  }

  var html = [];
  var arrowsHtml = [];
  var WIDTH = 60;
  var HEIGHT = 60;
  var BORDER = 1;
  var MARGIN = 5;
  var TOTAL_WIDTH = WIDTH + 2 * BORDER + 2 * MARGIN;
  var TOTAL_HEIGHT = HEIGHT + 2 * BORDER + 2 * MARGIN;
  var leafNodesNum = Math.pow(2, totalLevels);
  var maxLevelWidth = leafNodesNum * TOTAL_WIDTH;
  var stack = new Array(length);
  var stackIter = -1;
  stack[++stackIter] = _root;

  while (stackIter >= 0) {
    var top = stack[stackIter];
    stackIter--;

    if (top.level === 0) {
      top.pos = {
        c: maxLevelWidth / 2,
        x: maxLevelWidth / 2 - TOTAL_WIDTH / 2,
        y: MARGIN
      };
    } else {
      var distanceBetnChildren = (Math.pow(2, totalLevels - top.level) - 1) / 2 * TOTAL_WIDTH;

      if (top.branched === "left") {
        top.pos = {
          c: top.parent.pos.c - distanceBetnChildren - TOTAL_WIDTH / 2,
          x: top.parent.pos.c - distanceBetnChildren - TOTAL_WIDTH,
          y: MARGIN
        };
      } else {
        top.pos = {
          c: top.parent.pos.c + distanceBetnChildren + TOTAL_WIDTH / 2,
          x: top.parent.pos.c + distanceBetnChildren,
          y: MARGIN
        };
      }
    }

    if (!html[top.level]) {
      html[top.level] = "<g class=\"interval-tree-print-level\" data-attr=\"level-".concat(top.level, "\" transform=\"translate(", 0, ", ").concat(top.level * TOTAL_HEIGHT, ")\">");
    }

    html[top.level] += "<g class=\"interval-tree-print-node\" transform=\"translate(".concat(top.pos.x, ", ").concat(top.pos.y, ")\">\n\t\t\t<text class=\"interval-tree-print-node-id\" dx=\"5\" dy=\"0\">id: ").concat(top.id, "</text>\n\t\t\t<text class=\"interval-tree-print-node-parentId\" dx=\"5\" dy=\"15\">pId: ").concat(!isNaN(top.parentId) ? top.parentId : "none", "</text>\n\t\t\t<text class=\"interval-tree-print-node-interval\" dx=\"5\" dy=\"30\">l: ").concat(top.interval.low, ", h: ").concat(top.interval.high, "</text>\n\t\t\t<text class=\"interval-tree-print-node-minmax\" dx=\"5\" dy=\"45\">m: ").concat(top.min, ", x: ").concat(top.max, "</text>\n\t\t\t").concat(func ? "<text class=\"interval-tree-print-node-custom\"  dx=\"5\" dy=\"60\">\n\t\t\t".concat(func(top), "</text>") : "", "\n\t\t\t</g>");

    if (top.parent) {
      var line = "<line x1=\"".concat(top.parent.pos.c, "\" y1=\"").concat(top.parent.level * TOTAL_HEIGHT + MARGIN + BORDER + HEIGHT + BORDER, "\" x2=\"").concat(top.pos.c, "\" y2=\"").concat(top.level * TOTAL_HEIGHT + MARGIN + BORDER, "\" class=\"interval-tree-print-arrow\" stroke=\"black\"/>");
      arrowsHtml.push(line);
    }

    if (top.right !== null) {
      stack[++stackIter] = top.right;
    }

    if (top.left !== null) {
      stack[++stackIter] = top.left;
    }
  }

  for (var i = 0; i < html.length; i++) {
    html[i] += "</g>";
  }

  return "<svg class=\"interval-tree-print\" width=\"".concat(maxLevelWidth + 40, "\" height=\"").concat((totalLevels + 1) * TOTAL_HEIGHT + 40, "\"><g class=\"interval-tree-print-container\" transform=\"translate(20, 20)\">").concat(html.join("")).concat(arrowsHtml.join(""), "</g></svg>");
};
// CONCATENATED MODULE: ./src/intervalTreesRecursive.js
/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

 // var IntervalTreeRecursive = (function() {

/**
		node = {
			max: 0,
			min: 0,
			interval: {
				low: null,
				high: null
			},
			d: <type> user data
			left: null,
			right: null
		}
	*/

function IntervalTreeRecursive(options) {
  this.root = null;
  this.length = 0;

  if (options && Array.isArray(options.data)) {
    this.constructTree(options.data);
  }
}

IntervalTreeRecursive.prototype.constructor = IntervalTreeRecursive;

IntervalTreeRecursive.prototype.constructNode = function (interval) {
  return {
    max: interval.high,
    min: interval.low,
    interval: {
      low: interval.low,
      high: interval.high
    },
    d: interval.d,
    left: null,
    right: null
  };
};

IntervalTreeRecursive.prototype.constructTree = function (data) {
  var length = data.length;

  for (var i = 0; i < length; i++) {
    this.root = this.insert(data[i], this.root);
  }
};

IntervalTreeRecursive.prototype.insertRoot = function (interval) {
  // this function is deprecated
  this.root = this.constructNode(interval);
  return this.root;
};

IntervalTreeRecursive.prototype.getRoot = function () {
  return this.root;
};

IntervalTreeRecursive.prototype.insert = function (interval) {
  this.root = this._insert(this.root, interval);
  return this.root;
};

IntervalTreeRecursive.prototype._insert = function (root, interval) {
  if (root === null) {
    this.length++;
    return this.constructNode(interval);
  }

  if (root.interval.low > interval.low) {
    root.left = this._insert(root.left, interval);
  } else if (root.interval.low === interval.low) {
    this.length++;
    var tempLeftSubtree = root.left;
    root.left = this.constructNode(interval);
    root.left.left = tempLeftSubtree;
    var newMinMax = getNewMinMax(root.left);
    root.left.min = newMinMax.min;
    root.left.max = newMinMax.max;
  } else {
    root.right = this._insert(root.right, interval);
  }

  if (root.max < interval.high) {
    root.max = interval.high;
  }

  if (root.min > interval.low) {
    root.min = interval.low;
  }

  return root;
};

IntervalTreeRecursive.prototype.find = function (interval, d, findType, comp) {
  return this._find(this.root, interval, d, findType, comp);
};

IntervalTreeRecursive.prototype._find = function (root, interval, d, findType, comp) {
  if (root === null) return null;

  if (this.doOverlap(root.interval, interval) && (d !== null && d !== undefined ? root.d === d : true) && (comp ? comp(root, interval, d) : true)) {
    return root;
  }

  if (root.left !== null && root.left.max >= interval.low) {
    // go left
    return this._find(root.left, interval, d, findType, comp);
  } else {
    // go right
    return this._find(root.right, interval, d, findType, comp);
  }
};

IntervalTreeRecursive.prototype.findAll = function (interval, d, findType, comp) {
  var stack = [];

  this._findAll(this.root, interval, d, findType, comp, stack);

  return stack;
};

IntervalTreeRecursive.prototype._findAll = function (root, interval, d, findType, comp, stack) {
  if (root === null) return null;

  if (this.doOverlap(root.interval, interval) && (d !== null && d !== undefined ? root.d === d : true) && (comp ? comp(root, interval, d) : true)) {
    stack.push(root);
  }

  if (root.left !== null && root.left.max >= interval.low) {
    // go left
    this._findAll(root.left, interval, d, findType, comp, stack);
  }

  if (root.right !== null && root.right.min <= interval.high) {
    // go right
    this._findAll(root.right, interval, d, findType, comp, stack);
  }
};

IntervalTreeRecursive.prototype.remove = function (interval, d, comp) {
  var removed = null;

  this._remove(this.root, interval, d, comp, removed);

  return removed;
};

IntervalTreeRecursive.prototype._remove = function (root, interval, d, comp, removed) {
  if (root === null) return root;
  var predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

  if (root.interval.low === interval.low && root.interval.high === interval.high && (d !== null && d !== undefined ? root.d === d : true) && (comp ? comp(root, interval, d) : true)) {
    removed = {
      low: root.interval.low,
      high: root.interval.high,
      d: root.d
    };
    this.length--;

    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    var obj = utils_inOrder(root.right, predictedHeight);
    root.interval = obj.top.interval;
    root.d = obj.top.d;
    var temp = root.left;
    root.left = obj.top.left;
    root.right = obj.right;

    if (obj.current === obj.top) {
      root.left = temp;
    } else {
      obj.current.left = temp;
    }

    fixMinMaxFromCurrentToTop(obj.currentToTopArr);
    return root;
  }

  if (root.interval.low >= interval.low) {
    // go left
    root.left = this._remove(root.left, interval, d, comp, removed);
    var newMinMax = getNewMinMax(root);
    root.min = newMinMax.min;
    root.max = newMinMax.max;
  } else if (root.right !== null && root.interval.low < interval.low) {
    // new condition: root.right !== null && root.interval.low < interval.low
    // old condition: root.right !== null && root.right.min <= interval.high
    // go right
    root.right = this._remove(root.right, interval, d, comp, removed);

    var _newMinMax = getNewMinMax(root);

    root.min = _newMinMax.min;
    root.max = _newMinMax.max;
  }

  return root;
};

IntervalTreeRecursive.prototype.removeAll = function (interval, d, comp) {
  var removed = [];

  this._removeAll(this.root, interval, d, comp, removed);

  return removed;
};

IntervalTreeRecursive.prototype._removeAll = function (root, interval, d, comp, removed) {
  if (root === null) return root;
  var predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

  if (root.interval.low >= interval.low) {
    // go left
    root.left = this._removeAll(root.left, interval, d, comp, removed);
    var newMinMax = getNewMinMax(root);
    root.min = newMinMax.min;
    root.max = newMinMax.max;
  } else if (root.right !== null && root.interval.low < interval.low) {
    // new condition: root.right !== null && root.interval.low < interval.low
    // old condition: root.right !== null && root.right.min <= interval.high
    // go right
    root.right = this._removeAll(root.right, interval, d, comp, removed);

    var _newMinMax2 = getNewMinMax(root);

    root.min = _newMinMax2.min;
    root.max = _newMinMax2.max;
  }

  if (root.interval.low === interval.low && root.interval.high === interval.high && (d !== null && d !== undefined ? root.d === d : true) && (comp ? comp(root, interval, d) : true)) {
    removed.push({
      low: root.interval.low,
      high: root.interval.high,
      d: root.d
    });
    this.length--;

    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }

    var obj = utils_inOrder(root.right, predictedHeight);
    root.interval = obj.top.interval;
    root.d = obj.top.d;
    var temp = root.left;
    root.left = obj.top.left;
    root.right = obj.right;

    if (obj.current === obj.top) {
      root.left = temp;
    } else {
      obj.current.left = temp;
    }

    fixMinMaxFromCurrentToTop(obj.currentToTopArr);
  }

  return root;
};

IntervalTreeRecursive.prototype.getDataInArray = function () {
  var elements = new Array(this.length);
  var iter = {
    iter: 0
  };
  this.getArray(this.root, elements, iter);
  return elements;
};

IntervalTreeRecursive.prototype.getArray = function (root, elements, iter) {
  if (root === null) return null;

  if (root.left !== null) {
    this.getArray(root.left, elements, iter);
  }

  if (root !== null) {
    elements[iter.iter++] = {
      interval: {
        low: root.interval.low,
        high: root.interval.high
      },
      d: root.d
    };
  }

  if (root.right !== null) {
    this.getArray(root.right, elements, iter);
  }
};

IntervalTreeRecursive.prototype.doOverlap = function (interval, _interval) {
  if (interval.low <= _interval.high && _interval.low <= interval.high) {
    return true;
  } else {
    return false;
  }
};

IntervalTreeRecursive.prototype.isExact = function (interval, _interval) {
  if (interval.low === _interval.low && interval.high === _interval.high) {
    return true;
  } else {
    return false;
  }
};

IntervalTreeRecursive.prototype.printHtmlTree = function () {
  return printBinaryTree(this.root, this.length);
};

/* harmony default export */ var intervalTreesRecursive = (IntervalTreeRecursive);
// EXTERNAL MODULE: ./node_modules/Queue/dist/index.js
var Queue_dist = __webpack_require__(1);

// CONCATENATED MODULE: ./src/intervalTreesIterative.js
/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/



 // var IntervalTreeIterative = (function() {

/**
		node = {
			max: 0,
			min: 0,
			interval: {
				low: null,
				high: null
			},
			d: <type> user data
			left: null,
			right: null
		}
	*/

function IntervalTreeIterative(options) {
  var _options$data, _options$data2;

  this.options = options;
  this.root = null;
  this.length = 0;
  this.initialStackSize = (options === null || options === void 0 ? void 0 : (_options$data = options.data) === null || _options$data === void 0 ? void 0 : _options$data.length) * 2 || options.initialStackSize || 500;
  this.initialQueueSize = (options === null || options === void 0 ? void 0 : (_options$data2 = options.data) === null || _options$data2 === void 0 ? void 0 : _options$data2.length) * 2 || options.initialQueueSize || 500;
  this.queue = new Queue_dist["ArrayQueue"]({
    initialSize: this.initialQueueSize
  });
  this.stack = new dist["ArrayStack"]({
    initialSize: this.initialStackSize
  });
  this.path = new dist["ArrayStack"]({
    initialSize: this.initialStackSize
  });
  this.result = new dist["ArrayStack"]({
    initialSize: this.initialStackSize
  });
  this.removeList = new dist["ArrayStack"]({
    initialSize: this.initialStackSize
  });

  if (options && Array.isArray(options.data)) {
    this.constructTree(options.data);
  }

  delete this.options.data;
}

IntervalTreeIterative.prototype.constructor = IntervalTreeIterative;

IntervalTreeIterative.prototype.constructNode = function (interval) {
  return {
    max: interval.high,
    min: interval.low,
    interval: {
      low: interval.low,
      high: interval.high
    },
    d: interval.d,
    left: null,
    right: null
  };
};

IntervalTreeIterative.prototype.constructTree = function (data) {
  var length = data.length;

  for (var i = 0; i < length; i++) {
    this.insert(data[i]);
  }
};

IntervalTreeIterative.prototype.getRoot = function () {
  return this.root;
};

IntervalTreeIterative.prototype.insert = function (interval) {
  return this._insert(this.root, interval);
};

IntervalTreeIterative.prototype._insert = function (root, interval) {
  var newNode = this.constructNode(interval);
  var iter = root;
  var temp = null;

  while (iter !== null) {
    temp = iter;

    if (iter.max < interval.high) {
      iter.max = interval.high;
    }

    if (iter.min > interval.low) {
      iter.min = interval.low;
    }

    if (iter.interval.low > interval.low) {
      iter = iter.left;
    } else if (iter.interval.low === interval.low) {
      break;
    } else {
      iter = iter.right;
    }
  }

  if (temp === null) {
    temp = newNode;
    this.root = newNode;
  } else if (temp.interval.low > interval.low) {
    temp.left = newNode;
  } else if (temp.interval.low === interval.low) {
    var tempLeftSubtree = temp.left;
    temp.left = newNode;
    temp.left.left = tempLeftSubtree;
    var newMinMax = getNewMinMax(temp.left);
    temp.left.min = newMinMax.min;
    temp.left.max = newMinMax.max;
  } else {
    temp.right = newNode;
  }

  this.length++;
  return newNode;
};

IntervalTreeIterative.prototype.find = function (interval, d, findType, comp) {
  return this._find(this.root, interval, d, findType, comp);
};

IntervalTreeIterative.prototype._find = function (root, interval, d, findType, comp) {
  findType = findType || false;

  if (findType === true) {
    findType = this.isExact;
  } else if (findType === false) {
    findType = this.doOverlap;
  }

  if (root === null) return null;

  while (root != null) {
    if (findType(root.interval, interval) && (d !== null && d !== undefined ? root.d === d : true) && (comp ? comp(root, interval, d) : true)) {
      return root;
    }

    if (root.left !== null && root.left.max >= interval.low) {
      // go left
      root = root.left;
    } else {
      // go right
      root = root.right;
    }
  }

  return null;
};

IntervalTreeIterative.prototype.findAll = function (interval, d, findType, comp) {
  return this._findAll(this.root, interval, d, findType, comp);
};

IntervalTreeIterative.prototype._findAll = function (root, interval, d, findType, comp) {
  findType = findType || false;

  if (findType === true) {
    findType = this.isExact;
  } else if (findType === false) {
    findType = this.doOverlap;
  }

  this.stack.empty();
  this.queue.empty();
  this.queue.enqueue(root);
  if (root === null) return null;

  while (!this.queue.isEmpty()) {
    // check to see if queue is not empty
    var front = this.queue.dequeue();

    if (findType(front.interval, interval) && (d !== null && d !== undefined ? front.d === d : true) && (comp ? comp(front, interval, d) : true)) {
      this.stack.push(front);
    }

    if (front.left !== null && front.left.max >= interval.low) {
      // go left
      this.queue.enqueue(front.left);
    }

    if (front.right !== null && front.right.min <= interval.high) {
      // go right
      this.queue.enqueue(front.right);
    }
  }

  return this.stack.getData();
};

IntervalTreeIterative.prototype.findUsingComparator = function (comp, lcomp, rcomp) {
  return this._findUsingComparator(this.root, comp, lcomp, rcomp);
};

IntervalTreeIterative.prototype._findUsingComparator = function (root, comp, lcomp, rcomp) {
  if (root === null) return [];
  this.result.empty();
  this.stack.empty();
  var top;
  this.stack.push(root);

  while (!this.stack.isEmpty()) {
    top = this.stack.pop();

    if (comp(top)) {
      this.result.push(top);
    }

    if (top.right !== null && rcomp(top)) {
      this.stack.push(top.right);
    }

    if (top.left !== null && lcomp(top)) {
      this.stack.push(top.left);
    }
  }

  return this.result.getData();
};

IntervalTreeIterative.prototype.remove = function (interval, d, comp) {
  return this._remove(this.root, interval, d, comp);
};

IntervalTreeIterative.prototype._remove = function (root, interval, d, comp) {
  var parent = null;
  var branched = null;
  var removed = null;
  var predictedHeight = Math.ceil(Math.log2(this.length)) * 2;
  this.stack.empty();
  this.path.empty();
  this.stack.push(root);
  if (root === null) return null;

  while (!this.stack.isEmpty()) {
    // check to see if stack is not empty
    // pop top most item
    var top = this.stack.pop();

    if (top.interval.low === interval.low && top.interval.high === interval.high && (d !== null && d !== undefined ? top.d === d : true) && (comp ? comp(top, interval, d) : true)) {
      removed = {
        low: top.interval.low,
        high: top.interval.high,
        d: top.d
      };
      this.length--;

      if (top.left === null) {
        if (parent) {
          parent[branched] = top.right;
          top = top.right;
        } else {
          this.root = top.right;
        }
      } else if (top.right === null) {
        if (parent) {
          parent[branched] = top.left;
          top = top.left;
        } else {
          this.root = top.left;
        }
      } else {
        var obj = utils_inOrder(top.right, predictedHeight);
        top.interval = obj.top.interval;
        top.d = obj.top.d;
        var temp = top.left;
        top.left = obj.top.left;
        top.right = obj.right;

        if (obj.current === obj.top) {
          top.left = temp;
        } else {
          obj.current.left = temp;
        }

        fixMinMaxFromCurrentToTop(obj.currentToTopArr);
      }

      if (top) this.path.push(top);
      break;
    }

    this.path.push(top);

    if (top.right !== null && top.interval.low < interval.low) {
      // new condition: top.right !== null && top.interval.low < interval.low
      // old condition: top.right !== null && top.right.min <= interval.high
      // go right
      parent = top;
      branched = "right";
      this.stack.push(top.right);
    } else if (top.left !== null && top.interval.low >= interval.low) {
      // go left
      parent = top;
      branched = "left";
      this.stack.push(top.left);
    }
  }

  while (!this.path.isEmpty()) {
    var pathTop = this.path.pop();
    var newMinMax = getNewMinMax(pathTop);
    pathTop.min = newMinMax.min;
    pathTop.max = newMinMax.max;
  }

  return removed;
};

IntervalTreeIterative.prototype.removeAll = function (interval, d, comp) {
  return this._removeAll(this.root, interval, d, comp);
};

IntervalTreeIterative.prototype._removeAll = function (root, interval, d, comp) {
  var parent = null;
  var branched = null;
  var predictedHeight = Math.ceil(Math.log2(this.length)) * 2;
  this.removeList.empty();
  this.stack.empty();
  this.path.empty();
  this.stack.push(root);
  if (root === null) return null;

  while (!this.stack.isEmpty()) {
    // check to see if stack is not empty
    // pop top most item
    var top = this.stack.pop();

    if (top.interval.low === interval.low && top.interval.high === interval.high && (d !== null && d !== undefined ? top.d === d : true) && (comp ? comp(top, interval, d) : true)) {
      this.removeList.push({
        low: top.interval.low,
        high: top.interval.high,
        d: top.d
      });
      this.length--;

      if (top.left === null) {
        if (parent) {
          parent[branched] = top.right;
          top = top.right;
        } else {
          this.root = top.right;
        }
      } else if (top.right === null) {
        if (parent) {
          parent[branched] = top.left;
          top = top.left;
        } else {
          this.root = top.left;
        }
      } else {
        var obj = utils_inOrder(top.right, predictedHeight);
        top.interval = obj.top.interval;
        top.d = obj.top.d;
        var temp = top.left;
        top.left = obj.top.left;
        top.right = obj.right;

        if (obj.current === obj.top) {
          top.left = temp;
        } else {
          obj.current.left = temp;
        }

        fixMinMaxFromCurrentToTop(obj.currentToTopArr);
      }

      if (top) this.stack.push(top);
      continue;
    }

    this.path.push(top);

    if (top.right !== null && top.interval.low < interval.low) {
      // new condition: top.right !== null && top.interval.low < interval.low
      // old condition: top.right !== null && top.right.min <= interval.high
      // go right
      parent = top;
      branched = "right";
      this.stack.push(top.right);
    } else if (top.left !== null && top.interval.low >= interval.low) {
      // go left
      parent = top;
      branched = "left";
      this.stack.push(top.left);
    }
  }

  while (!this.path.isEmpty()) {
    var pathTop = this.path.pop();
    var newMinMax = getNewMinMax(pathTop);
    pathTop.min = newMinMax.min;
    pathTop.max = newMinMax.max;
  }

  return this.removeList.getData();
}; // IntervalTreeIterative.prototype.getDataInArray = function() {
// pre order
// 	if (this.root === null) return [];
// 	const elements = new Array(this.length);
// 	let iter = 0;
// 	const stack = new Array(this.length);
// 	let stackIter = -1;
// 	stack[++stackIter] = this.root;
// 	let top;
// 	let curr = this.root;
// 	while (stackIter >= 0) {
// 		top = stack[stackIter--];
// 		elements[iter++] = top;
// 		if (top.right !== null) {
// 			stack[++stackIter] = top.right;
// 		}
// 		if (top.left !== null) {
// 			stack[++stackIter] = top.left;
// 		}
// 	}
// 	return elements;
// };


IntervalTreeIterative.prototype.getSortedData = function () {
  // inorder
  if (this.root === null) return [];
  var elements = new Array(this.length);
  var iter = 0;
  this.stack.empty();
  var curr = this.root;

  while (curr !== null || !this.stack.isEmpty()) {
    while (curr !== null) {
      this.stack.push(curr);
      curr = curr.left;
    }

    curr = this.stack.pop();
    elements[iter++] = {
      interval: {
        low: curr.interval.low,
        high: curr.interval.high
      },
      d: curr.d
    };
    curr = curr.right;
  }

  return elements;
};

IntervalTreeIterative.prototype.doOverlap = function (interval, _interval) {
  if (interval.low <= _interval.high && _interval.low <= interval.high) {
    return true;
  } else {
    return false;
  }
};

IntervalTreeIterative.prototype.isExact = function (interval, _interval) {
  if (interval.low === _interval.low && interval.high === _interval.high) {
    return true;
  } else {
    return false;
  }
};

IntervalTreeIterative.prototype.setData = function (data) {
  this.emptyTree();
  this.constructTree(data);
};

IntervalTreeIterative.prototype.emptyTree = function () {
  this.root = null;
  var len = this.queue.queue.length;

  for (var i = 0; i < len; i++) {
    if (this.queue.queue[i]) {
      this.queue.queue[i].interval = null;
      this.queue.queue[i].d = null;
      this.queue.queue[i].left = null;
      this.queue.queue[i].right = null;
    }
  }

  len = this.stack.stack.length;

  for (var _i = 0; _i < len; _i++) {
    if (this.stack.stack[_i]) {
      this.stack.stack[_i].interval = null;
      this.stack.stack[_i].d = null;
      this.stack.stack[_i].left = null;
      this.stack.stack[_i].right = null;
    }
  }

  len = this.path.stack.length;

  for (var _i2 = 0; _i2 < len; _i2++) {
    if (this.path.stack[_i2]) {
      this.path.stack[_i2].interval = null;
      this.path.stack[_i2].d = null;
      this.path.stack[_i2].left = null;
      this.path.stack[_i2].right = null;
    }
  }

  len = this.result.stack.length;

  for (var _i3 = 0; _i3 < len; _i3++) {
    if (this.result.stack[_i3]) {
      this.result.stack[_i3].interval = null;
      this.result.stack[_i3].d = null;
      this.result.stack[_i3].left = null;
      this.result.stack[_i3].right = null;
    }
  }

  len = this.removeList.stack.length;

  for (var _i4 = 0; _i4 < len; _i4++) {
    if (this.removeList.stack[_i4]) {
      this.removeList.stack[_i4].interval = null;
      this.removeList.stack[_i4].d = null;
      this.removeList.stack[_i4].left = null;
      this.removeList.stack[_i4].right = null;
    }
  }
};

IntervalTreeIterative.prototype.printHtmlTree = function (func) {
  return printBinaryTree(this.root, this.length, func);
};

/* harmony default export */ var intervalTreesIterative = (IntervalTreeIterative);
// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(4);

// CONCATENATED MODULE: ./src/index.js
/** @license IntervalTreeJS

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of IntervalTreeJS.

IntervalTreeJS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

IntervalTreeJS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with IntervalTreeJS.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/





/***/ })
/******/ ]);
});