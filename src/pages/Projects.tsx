import React, { MouseEvent } from 'react';
import moment from 'moment';
import { css, cx } from 'emotion';
import { useParams } from 'react-router';
import { routerStore } from '../router/routerStore';
import {
  GithubLogoWhite,
  LeftArrowIcon,
  RightArrowIcon,
  GlobeIcon,
  ProjectsBackgroundImage,
  mq,
} from '../assets';

interface Props {
  repos: any;
}

interface ParamTypes {
  id: string | undefined;
}

const projectsOuterDivStyle = css({
  width: '100%',
  height: '100%',
  backgroundImage: `url(${ProjectsBackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

const projectsInnerDivStyle = css({
  width: '100%',
  height: '100%',
  color: '#FFFFFF',
  fontWeight: 600,
  letterSpacing: '0.02em',
  opacity: 1,
  transition: 'opacity 0.5s ease-in-out',
});

const divLine = css({
  backgroundColor: '#FFFFFF',
  height: '0.5em',
  width: '100px',
  margin: '40px 0px',
  [mq[0]]: {
    width: '78px',
    height: '6px',
  },
});

const mainContent = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5% 10%',
  paddingTop: '10%',
  [mq[0]]: {
    padding: '5% 3%',
  },
});

const projectInfo = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const projectFooter = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '24px',
  padding: '3% 10%',
  paddingTop: '5%',
  '& a': {
    display: 'inline',
  },
  [mq[0]]: {
    fontSize: '12px',
    padding: '3% 3%',
  },
});

const widthThird = (textAlign: any) =>
  css({
    display: 'block',
    width: '33.33%',
    textAlign: textAlign,
  });

const logoStyle = css({
  display: 'block',
  margin: '0 auto',
});

const repoDesc = css({
  fontSize: '44px',
  marginTop: '50px',
  padding: '0px 40px',
  [mq[0]]: {
    fontSize: '18px',
  },
});

const repoName = css({
  fontSize: '88px',
  [mq[0]]: {
    fontSize: '44px',
  },
});

const arrowStyle = css({
  cursor: 'pointer',
});

const linkContainer = css({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const Projects = (props: Props) => {
  const { id } = useParams<ParamTypes>();
  const repoIndex = parseInt(id ? id : '') - 1;
  const repo = props.repos[repoIndex];
  const dateCreated = moment(repo.created_at).format('MMMM, YYYY');

  const switchProject = (index: number) => {
    const innerDiv = document.getElementById('innerDiv') as HTMLDivElement;
    innerDiv.style.opacity = '0';

    setTimeout(() => routerStore.toProjects(index + 1), 500);
    setTimeout(() => (innerDiv.style.opacity = '1'), 500);
  };

  const previousProject = (_e: MouseEvent) => {
    switchProject(repoIndex === 0 ? 2 : repoIndex - 1);
  };

  const nextProject = (_e: MouseEvent) => {
    switchProject(repoIndex === 2 ? 0 : repoIndex + 1);
  };

  return (
    <div className={projectsOuterDivStyle}>
      <div id='innerDiv' className={projectsInnerDivStyle}>
        <div className={mainContent}>
          <img
            src={LeftArrowIcon}
            alt='Previous Project Arrow'
            width='55'
            className={arrowStyle}
            onClick={previousProject}
          />
          <div className={projectInfo}>
            <div className={repoName}>{repo.name}</div>
            <div className={divLine}></div>
            <div className={repoDesc}>
              {repo.description
                ? repo.description
                : 'No description for now. :('}
            </div>
          </div>
          <img
            src={RightArrowIcon}
            alt='Previous Project Arrow'
            width='55'
            className={arrowStyle}
            onClick={nextProject}
          />
        </div>
        <div className={projectFooter}>
          <div className={widthThird('left')}>{repo.language}</div>
          <div className={cx(widthThird('center'), linkContainer)}>
            {repo.homepage ? (
              <a href={repo.homepage} target='_blank' rel='noopener noreferrer'>
                <GlobeIcon />
              </a>
            ) : (
              ''
            )}
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              <img
                src={GithubLogoWhite}
                alt='Github Logo'
                className={logoStyle}
              />
            </a>
          </div>
          <div className={widthThird('right')}>{dateCreated}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
