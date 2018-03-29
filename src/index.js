import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';

import React from 'react';
import ReactDOM from 'react-dom';

import Shapes from './entities/Shapes';
import Anchors from './entities/Anchors';
import Animations from './entities/Animations';
import Fireplace from './entities/Fireplace';

import LawyerCard from './entities/LawyerCard';

import lawyerList from './data/lawyers';

const { PUBLIC_URL } = process.env;

class App extends React.Component {

  render () {
    const currentLawyer = lawyerList[0];

    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>

          <a-mixin
            id="marker"
            geometry="primitive: plane; width: 0.02; height: 0.02"
            material="color: red"
          />

          <a-asset-item
            id="fireplace-obj"
            src={PUBLIC_URL + '/models/fireplace/am.obj'}
          />
          <a-asset-item
            id="fireplace-mtl"
            src={PUBLIC_URL + '/models/fireplace/am.mtl'}
          />
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        {/*<Entity primitive="a-light" type="ambient" color="#445451"/>*/}
        {/*<Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>*/}
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        {/*<Entity particle-system={{preset: 'snow', particleCount: 2000}}/>*/}
        {/*<Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>*/}

        {/*
        <Shapes />
        <Anchors />
        <Animations />
        <Fireplace />
        */}

       <a-image
        src={PUBLIC_URL + '/images/bear/bear1.png'}
        position="-3 0.5 -3"
        rotation="0 0 0"
        width="1"
        height="1"
       />

        {lawyerList.map((lawyer, index) => (
          <LawyerCard
            key={index}
            position={`${index * 5} 2.5 -3`}
            lawyer={lawyer}
          />
        ))}

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }}
          />
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
