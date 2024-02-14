import type { Meta, StoryObj } from '@storybook/react';

import EntryCard from './EntryCard';

const meta = {
  title: 'Example/EntryCard',
  component: EntryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '345px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof EntryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    item: {
      phrase_title: 'タイトルです',
      phrase_standard: 'タイトルです',
      phrase_explain: 'タイトルです',
      user_name: 'テストユーザ',
      phrase_accent: '大阪弁',
      like_count: 2,
      comments_count: 1
    }
  },
};

export const Example: Story = {
  args: {
    item: {
      phrase_title: 'そんなんしたら、めんでまう。',
      phrase_standard: 'そんなことしたら、壊してしまう。',
      phrase_explain: '壊した時は「めげた」と活用します。',
      user_name: 'テストユーザテストユーザテストユーザ',
      phrase_accent: '大阪弁大阪弁大阪弁',
      like_count: 2,
      comments_count: 1
    }
  },
};