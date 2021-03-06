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

export const getNodelevel = (root, node) => {
	let level = 0;
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

export const printBinaryTree = (root, length, func) => {
	let _root = JSON.parse(JSON.stringify(root));

	let s = new Array(length);
	let sIter = -1;
	let totalLevels = 0;
	let count = -1;

	s[++sIter] = _root;

	while (sIter >= 0) {
		let t = s[sIter];
		t.id = ++count;
		sIter--;

		const level = getNodelevel(_root, t) - 1;
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

	const html = [];
	const arrowsHtml = [];
	const WIDTH = 60;
	const HEIGHT = 60;
	const BORDER = 1;
	const MARGIN = 5;
	const TOTAL_WIDTH = WIDTH + 2 * BORDER + 2 * MARGIN;
	const TOTAL_HEIGHT = HEIGHT + 2 * BORDER + 2 * MARGIN;
	const leafNodesNum = Math.pow(2, totalLevels);
	const maxLevelWidth = leafNodesNum * TOTAL_WIDTH;

	let stack = new Array(length);
	let stackIter = -1;

	stack[++stackIter] = _root;

	while (stackIter >= 0) {
		const top = stack[stackIter];
		stackIter--;

		if (top.level === 0) {
			top.pos = {
				c: maxLevelWidth / 2,
				x: maxLevelWidth / 2 - TOTAL_WIDTH / 2,
				y: MARGIN,
			};
		} else {
			const distanceBetnChildren =
				((Math.pow(2, totalLevels - top.level) - 1) / 2) * TOTAL_WIDTH;
			if (top.branched === "left") {
				top.pos = {
					c: top.parent.pos.c - distanceBetnChildren - TOTAL_WIDTH / 2,
					x: top.parent.pos.c - distanceBetnChildren - TOTAL_WIDTH,
					y: MARGIN,
				};
			} else {
				top.pos = {
					c: top.parent.pos.c + distanceBetnChildren + TOTAL_WIDTH / 2,
					x: top.parent.pos.c + distanceBetnChildren,
					y: MARGIN,
				};
			}
		}

		if (!html[top.level]) {
			html[
				top.level
			] = `<g class="interval-tree-print-level" data-attr="level-${
				top.level
			}" transform="translate(${0}, ${top.level * TOTAL_HEIGHT})">`;
		}
		html[
			top.level
		] += `<g class="interval-tree-print-node" transform="translate(${
			top.pos.x
		}, ${top.pos.y})">
			<text class="interval-tree-print-node-id" dx="5" dy="0">id: ${top.id}</text>
			<text class="interval-tree-print-node-parentId" dx="5" dy="15">pId: ${
				!isNaN(top.parentId) ? top.parentId : "none"
			}</text>
			<text class="interval-tree-print-node-interval" dx="5" dy="30">l: ${
				top.interval.low
			}, h: ${top.interval.high}</text>
			<text class="interval-tree-print-node-minmax" dx="5" dy="45">m: ${
				top.min
			}, x: ${top.max}</text>
			${
				func
					? `<text class="interval-tree-print-node-custom"  dx="5" dy="60">
			${func(top)}</text>`
					: ``
			}
			</g>`;

		if (top.parent) {
			const line = `<line x1="${top.parent.pos.c}" y1="${
				top.parent.level * TOTAL_HEIGHT + MARGIN + BORDER + HEIGHT + BORDER
			}" x2="${top.pos.c}" y2="${
				top.level * TOTAL_HEIGHT + MARGIN + BORDER
			}" class="interval-tree-print-arrow" stroke="black"/>`;
			arrowsHtml.push(line);
		}

		if (top.right !== null) {
			stack[++stackIter] = top.right;
		}

		if (top.left !== null) {
			stack[++stackIter] = top.left;
		}
	}

	for (let i = 0; i < html.length; i++) {
		html[i] += `</g>`;
	}

	return `<svg class="interval-tree-print" width="${
		maxLevelWidth + 40
	}" height="${
		(totalLevels + 1) * TOTAL_HEIGHT + 40
	}"><g class="interval-tree-print-container" transform="translate(20, 20)">${html.join(
		""
	)}${arrowsHtml.join("")}</g></svg>`;
};
