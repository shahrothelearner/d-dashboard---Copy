'use client'
import Image from 'next/image'
import Link from 'next/link';
import { HexColorPicker } from "react-colorful";
import logo from 'public/images/brand/logo/brand-logo.png'
import { useState } from 'react';


const Preview3 = ({ banner, image, color, setColor }) => {
    const [imageToggle, setImageToggle] = useState(false)
    function adjust(color1, amount) {
        return '#' + color1.replace(/^#/, '').replace(/../g, color1 => ('0'+Math.min(255, Math.max(0, parseInt(color1, 16) + amount)).toString(16)).substr(-2));
    }
    const bottomBorder = adjust(color, -30)
    return (
        <div className='flex'>
            <div className="w-8/12 bg-white rounded overflow-hidden p-0 border border-secondary ">
                <h4 className=" w-full bg-primary bg-gradient text-white p-2 m-0">Preview:</h4>
                <div className="flex mt-5" style={{ height: "200px", backgroundColor: color }}>
                {imageToggle &&<div className="w-4/12 relative h-full m-3 ">
                        <Image src={image} fill={true} alt="banner-img" />
                    </div> }
                    <div className=" pt-3 d-flex" >
                        <div className="px-5">
                            <h2 className='capitalize'>{banner.heading}</h2>
                            <div className="break-words w-full h-auto capitalize">{banner.content}</div>
                            <button className='bg-blue-700 px-4 py-2 text-white'>Apply Now</button>
                        </div>
                    </div>
                </div>
                    <div style={{backgroundColor: bottomBorder}} className=' w-full h-15 relative flex justify-between px-5 py-2'><Image src={logo} width={40} height={25}/><Link href={"#"} className='text-dark'>Advertise with us</Link></div>
            </div>
            <div className="flex flex-col w-3/12 bg-white rounded overflow-hidden border border-secondary items-center">
                <h4 className=" w-full bg-success bg-gradient text-white p-2">Background Color:</h4>
                <HexColorPicker color={color} onChange={setColor} className='py-5' />
                <div className='flex items-center m-2'>
                    <label htmlFor='ad-size'>Hex value:</label>
                    <input type="text" className='rounded border border-secondary ml-1' value={color} size={8} onChange={(e) => setColor(e.target.value)} />
                </div>
                <div className='flex py-2'>
                Image Toggle:<input id="image-toggle" type='checkbox' className='p-5' onChange={()=> imageToggle? setImageToggle(false): setImageToggle(true)}/>
                    </div>
            </div>
        </div>
    )
}

export default Preview3