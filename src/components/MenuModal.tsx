import React, { useEffect } from 'react'

interface IMenuModalProps {
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


const MenuModal: React.FC<IMenuModalProps> = (props) => {

  useEffect(() => {
    console.log('hello')
  }, [])

  return (
    <div className="h-screen w-screen fixed top-0 bg-secondary p-6"> 
      <div className="w-full flex justify-end">
        <span className="material-icons text-white !text-2xl cursor-pointer">close</span>
      </div>
      <div className="pt-32 flex flex-col items-center gap-6">
        {menuItems.map((item) => {
          return <div className="cursor-pointer text-2xl text-white font-bold">{item.title}</div>
        })}
      </div>
    </div>
  )
}

export default MenuModal