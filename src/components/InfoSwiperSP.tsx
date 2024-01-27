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
        pagination: false,
      } }>
      <div>
        <div className="bg-secondary h-[11.375rem] p-6 flex flex-col items-center gap-2 text-white font-bold relative rounded-t-lg mx-4">
          <div className="text-xl">{props.items[activeSlide].subTitle}</div>
          <div className="text-base text-center">{props.items[activeSlide].description}</div>
        </div>
        <div className="pt-10 flex flex-col gap-8 justify-between rounded-2xl bg-white">
          <div className="px-10 text-2xl font-bold text-center whitespace-pre-wrap h-[4.5rem]">{`${props.items[activeSlide].title}`}</div>
          <div>
            <SplideTrack>
              { props.items.map(item => {
                return <SplideSlide>
                <div className="relative h-[19.75rem]">
                  <div className="bg-bg h-[16.625rem] w-full absolute top-[3.125rem] rounded-t-3xl"></div>
                  <div className="w-[8.75rem] mx-auto relative">
                    <Image src={item.image} alt="Image 1" className="object-cover h-full w-full rounded-[1.875rem]"/>
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