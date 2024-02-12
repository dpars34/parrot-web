import type { Meta, StoryObj } from '@storybook/react';

import MenuModal from './MenuModal'

const meta = {
  title: 'Example/MenuModal',
  component: MenuModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof MenuModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onItemClick: () => {},
    onClickClose: () => {}, 
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
    menuOpen: false
  },
};