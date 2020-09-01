import React from 'react';
import { css } from 'emotion';
import { mq } from '../assets';

const flexContainer = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const mailHeaderStyle = css({
  color: '#FA2841',
  fontWeight: 'bold',
  fontSize: '140px',
  textAlign: 'right',
  paddingBottom: '5%',
  height: '500px',
  maxWidth: '1000px',
  float: 'right',
  wordWrap: 'break-word',
  [mq[1]]: {
    fontSize: '40px',
  },
});

const noteStyle = css({
  float: 'left',
  maxWidth: '400px',
});

const aboveLine = css({
  color: '#3F49FE',
  fontSize: '22px',
  lineHeight: '22px',
  letterSpacing: '0.02em',
  [mq[1]]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
});

const lineStyle = css({
  backgroundColor: '#FA2841',
  height: '1em',
  width: '100px',
  margin: '30px 0px',
});

const contactHeaderContainer = css({
  position: 'relative',
  zIndex: 1,
});

const email = 'dominikvrbic01@ gmail.com';

const ContactHeader = () => {
  return (
    <div className={contactHeaderContainer}>
      <div className={flexContainer}>
        <div className={mailHeaderStyle}>{email}</div>
      </div>
      <div className={noteStyle}>
        <div className={aboveLine}>
          In case you didn't get that contact info, contact me below
        </div>
        <div className={lineStyle}></div>
      </div>
    </div>
  );
};

export default ContactHeader;
