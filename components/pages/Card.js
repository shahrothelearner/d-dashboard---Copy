import React from 'react'
import Image from 'next/image'
import Img1 from '@/public/cat-card.png'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import Img from '@/public/logo.jpg'



const Card = ({element, link}) => {
  return (
    <div className='w-[335px] h-[450px] rounded-md overflow-hidden my-7.5 mx-auto bg-white relative '>
      <Link href={link+element.name}>
        <div className='relative h-[180px]'>
          <Image src={element.img? element.img:Img} fill={true} alt={element.name}  sizes='(width:auto)' />
        </div>
        <div className='py-7.5 px-5' >
          <h1 className='text-[1.5rem] font-semibold'>{element.name? element.name:"Heading"}</h1>
          <p>Latest Updates, Prevention Tips, and Resources on COVID-19</p>
          <span className='flex text-[16px] font-semibold leading-5 text-[#02838d] no-underline uppercase absolute bottom-[5%] gap-1 items-center'>Explore now <BsArrowRight /></span>
        </div>
      </Link>
    </div>
  )
}

export default Card