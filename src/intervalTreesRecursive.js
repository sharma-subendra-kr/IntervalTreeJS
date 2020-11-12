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

import {
	inOrder,
	getNewMinMax,
	fixMinMaxFromCurrentToTop,
} from "./utils/utils";
import { printBinaryTree } from "./utils/printUtils";

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

	if (Array.isArray(options?.data)) {
		this.constructTree(options.data);
	}
}

IntervalTreeRecursive.prototype.constructor = IntervalTreeRecursive;

IntervalTreeRecursive.prototype.constructNode = function (interval) {
	return {
		max: interval.high,
		min: interval.low,
		interval: { low: interval.low, high: interval.high },
		d: interval.d,
		left: null,
		right: null,
	};
};

IntervalTreeRecursive.prototype.constructTree = function (data) {
	const length = data.length;
	for (let i = 0; i < length; i++) {
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
		const tempLeftSubtree = root.left;
		root.left = this.constructNode(interval);
		root.left.left = tempLeftSubtree;
		const newMinMax = getNewMinMax(root.left);
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

IntervalTreeRecursive.prototype._find = function (
	root,
	interval,
	d,
	findType,
	comp
) {
	if (root === null) return null;

	if (
		this.doOverlap(root.interval, interval) &&
		(d !== null && d !== undefined ? root.d === d : true) &&
		(comp ? comp(root, interval, d) : true)
	) {
		return root;
	}

	if (root.left !== null && root.left.max >= interval.low) {
		// go left
		return this._find(root.left, interval, d, findType, comp);
	} else if (root.right !== null && root.right.min <= interval.high) {
		// go right
		return this._find(root.right, interval, d, findType, comp);
	}

	return null;
};

IntervalTreeRecursive.prototype.findAll = function (
	interval,
	d,
	findType,
	comp
) {
	var stack = [];
	this._findAll(this.root, interval, d, findType, comp, stack);
	return stack;
};

IntervalTreeRecursive.prototype._findAll = function (
	root,
	interval,
	d,
	findType,
	comp,
	stack
) {
	if (root === null) return null;

	if (
		this.doOverlap(root.interval, interval) &&
		(d !== null && d !== undefined ? root.d === d : true) &&
		(comp ? comp(root, interval, d) : true)
	) {
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

IntervalTreeRecursive.prototype._remove = function (
	root,
	interval,
	d,
	comp,
	removed
) {
	if (root === null) return root;

	const predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

	if (
		root.interval.low === interval.low &&
		root.interval.high === interval.high &&
		(d !== null && d !== undefined ? root.d === d : true) &&
		(comp ? comp(root, interval, d) : true)
	) {
		removed = {
			low: root.interval.low,
			high: root.interval.high,
			d: root.d,
		};
		this.length--;

		if (root.left === null) {
			return root.right;
		} else if (root.right === null) {
			return root.left;
		}

		var obj = inOrder(root.right, predictedHeight);
		root.interval = obj.top.interval;
		root.d = obj.top.d;
		const temp = root.left;
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
		const newMinMax = getNewMinMax(root);
		root.min = newMinMax.min;
		root.max = newMinMax.max;
	} else if (root.right !== null && root.interval.low < interval.low) {
		// new condition: root.right !== null && root.interval.low < interval.low
		// old condition: root.right !== null && root.right.min <= interval.high
		// go right
		root.right = this._remove(root.right, interval, d, comp, removed);
		const newMinMax = getNewMinMax(root);
		root.min = newMinMax.min;
		root.max = newMinMax.max;
	}
	return root;
};

IntervalTreeRecursive.prototype.removeAll = function (interval, d, comp) {
	var removed = [];
	this._removeAll(this.root, interval, d, comp, removed);
	return removed;
};

IntervalTreeRecursive.prototype._removeAll = function (
	root,
	interval,
	d,
	comp,
	removed
) {
	if (root === null) return root;

	const predictedHeight = Math.ceil(Math.log2(this.length)) * 2;

	if (root.interval.low >= interval.low) {
		// go left
		root.left = this._removeAll(root.left, interval, d, comp, removed);
		const newMinMax = getNewMinMax(root);
		root.min = newMinMax.min;
		root.max = newMinMax.max;
	} else if (root.right !== null && root.interval.low < interval.low) {
		// new condition: root.right !== null && root.interval.low < interval.low
		// old condition: root.right !== null && root.right.min <= interval.high
		// go right
		root.right = this._removeAll(root.right, interval, d, comp, removed);
		const newMinMax = getNewMinMax(root);
		root.min = newMinMax.min;
		root.max = newMinMax.max;
	}

	if (
		root.interval.low === interval.low &&
		root.interval.high === interval.high &&
		(d !== null && d !== undefined ? root.d === d : true) &&
		(comp ? comp(root, interval, d) : true)
	) {
		removed.push({
			low: root.interval.low,
			high: root.interval.high,
			d: root.d,
		});
		this.length--;

		if (root.left === null) {
			return root.right;
		} else if (root.right === null) {
			return root.left;
		}

		var obj = inOrder(root.right, predictedHeight);
		root.interval = obj.top.interval;
		root.d = obj.top.d;
		const temp = root.left;
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
	const elements = new Array(this.length);
	const iter = { iter: 0 };
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
			interval: { low: root.interval.low, high: root.interval.high },
			d: root.d,
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

export default IntervalTreeRecursive;
