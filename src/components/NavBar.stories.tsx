import type { Meta, StoryObj } from '@storybook/react';

import NavBar from './NavBar';

const meta = {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    menuItems: [{
      title: 'パロットでできること',
      value: 'info'
    },
    {
      title: '投稿された方言',
      value: 'accents'
    },
    {
      title: 'ダウンロード',
      value: 'download'
    },
  ],
  },
};