"use client";

import Image from 'next/image'
import logo from '../assets/logo1.png'
import MenuModal from "./MenuModal"
import { useState } from 'react'

interface INavBarProps {
  menuItems: { title: string, value: string }[]
}

const NavBar: React.FC<INavBarProps> = (props) => {

  const [ menuOpen, setMenuOpen ] = useState(false)

  const handleMenuOpen= () => {
    setMenuOpen(true)
  }

  const handleMenuClose= () => {
    setMenuOpen(false)
  }

  const handleItemClick= (item: string) => {
    const element = document.getElementById(item)
    if (element !== null) {
      setMenuOpen(false)
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="bg-white h-[4.5rem] w-full pl-6 pr-2 md:px-10 rounded-full flex items-center justify-between shadow-md"> 
        <div className="w-[7.5rem] h-[2.3rem]">
          <Image src={logo} alt="パロットロゴ" className="object-cover h-full w-full"/>
        </div>
        <div className="md:hidden rounded-full bg-secondary h-14 w-14 flex items-center justify-center cursor-pointer text-2xl" onClick={handleMenuOpen}>
          <span className="material-icons text-white !text-2xl">menu</span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-10">
          {props.menuItems.map((item, index) => {
            return <span key={index} className="cursor-pointer" onClick={() => handleItemClick(item.value)}>{item.title}</span>
          })}
        </div>
      </div>
      <MenuModal menuItems={props.menuItems} menuOpen={menuOpen} onClickClose={handleMenuClose} onItemClick={handleItemClick}/>
    </>
  )
}

export default NavBar