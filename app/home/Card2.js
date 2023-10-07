import React from 'react'
import Image from 'next/image'
import Img1 from '@/public/category-01.png';


const Card2 = () => {
  return (
    <div className='card2'>
        <div className="card2-img"><Image src={Img1} width={150} height={150} alt="category"/></div>
        <div style={{width: "65%"}}><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></div>
    </div>
  )
}

export default Card2