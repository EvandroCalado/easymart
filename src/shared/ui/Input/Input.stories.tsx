import type { Meta, StoryObj } from '@storybook/react-vite';

import SearchIcon from '@/shared/assets/icons/Search.svg?react';

import { AppIcon } from '../AppIcon/AppIcon';

import { Input } from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Enter text...',
  },
  argTypes: {
    rounded: {
      control: 'boolean',
    },
    Icon: {
      control: 'object',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'Some value',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    value: '123456',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithIcon: Story = {
  args: {
    Icon: <AppIcon Icon={SearchIcon} />,
  },
};
