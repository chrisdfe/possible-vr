import React from 'react';
import { Entity } from 'aframe-react';

export default () => {
  console.log('rendering');
  return (
    <Entity>
      <a-box id="box" position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    </Entity>
  );
}
