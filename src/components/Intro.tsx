import React from 'react';
import { css } from 'emotion';
import { StickmanDrawing, mq } from '../assets';

const introStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  [mq[1]]: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    minHeight: '500px',
  },
});

const divLine = css({
  backgroundColor: '#FA2841',
  height: '8px',
  width: '100px',
  margin: '30px 0px',
  [mq[1]]: {
    height: '6px',
    width: '78px',
  },
});

const aboveLine = css({
  color: '#FA2841',
  fontFamily: 'League Spartan',
  fontWeight: 'bold',
  fontSize: '66px',
  lineHeight: '1.3em',
  letterSpacing: '0.02em',
  [mq[1]]: {
    fontSize: '43px',
  },
});

const belowLine = css({
  color: '#3F49FE',
  fontSize: '22px',
  lineHeight: '22px',
  letterSpacing: '0.02em',
  [mq[1]]: {
    fontSize: '16px',
  },
});

const imgStyle = css({
  height: '400px',
  [mq[1]]: {
    height: '200px',
    paddingBottom: '50px',
  },
});

const imgContainer = css({
  marginLeft: '50px',
  [mq[1]]: {
    marginLeft: 0,
  },
});

const Intro = () => {
  return (
    <div className={introStyle}>
      <div>
        <span className={aboveLine}>I've always preferred coding</span>
        <div className={divLine}></div>
        <span className={belowLine}>
          I'm Dominik Vrbic, not the greatest artist, but a great programmer
        </span>
      </div>
      <div className={imgContainer}>
        <img
          src={StickmanDrawing}
          alt='A simple drawing'
          className={imgStyle}
        />
      </div>
    </div>
  );
};

export default Intro;
