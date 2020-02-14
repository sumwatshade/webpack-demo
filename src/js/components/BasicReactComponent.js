import React from 'react';

export default class BasicReactComponent extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.name}`);
  }
}