'use client'
import React, {useState} from 'react'
import LeftSide from '../../mainbanners/LeftSide'
import img from '../../../../../../public/images/layouts/select-img.png';
import RightSidebarAd from '../../../sidebar-ads/addnew-ad/RightSidebarAd'
import Preview3 from './Preview3';


const BannerAdd = () => {
  const [color, setColor] = useState("#D2E6E8");
  const [image, setImage] = useState(img);
  const [ads, setAds] = useState({
      heading: "Heading",
      content: "",
      size:300,
  })
  return (
    <div className="mx-auto my-5" style={{ width: "1200px" }}>
      <div className="ml-5">
        <h1 className='text-lg font-bold'>Add Sidebar Ads</h1>
        <section className="w-full ">
          <form className="flex m-auto">
            <LeftSide show={true} ads={ads} setAds={setAds} maxLength={100} />
            <RightSidebarAd image={image} setImage={setImage} setAds={setAds} ads={ads} />
          </form>
          <Preview3 banner={ads} image={image} color={color} setColor={setColor} />
          <button className='bg-blue-600 my-3 text-white py-2 px-4'>Save</button>

        </section>
      </div>
    </div>
  )
}

export default BannerAdd