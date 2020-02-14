# Adding Modules to the Bundle

## Problem

Now that we are building a bundle that our main page can see, we want to begin adding modules to the bundle.

In addition, we want to begin giving ourselves a way to manually configure webpack to suit our needs

## Process

- Create a `webpack.config.js` file at  the top level of your repo

> `webpack.config.js` is a special filename that webpack will pick up and use when running any command

```javascript
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
```

- add the needed dependencies to your project
  
```shell
yarn add react react-dom
```

- Make a basic React component in `src/js/components/BasicReactComponent.js`

```javascript
import React from 'react';

export default class BasicReactComponent extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.name}`);
  }
}
```

- Update `src/js/index.js` to use your new react component

```diff
+var BasicComponent = require("./components/BasicReactComponent");
+var React = require("react");
+var ReactDOM = require("react-dom");
+
 // Create Div with content
 var el = document.createElement('p');

 el.innerHTML = "This is a vanilla JS paragraph";

-document.body.appendChild(el);
\ No newline at end of file
+document.body.appendChild(el);
+
+ReactDOM.render(
+  React.createElement(BasicComponent, { toWhat: "World" }, null),
+  document.getElementById("root")
+);
```

- update index.html to contain the mounting div

```diff
 <body>
     <h1>Demo of webpack usage</h1>
+    <div id="root"></div>
     <script src="./dist/main.js"></script>
 </body>
```

- run the build command

> NOTE: You no longer need to specify the entry point in the command, since it is taken from webpack.config.js

```shell
yarn build
```

- verify the webpage displays. Note how much longer the JS bundle is now that we have ReactDOM as a dependency. Be careful about what you put into your bundle!

## Next Steps

So far we have only been bundling Javascript. In the next section, we will be looking at how we can use loaders to bundle files that aren't Javascript at all!