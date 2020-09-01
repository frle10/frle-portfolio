import React from 'react';
import { css } from 'emotion';
import { mq } from '../assets';

interface Props {
  text: string;
}

const buttonStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  padding: '0px 0px',
  width: '230px',
  height: '77px',
  cursor: 'pointer',
  backgroundColor: '#3F49FE',
  color: '#FFFFFF',
  '&:hover': {
    color: '#3F49FE',
    backgroundColor: '#FFFFFF',
  },
  [mq[1]]: {
    width: '132px',
    height: '44px',
    fontSize: '14px',
  },
});

const Button = (props: Props) => {
  return <div className={buttonStyle}>{props.text}</div>;
};

export default Button;
