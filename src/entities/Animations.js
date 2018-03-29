/* global AFRAME */
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

export default class AnimationsEntity extends Component {

  componentDidMount() {
    this.startOpacityAnimation();
    this.startColorAnimation();
    this.startSizeAnimation();
  }

  startOpacityAnimation() {
    const { opacityElement } = this;

    const tweenValues = { opacity: 0 };
    // TODO - clear tween on destroy
    const tween = new AFRAME.TWEEN.Tween(tweenValues)
      .to({ opacity: 1 }, 500)
      .repeat(Infinity)
      .yoyo(true)
      .onUpdate(() => {
        opacityElement.setAttribute('text', 'opacity', tweenValues.opacity);
      })
      .start();
  }

  startColorAnimation() {
    const { colorElement } = this;

    // TODO - clear interval on destroy
    this.colorInterval = setInterval(() => {
      const randomHexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colorElement.setAttribute('text', 'color', randomHexColor);
    }, 1000);
  }

  startSizeAnimation() {
    const { sizeElement } = this;

    const sizeValues = { scale: 60 };
    // TODO - clear tween on destroy
    const tween = new AFRAME.TWEEN.Tween(sizeValues)
      .to({ scale: 20 }, 1000)
      .repeat(Infinity)
      .yoyo(true)
      .onUpdate(() => {
        sizeElement.setAttribute('text', 'wrapCount', sizeValues.scale);
      })
      .start();
  }

  render() {
    return (
      <Entity>
        <Entity
          id="opacity"
          position="-2.5 0.7 0"
          text={{
            color: 'white',
            align: 'center',
            value: 'Animating opacity',
            width: 1.5,
          }}
          _ref={(el) => { this.opacityElement = el }}
        />
        <Entity
          mixin="marker"
          position="0 0.7 0.01"
        />
        <Entity
          id="color"
          position="0 0.7 0"
          text="color: white; align: center; value: Animating color; width: 1.5"
          _ref={(el) => { this.colorElement = el }}
        />
        <Entity
          mixin="marker"
          position="2.5 0.7 0.01"
        />
        <Entity
          id="size"
          position="2.5 0.7 0"
          text="color: white; align: center; value: Animating size; width: 1.5"
          _ref={(el) => { this.sizeElement = el }}
        />
      </Entity>
    );
  }
}
