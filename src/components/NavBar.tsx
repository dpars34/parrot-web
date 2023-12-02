import Image from 'next/image'
import logo from '../assets/logo1.png'

interface INavBarProps {
  onItemClick?: (type: string) => void
}

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
  {
    title: 'お問い合わせ',
    value: 'contact'
  }
]


const NavBar: React.FC<INavBarProps> = (props) => {
  return (
    <div className="bg-white h-20 w-full pl-6 pr-2 md:px-10 rounded-full flex items-center justify-between shadow-md"> 
      <div className="h-10 w-30">
        <Image src={logo} alt="パロットロゴ" className="object-cover h-full w-full"/>
      </div>
      <div className="md:hidden rounded-full bg-secondary h-14 w-14 flex items-center justify-center">
        <span className="material-icons text-white cursor-pointer">menu</span>
      </div>
      <div className="hidden md:flex gap-6 lg:gap-10">
        {menuItems.map((item) => {
          return <span className="cursor-pointer">{item.title}</span>
        })}
      </div>
    </div>
  )
}

export default NavBar