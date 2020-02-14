const path = require("path");

module.exports = {
  /**
   * Makes bundles unminified
   */
  mode: "development",
  /**
   * specifies the entry file for the module
   */
  entry: "./src/js/index.js",
  /**
   * provides details about the output of the module
   */
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
