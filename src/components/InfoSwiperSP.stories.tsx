import type { Meta, StoryObj } from '@storybook/react';
import screenshot from '../assets/screenshot1.jpg'
import screenshot2 from '../assets/screenshot2.jpg'
import screenshot3 from '../assets/screenshot3.jpg'


import InfoSwiperSP from './InfoSwiperSP';

const meta = {
  title: 'Example/InfoSwiperSP',
  component: InfoSwiperSP,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '345px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof InfoSwiperSP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [ 
      {
        title: '投稿されたフレーズを\nホーム画面で閲覧！',
        subTitle: 'パロットでできること',
        description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
        image: screenshot,
      },
      {
        title: 'これはテストです',
        subTitle: 'これはテスト',
        description: 'これはテスト！いいですね！',
        image: screenshot2,
      },
      {
        title: '投稿されたフレーズを\nホーム画面で閲覧！',
        subTitle: 'パロットでできること',
        description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
        image: screenshot3,
      }
    ]
  },
};
