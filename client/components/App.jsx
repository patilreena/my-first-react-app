import React from 'react';
import ListItems from './List.js';
export default class Client extends React.Component {
  render() {
    const name = 'sara';
    const add = 3 + 2;
    return (
      <div>
        <h1> My name is {name} </h1>
        <h2> sum is {add} </h2>
        <ListItems />
      </div>
    );
  }
}
