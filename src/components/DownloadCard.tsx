import Image from 'next/image'
import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'

interface IDownloadCardProps {

}

const EntryCard: React.FC<IDownloadCardProps> = (props) => {
  return (
    <div className="bg-secondary px-6 py-10 rounded-2xl flex flex-col gap-4 items-center md:flex-row md:justify-between md:px-20"> 
      <div className="text-white font-bold text-2xl text-center md:text-3xl">ダウンロードはこちら!!</div>
      <div className="flex justify-center items-center gap-3">
        <a className="w-[8rem] h-[2.93rem] lg:w-[13.625rem] lg:h-[5rem]" href="https://apps.apple.com/jp/app/%E3%83%91%E3%83%AD%E3%83%83%E3%83%88-%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AE%E6%96%B9%E8%A8%80%E8%BE%9E%E5%85%B8/id6462151090" target="_blank" rel="noopener noreferrer">
          <Image src={appstore} alt="パロットロゴ" className="object-cover h-full w-full"/>
        </a>
        <a className="w-[9.8rem] h-[3.75rem] lg:w-[16.875rem] lg:h-[6.5rem]" href="https://play.google.com/store/apps/details?id=com.danpdev.parrot_app" target="_blank" rel="noopener noreferrer">
          <Image src={googleplay} alt="パロットロゴ" className="object-cover h-full w-full"/>
        </a>
      </div>
    </div>
  )
}

export default EntryCard