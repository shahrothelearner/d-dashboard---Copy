import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HexColorPicker } from "react-colorful";
import { BsArrowRight } from 'react-icons/bs';

const Preview2 = ({ banner, image, color,setColor }) => {
    return (
        <div className='flex'>
        <div className="w-8/12 rounded overflow-hidden border border-secondary">
            <h4 className=" w-full bg-primary bg-gradient text-white p-2 m-0">Preview:</h4>
            <div style={{backgroundColor: color}} >
                <h1 className='p-5 capitalize'>{banner.heading}</h1>
                <div className="flex pl-5 capitalize " >
                    <div className='w-7/12 h-full'>
                        <div className="break-words w-full ">{banner.content}</div>
                        <Link href={banner.url} >Click Here to Explore&nbsp;&nbsp;<BsArrowRight/></Link>
                    </div>
                    <div className="w-5/12 relative" style={{width:"300px", height:"300px"}}> 
                        <Image src={image} fill={true} alt="banner-img" className='absolute bottom-0 left-0'/>
                    </div>
                </div>
            </div>
        </div>
         <div className="flex flex-col w-3/12 bg-white rounded overflow-hidden border border-secondary items-center">
         <h4 className=" w-full bg-success bg-gradient text-white p-2">Background Color:</h4>
         <HexColorPicker color={color} onChange={setColor} className='py-5' />
         <div className='flex items-center m-5'>
             <label htmlFor='ad-size'>Hex value:</label>
             <input type="text" className='rounded border border-secondary ml-1' value={color} size={8} onChange={(e) => setColor(e.target.value)} />
         </div>
     </div>
 </div>
    )
}

export default Preview2