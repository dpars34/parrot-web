import { getDocs, query, orderBy, limit, collection } from "firebase/firestore"; 
import { db } from './firebase.js'
import { use } from "react";
import Image from 'next/image'

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
  

  const swiperItems = [ 
    {
      id: 1,
      title: '投稿されたフレーズを\nホーム画面で閲覧！',
      subTitle: 'パロットでできること',
      description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
      image: swiper,
    },
    {
      id: 2,
      title: 'これはテストです',
      subTitle: 'これはテスト',
      description: 'これはテスト！いいですね！',
      image: swiper2,
    },
    {
      id: 3,
      title: '投稿されたフレーズを\nホーム画面で閲覧！',
      subTitle: 'パロットでできること',
      description: '日本の方言をもっと深く知りたいと思ったことはありませんか？ パロットはだれでも投稿できる方言辞典！',
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
          <InfoSwiperSP items={swiperItems}/>
        </div>
        <div className="hidden md:block">
          <InfoSwiper items={swiperItems}/>
        </div>
      </div>
      <div id="accents" className="my-20 md:my-[10rem] scroll-m-4">
        <div className="text-center font-bold text-xl mb-4">投稿された方言</div>
        <div className="md:hidden">
          <EntrySwiper items={entryItems ?? []} />
        </div>
        <div className="hidden md:grid md:grid-cols-3 md:gap-3 lg:grid-cols-4">
          {entryItems?.map((entry) => {
            return (<EntryCard item={entry} />)
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