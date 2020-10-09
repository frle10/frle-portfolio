import GithubLogoWhite from './images/github-logo-white.svg';
import GithubLogoBlue from './images/github-logo-blue.svg';
import InstagramLogo from './images/instagram-logo.svg';
import StickmanDrawing from './images/stickman-drawing.svg';
import LeftArrowIcon from './images/left-arrow.svg';
import RightArrowIcon from './images/right-arrow.svg';
import HamburgerIcon from './images/hamburger.svg';
import CrossIcon from './images/cross.svg';
import { ReactComponent as GlobeIcon } from './images/globe.svg';
import PoisonImage from './images/poison-img.png';
import PhoneImage from './images/phone-img.png';
import Project1Image from './images/project1.png';
import Project2Image from './images/project2.png';
import Project3Image from './images/project3.png';
import ProjectsBackgroundImage from './images/projects-background.jpg';
import SpinnerGif from './images/spinner.gif';

export const breakpoints = [650, 1250, 2000];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
export const mqMin = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export {
  GithubLogoWhite,
  GithubLogoBlue,
  InstagramLogo,
  StickmanDrawing,
  LeftArrowIcon,
  RightArrowIcon,
  HamburgerIcon,
  CrossIcon,
  GlobeIcon,
  PoisonImage,
  PhoneImage,
  Project1Image,
  Project2Image,
  Project3Image,
  ProjectsBackgroundImage,
  SpinnerGif,
};
