import Image from 'next/image'
import React from 'react'
import Img1 from '@/public/category-01.png';


const CardArticle2 = () => {
    return (
        <div className='flex m-auto w-[95%] h-full text-left pb-5 mr-2'>
            <div className="w-[30%] h-[150px] relative"><Image src={Img1} fill={true} alt="category"sizes='auto'/></div>
            <div className="card2-text w-[70%] h-full pl-5">
                <h4 className='text-[26px] leading-[30px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <p className='text-[16px] leading-[22px] mt-2.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p></div>
        </div>
    )
}

export default CardArticle2