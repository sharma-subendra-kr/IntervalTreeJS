"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./umd/interval.tree.js.production.min.js");
} else {
  module.exports = require("./umd/interval.tree.js.development.js");
}
