import { BrowserRouter } from 'react-router';

import type { Decorator } from '@storybook/react-vite';

export const RouterDecorator: Decorator = (Story, context) => {
  return (
    <BrowserRouter>
      <Story {...context} />
    </BrowserRouter>
  );
};
