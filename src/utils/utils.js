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

import { ArrayStack } from "Stack";

export const inOrder = function (node, parent, length) {
	var current = node;
	// var currentParent = parent;

	const path = new Array(length);
	let pathIter = -1;
	path[++pathIter] = current;

	while (current.left !== null) {
		// currentParent = current;
		current = current.left;
		path[++pathIter] = current;
	}

	const leafLow = current.interval.low;
	let copyPathIter = pathIter;
	let top = null;

	const currentToTopArr = new Array(pathIter + 1);
	let currentToTopArrIter = -1;
	while (copyPathIter >= 0 && path[copyPathIter].interval.low === leafLow) {
		top = path[copyPathIter];
		copyPathIter--;
		currentToTopArr[++currentToTopArrIter] = top;
	}
	currentToTopArr.length = currentToTopArrIter + 1;

	if (copyPathIter >= 0) {
		// make the immediate left node of parent of top (or current if top === current) to null
		//  OR right child of top (or current if top === current)
		if (top.right !== null) {
			path[copyPathIter].left = top.right;
			top.right = null;
		} else {
			path[copyPathIter].left = null;
		}
	}
	pathIter = copyPathIter;
	while (pathIter >= 0) {
		// update min, max of all the nodes above top.
		const newMinMax = getNewMinMax(path[pathIter]);
		path[pathIter].min = newMinMax.min;
		path[pathIter].max = newMinMax.max;
		pathIter--;
	}

	let right = null;
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

	return { top, current, right, currentToTopArr };
};

export const fixMinMaxFromCurrentToTop = function (currentToTopArr) {
	let iter = 0;
	const len = currentToTopArr.length;
	while (iter < len) {
		const newMinMax = getNewMinMax(currentToTopArr[iter]);
		currentToTopArr[iter].min = newMinMax.min;
		currentToTopArr[iter].max = newMinMax.max;
		iter++;
	}
};

export const getNewMinMax = function (root) {
	let min = root.interval.low;
	let max = root.interval.high;

	const leftMin = !isNaN(root.left?.min) ? root.left.min : null;
	const rightMin = !isNaN(root.right?.min) ? root.right?.min : null;
	const leftMax = !isNaN(root.left?.max) ? root.left?.max : null;
	const rightMax = !isNaN(root.right?.max) ? root.right?.max : null;

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

	return { min, max };
};
