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
        description: [
          '🎉「パロットアプリ」で、日本の魅力的な方言の世界に飛び込もう！',
          '🗨️ 地域ごとに独自の言葉や表現が溢れる、日本の方言の奥深さを体験しよう！',
          '🔍 ホーム画面で新しいフレーズを発見！ユーザーが投稿した面白くてユニークな方言を日々楽しもう！',
          '🎙️ 自分のお気に入りのフレーズを録音してシェア！リアルな発音で方言を伝えよう！',
          '👍 他のユーザーの投稿にいいねや評価をして、方言の人気ランキングをチェック！みんなが愛する方言を応援しよう！',
        ],
        image: screenshot,
      },
      {
        id: 2,
        title: '自分の声を投稿！',
        subTitle: '録音機能で自分の声をアップ',
        description: [
          '🎤「パロットアプリ」で自分の声を主役に！',
          '🎧 お気に入りの方言フレーズを自分の声で録音して、アプリ内でシェアできる！',
          '📲 独自の発音や感じる方言の魅力を、みんなと共有しよう！',
          '✨ アップロードは簡単！一瞬で自分の声がアプリ上に響き渡る！',
          '👂 他のユーザーからのフィードバックを楽しみながら、方言のプロセッシングを楽しもう！',
        ],
        image: screenshot2,
      },
      {
        id: 3,
        title: 'アップストア・GooglePlayからダウンロード！',
        subTitle: '簡単にダウンロード',
        description: [
          '📲「パロットアプリ」、App StoreとGoogle Playで待ってるよ！',
          '🍏 iPhoneユーザーも、Androidユーザーも、すぐに方言の楽しさを体感できる！',
          '⏰ 今すぐダウンロードして、方言の世界への冒険を始めよう！',
        ],
        image: screenshot3,
      }
    ]
  },
};
