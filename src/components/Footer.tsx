import Image from 'next/image'
import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'

interface IFooterProps {

}

const EntryCard: React.FC<IFooterProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center text-secondaryText text-sm gap-10 md:flex-row md:justify-between"> 
      <div className="flex items-center flex-col gap-4 md:flex-row md:gap-10">
        <span className="cursor-pointer hover:underline">利用規約</span>
        <span className="cursor-pointer hover:underline">プライバシーポリシー</span>
      </div>
      <span>©2024 Daniel Parsons</span>
    </div>
  )
}

export default EntryCard