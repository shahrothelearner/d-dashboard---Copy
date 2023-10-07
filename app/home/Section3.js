'use client'
import React from 'react'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
import Img1 from '@/public/Author-01.png'
import Img2 from '@/public/Author-02.png'
import Img3 from '@/public/Author-03.png'
import Img4 from '@/public/Author-01.png'
import Link from 'next/link'



const Section3 = () => {
  return (
    <div className='section'>
      <h1>Top Authors</h1>
      <div className='heading-section'>lorem ipsum 
        <Link href="/authors">
      <span className='border-span'>
          View All<BsArrowRightCircle />
          </span>
          </Link>
          </div>
      <hr />
      <div className='author'>
          <Image className="author-section w-[250px] h-[380px]" src={Img1} width='auto' height='auto' alt="author"/>
          <Image className="author-section w-[250px] h-[380px]" src={Img2} width='auto' height='auto' alt="author"/>
          <Image className="author-section w-[250px] h-[380px]" src={Img3} width='auto' height='auto' alt="author"/>
          <Image className="author-section w-[250px] h-[380px]" src={Img4} width='auto' height='auto' alt="author"/>
      </div>
    </div>
  )
}

export default Section3