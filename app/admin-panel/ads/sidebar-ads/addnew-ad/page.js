'use client'
import React, {useState} from 'react'
import LeftSide from '../../banners/mainbanners/LeftSide'
import RightSidebarAd from './RightSidebarAd'
import img from '../../../../../public/images/layouts/select-img.png';
import PreviewAd from './PreviewAd';




const AdsPage = () => {
    const [color, setColor] = useState("#D2E6E8");
    const [image, setImage] = useState(img);
    const [ads, setAds] = useState({
        heading: "Heading",
        content: "",
        size:300,})
   
    
    return (
        <div className="mx-auto my-5" style={{ width: "1000px" }}>
            <div className="ml-5">
                <h1 className='text-lg font-bold'>Add Sidebar Ads</h1>
                <section className="w-full ">
                    <form className="flex flex-row m-auto">
                <LeftSide show={true}  setAds={setAds} ads={ads} maxLength={300}/>
                <RightSidebarAd image={image} setImage={setImage} setAds={setAds} ads={ads}/>
                    </form>
                    <PreviewAd ads={ads} image={image} color={color} setColor={setColor}/>
                <button className='bg-blue-700 my-3 py-2 px-4 text-white rounded'>Save</button> 
                    
                </section>
            </div>
        </div>
    )
}

export default AdsPage