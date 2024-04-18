import { getDocs, query, orderBy, limit, collection } from "firebase/firestore"; 
import { db } from './firebase.js'
import { use } from "react";
import Image from 'next/image'
import type { Metadata } from 'next'

import EntryCard from "@/components/EntryCard"
import EntrySwiper from "@/components/EntrySwiper"
import DownloadCard from "@/components/DownloadCard"
import Footer from "@/components/Footer"
import InfoSwiper from "@/components/InfoSwiper"
import InfoSwiperSP from "@/components/InfoSwiperSP"
import NavBar from "@/components/NavBar"

import logo from '../assets/logo1.png'
import screenshot from '../assets/home_scr.png'
import swiper from '../assets/screenshot1.jpg'
import swiper2 from '../assets/screenshot2.jpg'
import swiper3 from '../assets/screenshot3.jpg'

import { IEntry } from '../../types'

export const metadata: Metadata = {
  title: 'パロット：みんなの方言辞典',
  description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
}

const Home: React.FC = () => {

  // FETCH USER DATA
  const getData = async () => {
    const array :IEntry[]= []
    try {
      const usersRef = collection(db, "entries")
      const q = query(usersRef, orderBy("date_created", "desc"), limit(8))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        array.push(doc.data() as IEntry)
      })
      return array
    } catch(e) {
      console.log(e)
    }
  }

  const entryItems = use(getData())

  const menuItems = [
    {
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
    // {
    //   title: 'お問い合わせ',
    //   value: 'contact'
    // }
  ]
  

  const swiperItemsSp = [ 
    {
      id: 1,
      title: '投稿されたフレーズを\nホーム画面で閲覧！',
      subTitle: 'パロットでできること',
      description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！\n',
      image: swiper,
    },
    {
      id: 2,
      title: '自分の声を投稿！',
      subTitle: '録音機能で自分の声をアップ',
      description: '簡単に自分の声をアップして方言の面白さを伝える！もしくは文字だけで面白いフレーズと言葉を投稿しよう！',
      image: swiper2,
    },
    {
      id: 3,
      title: 'アップストア・GooglePlayからダウンロード！',
      subTitle: '簡単にダウンロード',
      description: 'ダウンロードは以下のリンクから！アカウント登録して投稿にいいねやコメントしてみてください！！',
      image:swiper3,
    }
  ]

  const swiperItems = [ 
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
      image: swiper,
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
      image: swiper2,
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
      image:swiper3,
    }
  ]

  return (
    <div className="bg-gray-bg h-full p-4 md:p-10">
      <NavBar menuItems={menuItems}/>
      <div className="pt-10 pb-16 flex flex-col items-center md:flex-row md:justify-between md:px-10 md:pb-[7rem] lg:pr-0">
        <div>
          <div className="font-bold text-2xl text-center whitespace-pre-wrap md:text-left md:text-4xl lg:whitespace-normal">{`誰でも投稿できる、\nみんなの方言辞典`}</div>
          <div className="w-[16.25rem] h-[5rem] mt-2 md:w-[25rem] md:h-[7.5rem] lg:w-[30rem] lg:h-[9rem]">
            <Image src={logo} alt="パロットロゴ" className="object-cover h-full w-full"/>
          </div>
        </div>
        <div className="lg:flex lg:justify-center lg:grow">
          <div className="w-[14.5rem] mt-10">
            <Image src={screenshot} alt="パロットスクショ" className="object-cover h-full w-full"/>
          </div>
        </div>
      </div>
      <div id="info" className="scroll-m-4">
        <div className="md:hidden">
          <InfoSwiperSP items={swiperItemsSp}/>
        </div>
        <div className="hidden md:block">
          <InfoSwiper items={swiperItems}/>
        </div>
      </div>
      <div id="accents" className="my-20 md:my-[10rem] scroll-m-4">
        <div className="text-center font-bold text-xl mb-4">投稿された方言</div>
        <div className="md:hidden">
          <EntrySwiper items={entryItems ?? [] }/>
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {entryItems?.map((entry) => {
            return (<EntryCard item={entry} key={entry.entry_id}/>)
          })}
        </div>
      </div>
      <div id="download" className="scroll-m-4">
        <DownloadCard />
      </div>
      <div className="pt-6">
        <Footer />
      </div>
    </div>
  )
}

export default Home