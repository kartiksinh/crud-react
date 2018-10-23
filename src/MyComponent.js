import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const {title, name, onClick} = this.props;
    return (
      <div className="component">
        <h1>Title: {title}</h1>
        <h1>Name: {name}</h1>
        <div onClick={onClick}>Click me !!</div>
      </div>
    );
  }
}

export default MyComponent;
