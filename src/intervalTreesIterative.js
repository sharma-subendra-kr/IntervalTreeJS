/*

IntervalTreeJS, a JavaScript Binary Search Tree library that helps to query, insert and delete intervals in the binary search tree.

Copyright © 2019-2020, Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

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

import {
	inOrder,
	getNewMinMax,
	fixMinMaxFromCurrentToTop,
} from "./utils/utils";
import { printBinaryTree } from "./utils/printUtils";

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
	this.root = null;
	this.data = [];
	this.length = 0;

	if (options && Array.isArray(options.data)) {
		this.data = JSON.parse(JSON.stringify(options.data));
		this.constructTree();
	}
}

IntervalTreeIterative.prototype.constructor = IntervalTreeIterative;

IntervalTreeIterative.prototype.constructNode = function(interval) {
	return {
		max: interval.high,
		min: interval.low,
		interval: { low: interval.low, high: interval.high },
		d: interval.d,
		left: null,
		right: null,
	};
};

IntervalTreeIterative.prototype.constructTree = function() {
	let length = this.data.length;
	for (let i = 0; i < length; i++) {
		this.insert(this.data[i]);
	}
};

IntervalTreeIterative.prototype.insertRoot = function(interval) {
	// this function is deprecated
	this.root = this.constructNode(interval);
	return this.root;
};

IntervalTreeIterative.prototype.getRoot = function() {
	return this.root;
};

IntervalTreeIterative.prototype.insert = function(interval) {
	return this._insert(this.root, interval);
};

IntervalTreeIterative.prototype._insert = function(root, interval) {
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
		let tempLeftSubtree = temp.left;
		temp.left = newNode;
		temp.left.left = tempLeftSubtree;
		const newMinMax = getNewMinMax(temp.left);
		temp.left.min = newMinMax.min;
		temp.left.max = newMinMax.max;
	} else {
		temp.right = newNode;
	}

	this.length++;

	return newNode;
};

IntervalTreeIterative.prototype.find = function(interval, d, findType) {
	return this._find(this.root, interval, d, findType);
};

IntervalTreeIterative.prototype._find = function(root, interval, d, findType) {
	findType = findType || false;
	if (findType === true) {
		findType = this.isExact;
	} else if (findType === false) {
		findType = this.doOverlap;
	}

	if (root === null) return null;

	while (root != null) {
		if (
			findType(root.interval, interval) &&
			(d !== null && d !== undefined ? (root.d === d ? true : false) : true)
		) {
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

IntervalTreeIterative.prototype.findAll = function(interval, d, findType) {
	return this._findAll(this.root, interval, d, findType);
};

IntervalTreeIterative.prototype._findAll = function(
	root,
	interval,
	d,
	findType
) {
	findType = findType || false;
	if (findType === true) {
		findType = this.isExact;
	} else if (findType === false) {
		findType = this.doOverlap;
	}

	var stack = new Array(this.length);
	var stackIter = 0;

	var queue = new Array(this.length);
	var queueFront = -1;
	var queueRear = 0;
	queue[++queueFront] = root;

	if (root === null) return null;

	while (queueFront <= queueRear) {
		//check to see if queue is not empty

		var front = queue[queueFront];
		queueFront++;

		if (
			findType(front.interval, interval) &&
			(d !== null && d !== undefined ? (front.d === d ? true : false) : true)
		) {
			stack[stackIter++] = front;
		}

		if (front.left !== null && front.left.max >= interval.low) {
			// go left
			queue[++queueRear] = front.left;
		}
		if (front.right !== null && front.right.min <= interval.high) {
			// go right
			queue[++queueRear] = front.right;
		}
	}

	var finalStack = new Array(stackIter);
	for (var i = 0; i < stackIter; i++) {
		finalStack[i] = stack[i];
	}

	return finalStack;
};

IntervalTreeIterative.prototype.remove = function(interval, d) {
	return this._remove(this.root, interval, d);
};

IntervalTreeIterative.prototype._remove = function(root, interval, d) {
	let parent = null;
	let branched = null;

	var removed = null;

	var stack = new Array(this.length);
	var stackIter = -1;

	let path = new Array(this.length);
	let pathIter = -1;

	stack[++stackIter] = root;

	if (root === null) return null;

	while (stackIter >= 0) {
		//check to see if stack is not empty

		// pop top most item
		var top = stack[stackIter];
		stack[stackIter] = null;
		stackIter--;

		if (
			top.interval.low === interval.low &&
			top.interval.high === interval.high &&
			(d !== null && d !== undefined ? (top.d === d ? true : false) : true)
		) {
			removed = {
				low: top.interval.low,
				high: top.interval.high,
				d: top.d,
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
				var obj = inOrder(top.right, top);
				top.interval = obj.top.interval;
				top.d = obj.top.d;
				const temp = top.left;
				top.left = obj.top.left;
				top.right = obj.right;
				if (obj.current === obj.top) {
					top.left = temp;
				} else {
					obj.current.left = temp;
				}

				fixMinMaxFromCurrentToTop(obj.currentToTopArr);
			}
			if (top) path[++pathIter] = top;
			break;
		}
		path[++pathIter] = top;

		if (top.right !== null && top.interval.low < interval.low) {
			// new condition: top.right !== null && top.interval.low < interval.low
			// old condition: top.right !== null && top.right.min <= interval.high
			// go right
			parent = top;
			branched = "right";
			stack[++stackIter] = top.right;
		} else if (top.left !== null && top.interval.low >= interval.low) {
			// go left
			parent = top;
			branched = "left";
			stack[++stackIter] = top.left;
		}
	}

	while (pathIter >= 0) {
		let newMinMax = getNewMinMax(path[pathIter]);
		path[pathIter].min = newMinMax.min;
		path[pathIter].max = newMinMax.max;
		pathIter--;
	}

	return removed;
};

IntervalTreeIterative.prototype.removeAll = function(interval, d) {
	return this._removeAll(this.root, interval, d);
};

IntervalTreeIterative.prototype._removeAll = function(root, interval, d) {
	let parent = null;
	let branched = null;

	var removeList = new Array(this.length);
	var removeListIter = 0;

	var stack = new Array(this.length);
	var stackIter = -1;

	let path = new Array(this.length);
	let pathIter = -1;

	stack[++stackIter] = root;

	if (root === null) return null;

	while (stackIter >= 0) {
		//check to see if stack is not empty

		// pop top most item
		var top = stack[stackIter];
		stack[stackIter] = null;
		stackIter--;

		if (
			top.interval.low === interval.low &&
			top.interval.high === interval.high &&
			(d !== null && d !== undefined ? (top.d === d ? true : false) : true)
		) {
			removeList[removeListIter++] = {
				low: top.interval.low,
				high: top.interval.high,
				d: top.d,
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
				var obj = inOrder(top.right, top);
				top.interval = obj.top.interval;
				top.d = obj.top.d;
				const temp = top.left;
				top.left = obj.top.left;
				top.right = obj.right;
				if (obj.current === obj.top) {
					top.left = temp;
				} else {
					obj.current.left = temp;
				}

				fixMinMaxFromCurrentToTop(obj.currentToTopArr);
			}
			if (top) stack[++stackIter] = top;
			continue;
		}
		path[++pathIter] = top;

		if (top.right !== null && top.interval.low < interval.low) {
			// new condition: top.right !== null && top.interval.low < interval.low
			// old condition: top.right !== null && top.right.min <= interval.high
			// go right
			parent = top;
			branched = "right";
			stack[++stackIter] = top.right;
		} else if (top.left !== null && top.interval.low >= interval.low) {
			// go left
			parent = top;
			branched = "left";
			stack[++stackIter] = top.left;
		}
	}

	while (pathIter >= 0) {
		let newMinMax = getNewMinMax(path[pathIter]);
		path[pathIter].min = newMinMax.min;
		path[pathIter].max = newMinMax.max;
		pathIter--;
	}

	var finalRemoveList = new Array(removeListIter);
	for (var i = 0; i < removeListIter; i++) {
		finalRemoveList[i] = removeList[i];
	}

	return finalRemoveList;
};

// IntervalTreeIterative.prototype.getDataInArray = function() {
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

IntervalTreeIterative.prototype.getSortedData = function() {
	// inorder
	if (this.root === null) return [];

	const elements = new Array(this.length);
	let iter = 0;

	const stack = new Array(this.length);
	let stackIter = -1;

	let curr = this.root;

	while (curr !== null || stackIter >= 0) {
		while (curr !== null) {
			stack[++stackIter] = curr;
			curr = curr.left;
		}

		curr = stack[stackIter--];
		elements[iter++] = {
			interval: { low: curr.interval.low, high: curr.interval.high },
			d: curr.d,
		};

		curr = curr.right;
	}

	return elements;
};

IntervalTreeIterative.prototype.doOverlap = function(interval, _interval) {
	if (interval.low <= _interval.high && _interval.low <= interval.high) {
		return true;
	} else {
		return false;
	}
};

IntervalTreeIterative.prototype.isExact = function(interval, _interval) {
	if (interval.low === _interval.low && interval.high === _interval.high) {
		return true;
	} else {
		return false;
	}
};

IntervalTreeIterative.prototype.printHtmlTree = function() {
	return printBinaryTree(this.root, this.length);
};

export default IntervalTreeIterative;
