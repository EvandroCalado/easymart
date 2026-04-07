import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    form: {
      control: 'select',
      options: ['rounded', 'pill', 'circle'],
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    theme: 'tertiary',
  },
};

export const Outline: Story = {
  args: {
    theme: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    theme: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Rounded: Story = {
  args: {
    form: 'rounded',
  },
};

export const Pill: Story = {
  args: {
    form: 'pill',
  },
};

export const Circle: Story = {
  args: {
    form: 'circle',
  },
};
