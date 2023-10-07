import Image from 'next/image'
import React from 'react'
import FnOnChangeImage from '../../FnOnChangeImage'

const RightSidebar = ({image,setImage, ads, setAds, imgSize }) => {
  return (
    <div className="col-3 bg-white my-5 overflow-hidden rounded border border-secondary d-flex flex-column">
      <h4 className="w-100 bg-warning text-white p-2">Upload Image:</h4>
      <div className=" m-2 border border-secondary rounded position-relative" style={{ height: "180px" }}>
        <Image src={image} fill={true} alt="banner-img" />
      </div>
      <div className='d-flex align-items-center px-5 text-dark'><input type="file" name="banner1-img" className="p-3 rounded" accept="image/*" onChange={(e)=> FnOnChangeImage(e, setImage)} />
      {/* <span onClick={setImage(image)}>X</span> */}
      </div>
      {imgSize&&<div className='d-flex flex-row align-items-center ms-3'>
      <label htmlFor='ad-size'>Size:</label>
      <select className='ms-1 p-1 rounded' defaultValue={"Select Size:"} id="ad-size" onChange={(e)=> setAds({...ads, size:e.target.value})}>
        <option value="300px">300x300</option>
        <option value="600px">300x600</option>
      </select>
      </div>}
    </div>
  )
}

export default RightSidebar