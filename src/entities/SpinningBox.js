import React, { Component } from 'react';

import { Entity } from 'aframe-react';

const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

export default class SpinninBox extends Component (
  constructor(props) {
    super(props);
    this.state = { color: 'blue' };
  }

  changeColor() {
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render() {
    return (
      <Entity
        id="box"
        geometry={{primitive: 'box'}}
        material={{color: this.state.color, opacity: 0.6}}
        animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
        animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
        position={{x: 0, y: 1, z: -3}}
        events={{click: this.changeColor.bind(this)}}
      >
        <Entity
          animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
          geometry={{primitive: 'box', depth: 0.2, height: 0.2, width: 0.2}}
          material={{color: '#24CAFF'}}
        />
      </Entity>
    );
  }
}
