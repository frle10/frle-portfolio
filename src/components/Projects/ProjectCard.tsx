import React from 'react';
import { css } from 'emotion';
import { routerStore } from '../../router/routerStore';
import { mq, mqMin } from '../../assets';

interface Props {
  imageSrc: string;
  id: number;
}

const cardStyle = css({
  position: 'relative',
  '& img': {
    display: 'block',
    height: '180px',
    [mqMin[0]]: {
      height: '200px',
    },
    [mqMin[1]]: {
      height: '230px',
    },
    [mqMin[2]]: {
      height: '350px',
    },
  },
  ':hover img': {
    opacity: 0.6,
  },
  ':hover div': {
    display: 'flex',
  },
  [mq[1]]: {
    padding: '20px 0px',
  },
});

const checkOutBtn = css({
  position: 'absolute',
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px 0px',
  right: '0%',
  bottom: '0%',
  width: '50%',
  height: '20%',
  fontSize: '12px',
  color: '#FFFFFF',
  backgroundColor: '#FA2841',
  cursor: 'pointer',
  [mqMin[0]]: {
    fontSize: '14px',
  },
  [mqMin[1]]: {
    fontSize: '16px',
  },
  [mqMin[2]]: {
    fontSize: '24px',
  },
  [mq[1]]: {
    bottom: '20px',
  },
});

const ProjectCard = (props: Props) => {
  return (
    <div className={cardStyle}>
      <img src={props.imageSrc} alt='Project' />
      <div
        className={checkOutBtn}
        onClick={() => routerStore.toProjects(props.id)}
      >
        Check out
      </div>
    </div>
  );
};

export default ProjectCard;
