import type { Meta, StoryObj } from '@storybook/react';

import MenuModal from './MenuModal';

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