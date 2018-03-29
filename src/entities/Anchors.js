import React from 'react';
import { Entity } from 'aframe-react';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam';

export default () => (
  <Entity>
    <Entity
      mixin="marker"
      position="-2.5 1 0.01"
    />
    <Entity
      position="-2.5 1 0"
      text={{'anchor': 'left', width: 1.5, color: 'white', value: `[LEFT ANCHOR] ${lorem}`}}
    />
    <Entity
      mixin="marker"
      position="0 1 0.01"
    />
    <Entity
      position="0 1 0"
      text={{'anchor': 'center', width: 1.5, color: 'white', value: `[CENTER ANCHOR] ${lorem}`}}
    />
    <Entity
      mixin="marker"
      position="2.5 1 0.01"
    />
    <Entity
      position="2.5 1 0"
      text={{'anchor': 'right', width: 1.5, color: 'white', value: `[RIGHT ANCHOR] ${lorem}`}}
    />
  </Entity>
)
