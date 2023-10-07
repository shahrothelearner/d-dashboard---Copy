import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo-removebg.png'
import  Trust from '@/public/trust.png'
const Footer = () => {
  return (
    <section className='max-h-96 h-full flex w-full lg:h-32 pt-[25px] bg-black text-white m-auto font-Proxima justify-center'>
        <div className="lg:flex flex-row w-11/12 items-center mx-auto block">
            <div className="lg:w-1/6 mx-auto w-full flex relative justify-center" >
                <Image src={Logo} className='w-[100px] h-[100px]' width='auto' height='auto' alt="logo"/>
            </div>    
            <div className='lg:w-4/6 lg:text-right text-sm font-extralight  cursor-pointer text-center w-full'>
            <a className='mx-2 underline'>About  </a> |<a className='mx-2 underline'>Careers  </a>| 
            <a className='mx-2 underline'>Advertise with us</a><br/><br/>
            <div className='lg:block flex flex-col'><strong className='font-bold'>OUR BRANDS</strong>
            <a className='mx-2 underline'>Healthline</a><a className='mx-2 underline'>Medical News Today</a>
            <a className='mx-2 underline'>Greatist</a>
            <a className='mx-2 underline'>Psych Central</a><a className='mx-2 underline'>Bezz</a>
            </div></div>
            <div className='lg:block lg:text-left lg:w-1/6 w-full flex justify-center'>
              <Image src={Trust} className='w-[100px] h-[100px]' width='auto' height='auto' alt='trust'/> </div>
        </div>
    </section>
  )
}

export default Footer