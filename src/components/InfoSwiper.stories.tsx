import type { Meta, StoryObj } from '@storybook/react';
import screenshot from '../assets/screenshot1.jpg'
import screenshot2 from '../assets/screenshot2.jpg'
import screenshot3 from '../assets/screenshot3.jpg'


import InfoSwiper from './InfoSwiper';

const meta = {
  title: 'Example/InfoSwiper',
  component: InfoSwiper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InfoSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [ 
      {
        id: 1, 
        title: '投稿されたフレーズを\nホーム画面で閲覧！',
        subTitle: 'パロットでできること',
        description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
        image: screenshot,
      },
      {
        id: 2,
        title: 'これはテストです',
        subTitle: 'これはテスト',
        description: 'これはテスト！いいですね！',
        image: screenshot2,
      },
      {
        id: 3,
        title: '投稿されたフレーズを\nホーム画面で閲覧！',
        subTitle: 'パロットでできること',
        description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
        image: screenshot3,
      }
    ]
  },
};
