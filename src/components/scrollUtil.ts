import { MouseEvent } from 'react';
import { routerStore } from '../router/routerStore';

export const anchorScroll = (_e: MouseEvent) => {
  routerStore.toHome();
  setTimeout(() =>
    document
      .querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  );
};
