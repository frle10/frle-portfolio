import React from 'react';
import { css, cx } from 'emotion';
import { HashLink } from 'react-router-hash-link';
import Button from '../Button';
import { mq } from '../../assets';

interface Props {
  sectionNumber: string;
  bgColor: string;
  hasButton: string;
  paddingTop: string;
  paddingBottom: string;
  numTop: string;
  children: any;
}

const sectionStyle = (
  bgColor: string,
  paddingTop: string,
  paddingBottom: string
) =>
  css({
    position: 'relative',
    padding: '10% 10% 5%',
    backgroundColor: bgColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    minHeight: '650px',
    [mq[1]]: {
      padding: '5% 5% 5%',
    },
  });

const buttonStyle = (hasButton: string) =>
  css({
    position: 'absolute',
    display: hasButton === 'yes' ? 'block' : 'none',
    bottom: '0%',
    right: '0%',
  });

const numberStyle = (top: string) =>
  css({
    position: 'absolute',
    top: top,
    left: '-8%',
    fontFamily: 'Bebas Neue',
    fontSize: '640px',
    letterSpacing: '0.02em',
    color: 'rgba(221, 227, 244, 0.3)',
    maxHeight: '640px',
    [mq[1]]: {
      color: 'rgba(221, 227, 244, 0.12)',
      fontSize: '390px',
      left: '-20%',
    },
  });

const unselectable = css({
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
});

const Section = (props: Props) => {
  return (
    <div
      className={sectionStyle(
        props.bgColor,
        props.paddingTop,
        props.paddingBottom
      )}
    >
      <div className={cx(numberStyle(props.numTop), unselectable)}>
        {props.sectionNumber}
      </div>
      {props.children}
      <div className={buttonStyle(props.hasButton)}>
        <HashLink smooth to='/#contact'>
          <Button text='Hire me' />
        </HashLink>
      </div>
    </div>
  );
};

export default Section;
