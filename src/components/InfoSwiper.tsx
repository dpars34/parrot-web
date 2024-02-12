"use client";

// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { SlideComponent } from '@splidejs/splide'
import '@splidejs/react-splide/css'
import '../assets/styles/swiper.css'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface IInfoSwiperProps {
  items: {
    id: number,
    title: string,
    subTitle: string,
    description: string,
    image: StaticImageData,
  }[]
}

const InfoSwiper: React.FC<IInfoSwiperProps> = (props) => {

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleSlideChange = (splide: SlideComponent) => {
    setActiveSlide(splide.index)
  }

  return (
    <Splide 
      hasTrack={ false }  
      onActive={handleSlideChange} 
      options={ {
        rewind: true,
        padding: '3.5rem',
        gap: '2rem',
        arrows: false,
      } }>
      <div className="grid grid-cols-2 w-full h-[623px] bg-white">
        <div className="bg-secondary p-[70px] flex flex-col gap-6 text-white font-bold rounded-l-2xl relative">
          <div className="text-3xl">{props.items[activeSlide].subTitle}</div>
          <div className="text-base">{props.items[activeSlide].description}</div>
          <ul className="splide__pagination info-swiper-pagination"></ul>
        </div>
        <div className="pt-10 flex flex-col gap-8 justify-between rounded-r-2xl">
          <div className="px-10 text-4xl font-bold text-center whitespace-pre-wrap">{`${props.items[activeSlide].title}`}</div>
          <div>
            <SplideTrack>
              { props.items.map((item, index) => {
                return <SplideSlide key={index}>
                <div className="relative h-[432px]">
                  <div className="bg-bg h-[392px] w-full absolute top-[42px] rounded-t-3xl"></div>
                  <div className="w-[192px] mx-auto relative">
                    <Image src={item.image} alt="Image 1" className="object-cover h-full w-full rounded-[30px]"/>
                  </div>
                </div>
              </SplideSlide>
              }) }
            </SplideTrack>
          </div>
        </div>
      </div>
    </Splide>
  )
}

export default InfoSwiper