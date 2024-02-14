import type { Meta, StoryObj } from '@storybook/react';
import screenshot from '../assets/screenshot1.jpg'
import screenshot2 from '../assets/screenshot2.jpg'
import screenshot3 from '../assets/screenshot3.jpg'


import EntrySwiper from './EntrySwiper';

const meta = {
  title: 'Example/EntrySwiper',
  component: EntrySwiper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof EntrySwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [ 
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
      {
        phrase_title: 'タイトルです',
        phrase_standard: 'タイトルです',
        phrase_explain: 'タイトルです',
        user_name: 'テストユーザ',
        phrase_accent: '大阪弁',
        like_count: 2,
        comments_count: 1
      },
    ]
  },
};
