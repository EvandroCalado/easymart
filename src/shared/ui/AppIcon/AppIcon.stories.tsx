import type { Meta, StoryObj } from '@storybook/react-vite';

import SearchIcon from '@/shared/assets/icons/Search.svg?react';

import { AppIcon } from './AppIcon';

const meta = {
  title: 'Shared/AppIcon',
  component: AppIcon,
  tags: ['autodocs'],
  args: {
    Icon: SearchIcon,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Background: Story = {
  args: {
    theme: 'background',
  },
};

export const Filled: Story = {
  args: {
    filled: true,
  },
};
