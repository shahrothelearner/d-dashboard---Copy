import Image from 'next/image'
import React from 'react'
import img from '@/public/category-01.png'


const CardArticle = () => {
  return (
    <div className='w-full h-full block'>
    <div className='w-full h-[70%] relative'>
      <Image src={img} fill={true} alt="category" sizes='auto'/>
    </div>
    <div className='text-left items-center mt-4'>
      <h1 className='cursor-pointer font-Proxima-cond font-bold block text-[#231f20] text-[30px] leading-[34px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    </div>
  </div>
  )
}

export default CardArticle