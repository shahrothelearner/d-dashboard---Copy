import React from 'react'
import Image from 'next/image'
import"./mainPage.css"
import Imgbanner from "@/public/hero-banner1.png"


const HeroBanner = ({img, heading, paragraph, headingstyle,imgstyle, btnstyle, btnValue}) => {
  return (
    <div className='hero-banner '>
      <div className={headingstyle}><h1>{heading}</h1>
      <p> {paragraph}
         </p>
         <span className={btnstyle}>{btnValue}</span>
         </div>
      <div className={imgstyle}><Image src={img} alt="Herobanner" fill={true} sizes='100%'/></div>

    
    </div>
  )
}

export default HeroBanner