import React from 'react'
import { HexColorPicker } from "react-colorful";


const PreviewAd = ({ ads, image, color, setColor }) => {
    return (
        <div className='flex'>
            <div className=" w-4/6 bg-white rounded overflow-hidden border">
                <h4 className=" w-full bg-primary bg-gradient text-white p-2">Preview:</h4>
                <div className="flex flex-row px-2 mx-auto my-3" style={{
                    width: "300px", height:ads.size, backgroundColor: color, backgroundImage: `url("${image}")`, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <div className="m-auto text-center" >
                        <h1>{ads.heading}</h1>
                        <div className="break-words w-full h-auto px-5">{ads.content}</div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col w-2/6 bg-white rounded overflow-hidden border items-center">
                <h4 className=" w-full bg-success  text-white p-2">Background Color:</h4>
                <HexColorPicker color={color} onChange={setColor}  className='py-5'/>
                <div className='flex items-center m-5'>
                    <label htmlFor='ad-size'>Hex value:</label>
                    <input type="text" className='rounded border m1-1' value={color} size={8} onChange={(e) => setColor(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default PreviewAd