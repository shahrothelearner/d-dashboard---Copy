'use client'
import SecondMenu from  '@/components/header/SecondMenu'
import HeroBanner from '@/app/home/HeroBanner'
import Section01 from '@/components/notfoundpage/section01'
import Section02 from '@/components/notfoundpage/section02'
import Section03 from '@/components/notfoundpage/section03'
import Section04 from '@/components/notfoundpage/section04'
import ImgBanner from '@/public/banner-img.png'
import ImgBanner2 from '@/public/hero-banner1.png'

const data = [
    {
        id: 1,
        name: "Sub-category"
    },
    {
        id: 2,
        name: "Sub-category"
    },
    {
        id: 3,
        name: "Sub-category"
    },
    {
        id: 4,
        name: "Sub-category"
    },
    {
        id: 5,
        name: "Sub-category"
    },
    {
        id: 6,
        name: "Sub-category"
    },
    {
        id: 7,
        name: "Sub-category"
    },
    {
        id: 8,
        name: "Sub-category"
    },
    {
        id: 9,
        name: "Sub-category"
    },
    {
        id: 10,
        name: "Sub-category"
    },
]

const notfound = () => {
  return (
    <div>
        <SecondMenu data={data}/>
        <HeroBanner img={ImgBanner} heading="Are You Looking for Somethig?" paragraph="Let's explore CPF exclusive features to land on thousands of exam-relevant items to start or gear up your preparation." headingstyle="nf-banner-heading " imgstyle="second-block" btnstyle="none" btnValue=""/>
        <div className='max-w-[1100px] w-full m-auto h-auto '>
        <Section01/>
        <Section02/>
        <Section03/>
        </div>
        <HeroBanner img={ImgBanner2} heading="CPF Pocket: Better Studying Designed Fpr Your Goals" paragraph="Build a permanent library of everything you read, save, bookmark, or attempt. Let's edit and write articles to maintain your noteboks to prepare well with us." headingstyle="first-block" imgstyle="w-[40%] h-[300px] p-7.5 relative mr-[5%] m-[3rem] rounded-[50%] overflow-hidden" btnstyle="hero-banner-btn" btnValue="What is CPF Pocket?"/>
        <Section04/>


    </div>
  )
}

export default notfound