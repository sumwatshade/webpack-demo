var BasicComponent = require("./components/BasicReactComponent").default;
var React = require("react");
var ReactDOM = require("react-dom");

// Create Div with content
var el = document.createElement('p');

el.innerHTML = "This is a vanilla JS paragraph";

document.body.appendChild(el);

ReactDOM.render(
  React.createElement(BasicComponent, { name: "World" }, null),
  document.getElementById("root")
);
