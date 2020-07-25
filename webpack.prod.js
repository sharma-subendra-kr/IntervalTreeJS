const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	devtool: "none",
	output: {
		path: __dirname + "/dist/umd/",
		filename:
			process.env.MINIMIZE === "true"
				? "interval.tree.js.production.min.js"
				: "interval.tree.js.development.js",
	},
});
