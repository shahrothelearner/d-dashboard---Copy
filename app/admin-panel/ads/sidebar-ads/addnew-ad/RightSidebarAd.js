import Image from 'next/image'
import React from 'react'
import FnOnChangeImage from '../../FnOnChangeImage'

const RightSidebar = ({ image, setImage, ads, setAds, imgSize }) => {
  return (
    <div className="w-3/12 bg-white my-5 overflow-hidden rounded border flex flex-col">
      <h4 className="w-full bg-warning text-white p-2">Upload Image:</h4>
      <div className=" m-2 border  rounded relative" style={{ height: "180px" }}>
        <Image src={image} fill={true} alt="banner-img" />
      </div>
      <div className='flex items-center px-5 text-black'><input type="file" name="banner1-img" className="p-3 rounded" accept="image/*" onChange={(e) => FnOnChangeImage(e, setImage)} />
        {/* <span onClick={setImage(image)}>X</span> */}
      </div>
      {imgSize && <div className='flex flex-row items-center ml-3'>
        <label htmlFor='ad-size'>Size:</label>
        <select className='ml-1 p-1 rounded' defaultValue={"Select Size:"} id="ad-size" onChange={(e) => setAds({ ...ads, size: e.target.value })}>
          <option value="300px">300x300</option>
          <option value="600px">300x600</option>
        </select>
      </div>}
    </div>
  )
}

export default RightSidebar