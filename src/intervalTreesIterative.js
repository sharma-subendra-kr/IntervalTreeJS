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

import { ListStack as Stack } from "Stack";
import { ListQueue as Queue } from "Queue";

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
	this.length = 0;

	this.initialStackSize =
		options?.data?.length * 2 || options.initialStackSize || 500;
	this.initialQueueSize =
		options?.data?.length * 2 || options.initialQueueSize || 500;

	this.queue = new Queue({ initialSize: this.initialQueueSize });
	this.stack = new Stack({ initialSize: this.initialStackSize });
	this.path = new Stack({ initialSize: this.initialStackSize });
	this.result = new Stack({ initialSize: this.initialStackSize });
	this.removeList = new Stack({ initialSize: this.initialStackSize });

	if (options && Array.isArray(options.data)) {
		this.constructTree(options.data);
	}
}

IntervalTreeIterative.prototype.constructor = IntervalTreeIterative;

IntervalTreeIterative.prototype.constructNode = function (interval) {
	return {
		max: interval.high,
		min: interval.low,
		interval: { low: interval.low, high: interval.high },
		d: interval.d,
		left: null,
		right: null,
	};
};

IntervalTreeIterative.prototype.constructTree = function (data) {
	const length = data.length;
	for (let i = 0; i < length; i++) {
		this.insert(data[i]);
	}
};

IntervalTreeIterative.prototype.insertRoot = function (interval) {
	// this function is deprecated
	this.root = this.constructNode(interval);
	return this.root;
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
		const tempLeftSubtree = temp.left;
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

IntervalTreeIterative.prototype.find = function (interval, d, findType, comp) {
	return this._find(this.root, interval, d, findType, comp);
};

IntervalTreeIterative.prototype._find = function (
	root,
	interval,
	d,
	findType,
	comp
) {
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
			(d !== null && d !== undefined ? root.d === d : true) &&
			(comp ? comp(root, interval, d) : true)
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

IntervalTreeIterative.prototype.findAll = function (
	interval,
	d,
	findType,
	comp
) {
	return this._findAll(this.root, interval, d, findType, comp);
};

IntervalTreeIterative.prototype._findAll = function (
	root,
	interval,
	d,
	findType,
	comp
) {
	findType = findType || false;
	if (findType === true) {
		findType = this.isExact;
	} else if (findType === false) {
		findType = this.doOverlap;
	}

	this.stack.empty();
	// var stack = new Array(this.length);
	// var stackIter = 0;

	// var queue = new Array(this.length);
	// var queueFront = -1;
	// var queueRear = 0;
	// queue[++queueFront] = root;
	this.queue.empty();
	this.queue.enqueue(root);

	if (root === null) return null;

	// while (queueFront <= queueRear) {
	while (!this.queue.isEmpty()) {
		// check to see if queue is not empty

		// var front = queue[queueFront];
		// queueFront++;
		const front = this.queue.dequeue();

		if (
			findType(front.interval, interval) &&
			(d !== null && d !== undefined ? front.d === d : true) &&
			(comp ? comp(front, interval, d) : true)
		) {
			// stack[stackIter++] = front;
			this.stack.push(front);
		}

		if (front.left !== null && front.left.max >= interval.low) {
			// go left
			// queue[++queueRear] = front.left;
			this.queue.enqueue(front.left);
		}
		if (front.right !== null && front.right.min <= interval.high) {
			// go right
			// queue[++queueRear] = front.right;
			this.queue.enqueue(front.right);
		}
	}

	// var finalStack = new Array(stackIter);
	// for (var i = 0; i < stackIter; i++) {
	// 	finalStack[i] = stack[i];
	// }

	// return finalStack;
	return this.stack.getData();
};

IntervalTreeIterative.prototype.findUsingComparator = function (
	comp,
	lcomp,
	rcomp
) {
	return this._findUsingComparator(this.root, comp, lcomp, rcomp);
};

IntervalTreeIterative.prototype._findUsingComparator = function (
	root,
	comp,
	lcomp,
	rcomp
) {
	if (root === null) return [];

	this.result.empty();
	// const result = new Array(this.length);
	// let count = 0;

	this.stack.empty();
	let top;
	// const stack = new Array(this.length);
	// let stackIter = -1;
	// let top;

	this.stack.push(root);
	// stack[++stackIter] = root;

	while (!this.stack.isEmpty()) {
		// while (stackIter >= 0) {
		top = this.stack.pop();
		// top = stack[stackIter];
		// stackIter--;

		if (comp(top)) {
			// result[count++] = top;
			this.result.push(top);
		}

		if (top.right !== null && rcomp(top)) {
			// stack[++stackIter] = top.right;
			this.stack.push(top.right);
		}

		if (top.left !== null && lcomp(top)) {
			// stack[++stackIter] = top.left;
			this.stack.push(top.left);
		}
	}

	// const filteredResult = new Array(count);
	// for (let i = 0; i < count; i++) {
	// 	filteredResult[i] = result[i];
	// }

	// return filteredResult;
	return this.result.getData();
};

IntervalTreeIterative.prototype.remove = function (interval, d, comp) {
	return this._remove(this.root, interval, d, comp);
};

IntervalTreeIterative.prototype._remove = function (root, interval, d, comp) {
	let parent = null;
	let branched = null;

	let removed = null;

	const predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

	this.stack.empty();
	// var stack = new Array(this.length);
	// var stackIter = -1;

	this.path.empty();
	// const path = new Array(this.length);
	// let pathIter = -1;

	this.stack.push(root);
	// stack[++stackIter] = root;

	if (root === null) return null;

	// while (stackIter >= 0) {
	while (!this.stack.isEmpty()) {
		// check to see if stack is not empty

		// pop top most item
		let top = this.stack.pop();
		// var top = stack[stackIter];
		// stack[stackIter] = null;
		// stackIter--;

		if (
			top.interval.low === interval.low &&
			top.interval.high === interval.high &&
			(d !== null && d !== undefined ? top.d === d : true) &&
			(comp ? comp(top, interval, d) : true)
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
				var obj = inOrder(top.right, predictedHeight);
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
			// if (top) path[++pathIter] = top;
			if (top) this.path.push(top);
			break;
		}
		// path[++pathIter] = top;
		this.path.push(top);

		if (top.right !== null && top.interval.low < interval.low) {
			// new condition: top.right !== null && top.interval.low < interval.low
			// old condition: top.right !== null && top.right.min <= interval.high
			// go right
			parent = top;
			branched = "right";
			// stack[++stackIter] = top.right;
			this.stack.push(top.right);
		} else if (top.left !== null && top.interval.low >= interval.low) {
			// go left
			parent = top;
			branched = "left";
			// stack[++stackIter] = top.left;
			this.stack.push(top.left);
		}
	}

	// while (pathIter >= 0) {
	while (!this.path.isEmpty()) {
		// const newMinMax = getNewMinMax(path[pathIter]);
		// path[pathIter].min = newMinMax.min;
		// path[pathIter].max = newMinMax.max;
		// pathIter--;

		const pathTop = this.path.pop();
		const newMinMax = getNewMinMax(pathTop);
		pathTop.min = newMinMax.min;
		pathTop.max = newMinMax.max;
	}

	return removed;
};

IntervalTreeIterative.prototype.removeAll = function (interval, d, comp) {
	return this._removeAll(this.root, interval, d, comp);
};

IntervalTreeIterative.prototype._removeAll = function (
	root,
	interval,
	d,
	comp
) {
	let parent = null;
	let branched = null;

	const predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

	this.removeList.empty();
	// var removeList = new Array(this.length);
	// var removeListIter = 0;

	this.stack.empty();
	// var stack = new Array(this.length);
	// var stackIter = -1;

	this.path.empty();
	// const path = new Array(this.length);
	// let pathIter = -1;

	this.stack.push(root);
	// stack[++stackIter] = root;

	if (root === null) return null;

	// while (stackIter >= 0) {
	while (!this.stack.isEmpty()) {
		// check to see if stack is not empty

		// pop top most item
		// var top = stack[stackIter];
		// stack[stackIter] = null;
		// stackIter--;
		let top = this.stack.pop();

		if (
			top.interval.low === interval.low &&
			top.interval.high === interval.high &&
			(d !== null && d !== undefined ? top.d === d : true) &&
			(comp ? comp(top, interval, d) : true)
		) {
			// removeList[removeListIter++] = {
			// 	low: top.interval.low,
			// 	high: top.interval.high,
			// 	d: top.d,
			// };
			this.removeList.push({
				low: top.interval.low,
				high: top.interval.high,
				d: top.d,
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
				var obj = inOrder(top.right, predictedHeight);
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
			// if (top) stack[++stackIter] = top;
			if (top) this.stack.push(top);
			continue;
		}
		// path[++pathIter] = top;
		this.path.push(top);

		if (top.right !== null && top.interval.low < interval.low) {
			// new condition: top.right !== null && top.interval.low < interval.low
			// old condition: top.right !== null && top.right.min <= interval.high
			// go right
			parent = top;
			branched = "right";
			// stack[++stackIter] = top.right;
			this.stack.push(top.right);
		} else if (top.left !== null && top.interval.low >= interval.low) {
			// go left
			parent = top;
			branched = "left";
			// stack[++stackIter] = top.left;
			this.stack.push(top.left);
		}
	}

	// while (pathIter >= 0) {
	while (!this.path.isEmpty()) {
		// const newMinMax = getNewMinMax(path[pathIter]);
		// path[pathIter].min = newMinMax.min;
		// path[pathIter].max = newMinMax.max;
		// pathIter--;

		const pathTop = this.path.pop();
		const newMinMax = getNewMinMax(pathTop);
		pathTop.min = newMinMax.min;
		pathTop.max = newMinMax.max;
	}

	// var finalRemoveList = new Array(removeListIter);
	// for (var i = 0; i < removeListIter; i++) {
	// 	finalRemoveList[i] = removeList[i];
	// }

	// return finalRemoveList;

	return this.removeList.getData();
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

IntervalTreeIterative.prototype.getSortedData = function () {
	// inorder
	if (this.root === null) return [];

	const elements = new Array(this.length);
	let iter = 0;

	this.stack.empty();
	// const stack = new Array(this.length);
	// let stackIter = -1;

	let curr = this.root;

	while (curr !== null || !this.stack.isEmpty()) {
		while (curr !== null) {
			// stack[++stackIter] = curr;
			this.stack.push(curr);
			curr = curr.left;
		}

		// curr = stack[stackIter--];
		curr = this.stack.pop();
		elements[iter++] = {
			interval: { low: curr.interval.low, high: curr.interval.high },
			d: curr.d,
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

IntervalTreeIterative.prototype.emptyTree = function () {
	this.root = null;
};

IntervalTreeIterative.prototype.printHtmlTree = function (func) {
	return printBinaryTree(this.root, this.length, func);
};

export default IntervalTreeIterative;
