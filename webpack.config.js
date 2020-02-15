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
  },
  /**
   * Defines how modules are interpreted (including loaders)
   */
  module: {
    rules: [
      {
        // Regex match on the file to load differently
        test: /\.css$/,
        // What loaders (works bottom-to-top) will be applied
        // In this case, 
        //    source -> css-loader -> style-loader -> bundle
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
};
