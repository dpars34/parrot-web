import type { Meta, StoryObj } from '@storybook/react';

import EntryCard from './EntryCard';

const meta = {
  title: 'Example/EntryCard',
  component: EntryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof EntryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    phraseTitle: 'タイトルです',
    phraseStandard: 'タイトルです',
    phraseExplain: 'タイトルです',
    userName: 'テストユーザ',
    phraseAccent: '大阪弁',
    likeCount: 2,
    commentsCount: 1
  },
};

export const Example: Story = {
  args: {
    phraseTitle: 'そんなんしたら、めんでまう。',
    phraseStandard: 'そんなことしたら、壊してしまう。',
    phraseExplain: '壊した時は「めげた」と活用します。',
    userName: 'テストユーザテストユーザテストユーザ',
    phraseAccent: '大阪弁大阪弁大阪弁',
    likeCount: 2,
    commentsCount: 1
  },
};