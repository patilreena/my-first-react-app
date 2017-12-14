import React from 'react';
import ListItems from './List.js';
export default class Client extends React.Component {
  constructor() {
    super();
    this.name = 'Sara';
  }

  render() {
    return (
      <div>
        <h1> My name is {this.name} </h1>
        <ListItems />
      </div>
    );
  }
}
