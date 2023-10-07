'use client'
import React from 'react'
import Card from './Card'
import { BsArrowRightCircle } from 'react-icons/bs'
import responsive1 from './CarouselResponsive';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';



const Section4 = (props) => {
  const { heading, data, url } = props;
  return (
    <div className='section'>
      <h1>{heading}</h1>
      <div className='heading-section'>lorem ipsum<Link  href={url}><span className='border-span'>View All<BsArrowRightCircle /></span></Link></div>
      <hr />
      <Carousel
        responsive={responsive1}
        itemClass="carouselItem"
        autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={true}
        arrows={false}>
        {data.map(element => {
          return (
            <div key={element._id} className='first-section'>
              <Card {...element}/>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Section4