import React from 'react';
import { css, cx } from 'emotion';
import { HashLink } from 'react-router-hash-link';
import { routerStore } from '../../router/routerStore';
import { GithubLogoBlue, InstagramLogo, breakpoints, mq } from '../../assets';
import { useWindowSize } from 'react-use';

const footerStyle = css({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#3F49FE',
  padding: '0% 10%',
  height: '80px',
  [mq[1]]: {
    padding: '0% 3%',
  },
});

const variableFooter = (width: number) =>
  css({
    display: width > breakpoints[1] ? 'block' : 'none',
  });

const footerButtonsStyle = css({
  position: 'relative',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '21px',
  color: '#3f49fe',
});

const listItemStyle = css({
  float: 'left',
  display: 'block',
  padding: '14px 16px',
  textAlign: 'center',
  '& a': {
    textDecoration: 'none',
    ':visited': {
      color: '#3f49fe',
    },
  },
  cursor: 'pointer',
});

const widthThird = (textAlign: any) =>
  css({
    width: '33.33%',
    textAlign: textAlign,
  });

const boldFont = css({
  fontWeight: 'bold',
});

const mobileFooterText = (width: number) =>
  css({
    display: width > breakpoints[1] ? 'none' : 'block',
    position: 'relative',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#3F49FE',
  });

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <div className={footerStyle}>
      <p className={mobileFooterText(width)}>@2020 copyright Dominik Vrbić</p>

      <ul
        className={cx(
          footerButtonsStyle,
          widthThird('left'),
          variableFooter(width)
        )}
      >
        <li
          className={listItemStyle}
          style={{ paddingLeft: 0 }}
          onClick={() => routerStore.toHome()}
        >
          home
        </li>
        <li className={listItemStyle} onClick={() => routerStore.toProjects(1)}>
          projects
        </li>
        <li className={listItemStyle} style={{ paddingRight: 0 }}>
          <HashLink smooth to='/#contact'>
            contact
          </HashLink>
        </li>
      </ul>
      <div
        className={cx(widthThird('center'), boldFont, variableFooter(width))}
      >
        designed by Hazelica
      </div>

      <div className={widthThird('right')}>
        <a
          href='https://www.instagram.com/dominikvrbic/?hl=en'
          target='_blank'
          rel='noopener noreferrer'
          style={{ marginRight: '40px' }}
        >
          <img src={InstagramLogo} alt='Instagram Logo' />
        </a>
        <a
          href='https://github.com/dominikvrbic'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GithubLogoBlue} alt='Github Logo' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
