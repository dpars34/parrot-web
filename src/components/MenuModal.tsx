import React, { useEffect } from 'react'

interface IMenuModalProps {
  onItemClick: (type: string) => void,
  onClickClose: () => void, 
  menuItems: { title: string, value: string }[],
  menuOpen: boolean
}

const MenuModal: React.FC<IMenuModalProps> = (props) => {

  return (
    <div className={`h-screen w-screen fixed bg-secondary p-6 top-0 transition-all duration-300 z-50 ${props.menuOpen ? 'right-0' : 'right-[-100vw]'}`}> 
      <div className="w-full flex justify-end">
        <span className="material-icons text-white !text-2xl cursor-pointer" onClick={props.onClickClose}>close</span>
      </div>
      <div className="pt-32 flex flex-col items-center gap-6">
        {props.menuItems.map((item, index) => {
          return <div key={index} className="cursor-pointer text-2xl text-white font-bold" onClick={() => props.onItemClick(item.value)}>{item.title}</div>
        })}
      </div>
    </div>
  )
}

export default MenuModal