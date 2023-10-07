import React from 'react';
import HeroBanner from './HeroBanner';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Stories from './Stories';
import CardImg from '@/public/card.jpg'
import Imgbanner from "@/public/banner-img.png"   


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


const MainPage = () => {
  return (
    <div className='home-page'>
      <HeroBanner img={Imgbanner} heading="Welcome to Pakistan's Largest Competitive Community" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" headingstyle="first-block"
      imgstyle="second-block" btnstyle="none" btnValue=""/>
      <div className='container-main'>
      <Stories/>
      <Section/>
      <Section2/>
      <Section3/>
      <Section4 heading="All Courses" data={categoryCard} url="/courses"/>
      <Section4 heading="All Events" data={categoryCard} url="/events"/>
      </div>
      <Section5/>
      <div className='container-main'>
      <Section4 heading="Aspirant's Contributions" data={categoryCard} url="/aspirant"/>
      </div>
    
      
    </div>
  )
}

export default MainPage