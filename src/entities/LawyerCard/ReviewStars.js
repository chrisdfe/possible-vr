import range from 'lodash/range';
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

const { PUBLIC_URL } = process.env;

const starWidth = 0.1;

export default ({ position, avgRating, reviewCount }) => (
 <Entity
    className="ratingStars"
    position={position}
  >
    <a-text
      color="white"
      value={`${reviewCount} reviews`}
      position={`${avgRating * starWidth} 0 0`}
      width="1.8"
    />
    <Entity
      position="0"
    >
      {range(avgRating).map(index => (
        <a-image
          key={index}
          src={PUBLIC_URL + 'images/star.png'}
          height={starWidth}
          width={starWidth}
          rotation="0 0 0"
          position={`${starWidth * index} 0 0`}
        />
      ))}
    </Entity>
  </Entity>
)
