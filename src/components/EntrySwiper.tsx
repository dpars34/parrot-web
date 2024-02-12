"use client";

// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { SlideComponent } from '@splidejs/splide'
import '@splidejs/react-splide/css'
import '../assets/styles/swiper.css'
import React, { useState } from 'react'
import EntryCard from './EntryCard';

interface IEntrySwiperProps {
  items: {
    phraseTitle: string,
    phraseStandard: string,
    phraseExplain: string,
    userName: string,
    phraseAccent: string,
    likeCount: number,
    commentsCount: number,
  }[]
}

const EntrySwiper: React.FC<IEntrySwiperProps> = (props) => {

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
        gap: '2rem',
        padding: '3.5rem',
        arrows: false,
      } }>
        <SplideTrack>
          { props.items.map((item, index)=> {
            return <SplideSlide key={index}>
              <EntryCard item={item}/>
          </SplideSlide>
          }) }
        </SplideTrack>
        <div>
          <ul className="splide__pagination entry-swiper-pagination"></ul>
        </div>
    </Splide>
  )
}

export default EntrySwiper