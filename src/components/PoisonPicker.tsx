import React from 'react';
import { css } from 'emotion';
import { PoisonImage, mq } from '../assets';

const contentStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '70px',
  paddingBottom: '100px',
});

const linkStyle = css({
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '30px',
  color: '#FFFFFF',
  [mq[1]]: {
    fontSize: '14px',
    lineHeight: '21px',
  },
});

const container = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  minHeight: '650px',
  [mq[1]]: {
    justifyContent: 'center',
    minHeight: '500px',
  },
});

const listStyle = css({
  position: 'absolute',
  bottom: '50px',
  display: 'flex',
  flexDirection: 'row',
  whiteSpace: 'nowrap',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  [mq[1]]: {
    maxWidth: '100%',
    width: '300px',
    overflowX: 'scroll',
  },
});

const listItemStyle = css({
  float: 'left',
  display: 'block',
  paddingRight: '10vw',
  textAlign: 'center',
});

const textContainer = css({
  maxWidth: '400px',
  [mq[0]]: {
    maxWidth: '300px',
  },
});

const divLine = css({
  backgroundColor: '#FFFFFF',
  height: '10px',
  width: '100px',
  margin: '30px 0px',
  [mq[0]]: {
    height: '6px',
    width: '78px',
  },
});

const aboveLine = css({
  color: '#FFFFFF',
  fontFamily: 'League Spartan',
  fontWeight: 'bold',
  fontSize: '4.7em',
  lineHeight: '1.3em',
  letterSpacing: '0.02em',
  [mq[0]]: {
    fontSize: '44px',
  },
});

const imgContainer = css({
  marginRight: '8%',
});

const imgStyle = css({
  height: '600px',
  [mq[0]]: {
    position: 'absolute',
    left: '50px',
    bottom: '-150px',
    height: '340px',
  },
});

const PoisonPicker = () => {
  return (
    <div className={container}>
      <div className={contentStyle}>
        <div className={textContainer}>
          <span className={aboveLine}>Pick your poison</span>
          <div className={divLine}></div>
        </div>
        <div className={imgContainer}>
          <img src={PoisonImage} alt='A simple drawing' className={imgStyle} />
        </div>
      </div>
      <ul className={listStyle}>
        <li className={listItemStyle}>
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkStyle}
          >
            React
          </a>
        </li>
        <li className={listItemStyle}>
          <a
            href='https://vuejs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkStyle}
          >
            Vue js
          </a>
        </li>
        <li className={listItemStyle}>
          <a
            href='https://nodejs.org/en/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkStyle}
          >
            Node js
          </a>
        </li>
        <li className={listItemStyle}>
          <a
            href='https://nestjs.com/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkStyle}
          >
            Nest js
          </a>
        </li>
        <li className={listItemStyle}>
          <a
            href='https://www.postgresql.org/'
            target='_blank'
            rel='noopener noreferrer'
            className={linkStyle}
          >
            Postgresql
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PoisonPicker;
