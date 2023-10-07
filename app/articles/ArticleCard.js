import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img from '@/public/Course-Img.jpg'


const ArticleCard = () => {
    return (
        <div className='my-5 h-[200px]'>
            <Link className='flex flex-row w-full' href="/articles/article">
                <div className='relative w-[30%] items-end  '>
                    <Image src={Img} width={250} height="auto" className='right-0 absolute top-0' alt='articles'/></div>
                <div className='w-[65%] pl-10'>
                    <h2 className='text-4xl mb-2 font-bold'>
                        LOREM IPSUM GENERATOR
                        Lorem ipsum dolor sit amet, 
                        </h2>
                    <p className='text-lg font-Proxima'>
                        LOREM IPSUM GENERATOR
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard