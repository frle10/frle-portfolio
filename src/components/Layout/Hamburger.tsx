import React, { MouseEvent } from 'react';
import { routerStore } from '../../router/routerStore';
import { HashLink } from 'react-router-hash-link';
import { css } from 'emotion';
import { CrossIcon } from '../../assets';

const hamStyle = css({
  position: 'absolute',
  display: 'none',
  top: '-100px',
  right: '-100px',
  width: '0px',
  height: '300px',
  backgroundColor: '#3F49FE',
  borderRadius: '50% 50% 50% 50%',
  transition: 'width 0.5s ease-in',
});

const listStyle = css({
  float: 'left',
  listStyleType: 'none',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#FFFFFF',
  padding: '40% 25%',
});

const listItemStyle = css({
  textAlign: 'left',
  padding: '8px 0px',
  '& a': {
    color: '#FFFFFF',
    textDecoration: 'none',
    ':visited': {
      color: '#FFFFFF',
    },
  },
  cursor: 'pointer',
});

const crossStyle = css({
  position: 'absolute',
  top: '40%',
  right: '40%',
  cursor: 'pointer',
});

const Hamburger = () => {
  const hideHamburger = (e?: MouseEvent) => {
    const mobileNavListContainer = document.getElementById(
      'mobileNavListContainer'
    ) as HTMLDivElement;

    mobileNavListContainer.style.width = '0px';
    setTimeout(() => (mobileNavListContainer.style.display = 'none'), 1000);
  };

  return (
    <div id='mobileNavListContainer' className={hamStyle}>
      <img
        src={CrossIcon}
        alt='Cross'
        className={crossStyle}
        onClick={hideHamburger}
      />

      <ul className={listStyle}>
        <li
          className={listItemStyle}
          onClick={(e) => {
            routerStore.toHome();
            hideHamburger(e);
          }}
        >
          Home
        </li>
        <li
          className={listItemStyle}
          onClick={(e) => {
            routerStore.toProjects(1);
            hideHamburger(e);
          }}
        >
          Projects
        </li>
        <li className={listItemStyle} onClick={(e) => hideHamburger(e)}>
          <HashLink smooth to='/#contact'>
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
