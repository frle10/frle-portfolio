import React from 'react';
import { css } from 'emotion';
import ProjectCard from './ProjectCard';
import { Project1Image, Project2Image, Project3Image, mq } from '../../assets';

const projectListStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '1% 10%',
  [mq[1]]: {
    flexDirection: 'column',
    padding: '1% 2%',
  },
});

const ProjectList = () => {
  return (
    <div className={projectListStyle}>
      <ProjectCard imageSrc={Project1Image} id={1} />
      <ProjectCard imageSrc={Project2Image} id={2} />
      <ProjectCard imageSrc={Project3Image} id={3} />
    </div>
  );
};

export default ProjectList;
