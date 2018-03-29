/* global AFRAME */
import React, { Component } from 'react';
import { Entity } from 'aframe-react';

import ReviewStars from './ReviewStars';

const { PUBLIC_URL } = process.env;

const lawyerImgPath = filename => `${PUBLIC_URL}/images/lawyers/${filename}`;

const boxDefaultColor = '#333';
const boxHighlightColor = '#555';

class LawyerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTurning: false,
      isFacingForward: true,
    };
  }

  startTurnAnimation() {
    const tweenProperties = { rotation: this.state.isFacingForward ? 0 : 180 };
    const targetValues = { rotation: this.state.isFacingForward ? 180 : 360 };

    this.setState({ isTurning: true });

    const setRotation = () => {
      this.el.setAttribute('rotation', `0 ${tweenProperties.rotation} 0`)
    };

    new AFRAME.TWEEN.Tween(tweenProperties)
      .to(targetValues, 2000)
      .easing(AFRAME.TWEEN.Easing.Back.InOut)
      .onUpdate(() => {
        setRotation();
      })
      .onComplete(() => {
        this.setState({
          isTurning: false,
          isFacingForward: !this.state.isFacingForward,
        });
        setRotation();
      })
      .start();
  }

  handleBoxClick() {
    if (!this.state.isTurning) {
      this.startTurnAnimation();
    }
  }

  handleBoxMouseEnter() {
    this.boxElement.setAttribute('material', 'color', boxHighlightColor);
  }

  handleBoxMouseLeave() {
    this.boxElement.setAttribute('material', 'color', boxDefaultColor);
  }

  render() {
    const {
      position,
      rotation,
      lawyer,
    } = this.props;

    const practiceAreaText = Object.keys(lawyer.practice_areas).join(', ');

    return (
      <Entity
        position={position}
        rotation={rotation}
        events={{
          click: this.handleBoxClick.bind(this),
          mouseenter: this.handleBoxMouseEnter.bind(this),
          mouseleave: this.handleBoxMouseLeave.bind(this),
        }}
        _ref={(el) => this.el = el}
      >
        <Entity
          geometry={{
            primitive: 'box',
            height: 5,
            width: 3,
            depth: 0.1,
          }}
          material={{ color: '#333' }}
          position="0 0 -0.1"
          _ref={(el) => { this.boxElement = el }}
        />

        <Entity
          class="lawyer-card--frontside"
        >
          <a-image
            className="lawyer-card--headshot"
            src={lawyerImgPath(lawyer.headshot)}
            height="1.33035714286"
            width="1"
            rotation="0 0 0"
            position="0 0 0"
          />

          <a-text
            className="lawyer-card--name"
            anchor="left"
            align="left"
            value={`${lawyer.first_name} ${lawyer.last_name}`}
            color="white"
            position="-1 -0.8 0"
          />

          <ReviewStars
            className="lawyer-card--review-stars"
            position="-0.95 -1 0"
            avgRating={lawyer.avg_rating}
            reviewCount={lawyer.review_amount}
          />

          <a-text
            className="lawyer-card--practice-areas"
            anchor="left"
            align="left"
            value={practiceAreaText}
            color="white"
            width="1.5"
            position="-1 -1.2 0"
          />
        </Entity>

        <Entity
          className="lawyer-card--backside"
          position="0 0 -0.2"
          rotation="0 180 0"
        >
          <a-text
            className="lawyer-card--bio"
            align="left"
            anchor="center"
            value={lawyer.bio}
            color="white"
            width="1.8"
          />
        </Entity>
      </Entity>
    );
  }
}

LawyerCard.defaultProps = {
  position: '0 0 0',
  rotation: '0 0 0',
};

export default LawyerCard;
