'use client'
import React from 'react'
import Card from './Card'
import { BsArrowRightCircle } from 'react-icons/bs'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardImg from '@/public/card.jpg'
import Link from 'next/link';


const categoryCard = [
    {
        _id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 4,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 5,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 6,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 7,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 8,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 9,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
    {
        _id: 10,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        img: CardImg,
    },
];
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1200 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1200, min: 900 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 900, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};


const Section = () => {
    return (
        <div className='section'>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                <h1>Top Categories</h1>
                <Link  href="/categories"><span className='border-span'>View All<BsArrowRightCircle /></span></Link>
            </div>
            <Carousel
                responsive={responsive}
                itemClass="carouselItem"
                autoPlay={true}
                swipeable={true}
                draggable={true}
                // showDots={true}
                infinite={true}
                partialVisible={true}
                arrows={false}>
            {categoryCard.map((element, index) => {
                return (
                    <div key={`msk-${index}`}>
                
                    <Card {...element}  />
                    </div>
                )
            })}
            </Carousel>
        </div>
    )
}

export default Section