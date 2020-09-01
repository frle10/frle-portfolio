import React, { MouseEvent } from 'react';
import { css, cx } from 'emotion';
import { HashLink } from 'react-router-hash-link';
import { routerStore } from '../../router/routerStore';
import { VrbaLogo, breakpoints, mq, HamburgerIcon } from '../../assets';
import { useWindowSize } from 'react-use';

const navbarStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(249, 249, 250, 0.5)',
  height: '100px',
  padding: '0% 10%',
  flexShrink: 0,
  [mq[1]]: {
    padding: '0% 3%',
  },
});

const variableDisplay = (width: number) =>
  css({
    display: width > breakpoints[1] ? 'block' : 'none',
  });

const variableDisplayInverse = (width: number) =>
  css({
    display: width > breakpoints[1] ? 'none' : 'block',
  });

const navButtonsStyle = css({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  fontWeight: 600,
  fontSize: '14px',
  color: '#3f49fe',
});

const listItemStyle = css({
  float: 'left',
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

const hamImg = css({
  ':hover': {
    cursor: 'pointer',
  },
});

const logoStyle = css({
  cursor: 'pointer',
});

const Navbar = () => {
  const { width } = useWindowSize();

  const onClick = (e: MouseEvent) => {
    const list = document.getElementById(
      'mobileNavListContainer'
    ) as HTMLUListElement;

    list.style.display = 'block';
    setTimeout(() => (list.style.width = '300px'), 10);
  };

  return (
    <nav className={navbarStyle}>
      <img
        src={VrbaLogo}
        alt='Vrba Logo'
        className={logoStyle}
        onClick={routerStore.toHome}
      />
      <ul className={cx(navButtonsStyle, variableDisplay(width))}>
        <li className={listItemStyle} onClick={() => routerStore.toHome()}>
          Home
        </li>
        <li className={listItemStyle} onClick={() => routerStore.toProjects(1)}>
          Projects
        </li>
        <li className={listItemStyle}>
          <HashLink smooth to='/#contact'>
            Contact
          </HashLink>
        </li>
      </ul>

      <img
        src={HamburgerIcon}
        alt='Hamburger Menu'
        id='hamImg'
        className={cx(hamImg, variableDisplayInverse(width))}
        onClick={onClick}
      />
    </nav>
  );
};

export default Navbar;