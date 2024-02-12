"use client";

import Image from 'next/image'
import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'

interface IFooterProps {

}

const EntryCard: React.FC<IFooterProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center text-secondaryText text-sm gap-10 md:flex-row md:justify-between"> 
      <div className="flex items-center flex-col gap-4 md:flex-row md:gap-10">
        <a className="cursor-pointer hover:underline" href="https://dpars34.github.io/parrot-app-terms/" target="_blank" rel="noopener noreferrer">利用規約</a>
        <a className="cursor-pointer hover:underline" href="https://dpars34.github.io/parrot-app-privacy/" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
      </div>
      <span>©2024 Daniel Parsons</span>
    </div>
  )
}

export default EntryCard