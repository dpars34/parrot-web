import type { Meta, StoryObj } from '@storybook/react';

import NavBar from './NavBar';

const meta = {
  title: 'Example/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // args: {
  //   phraseTitle: 'タイトルです',
  //   phraseStandard: 'タイトルです',
  //   phraseExplain: 'タイトルです',
  //   userName: 'テストユーザ',
  //   phraseAccent: '大阪弁',
  //   likeCount: 2,
  //   commentsCount: 1
  // },
};