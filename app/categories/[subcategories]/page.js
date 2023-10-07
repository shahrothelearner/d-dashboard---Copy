import React from 'react'
import Img from '@/public/coronavirus-banner.png'
import Image from 'next/image'
// import '../categories.css'
// import Card2 from '@/app/components/mainPage/Card2'
import CardArticle from './CardArticle'
import CardArticle2 from './CardArticle2'
import Link from 'next/link'
import ArticleCard from '@/app/articles/ArticleCard'


const page = ({params}) => {
  return (
    <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
      <div className='w-full mb-6 relative h-[300px]'>
        <Image src={Img} fill={true} alt='caterogry image' sizes='auto'/>
        <div className='absolute m-auto z-[1] text-white w-full flex flex-col flex-wrap justify-center items-center top-[40%] uppercase text-center'>
          <h1 className='text-[38px] leading-[42px] mb-2.5'>COVID-19</h1>
          <p>Latest Updates, Prevention Tips, and Resources on COVID-19</p>
        </div>
      </div>
      {/* <div style={{ fontSize: "24px", width: "90vw", fontWeight: "700", margin: "auto", padding: "20px 0px" }}>
        Lorem ipsum
        <hr />
      </div> */}
      <div className='flex w-[80%] h-[600px] my-10 mx-auto'>
        <div className='w-[50%] h-full mr-7.5'>
          <Link href="/articles/article"><CardArticle /></Link></div>
        <div className='w-[50%] h-full'><div>
          <Link href="/articles/article"><CardArticle2 /></Link>
          <Link href="/articles/article"><CardArticle2 /></Link>
          <Link href="/articles/article"><CardArticle2 /></Link>
        </div>
        </div>
        
      </div>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
    </div>

  )
}

export default page