import React from 'react'
import { HexColorPicker } from "react-colorful";


const PreviewAd = ({ ads, image, color, setColor }) => {
    return (
        <div className='d-flex'>
            <div className=" col-7 bg-white rounded overflow-hidden border border-secondary">
                <h4 className=" w-100 bg-primary bg-gradient text-white p-2">Preview:</h4>
                <div className="d-flex flex-row px-2 mx-auto my-3" style={{
                    width: "300px", height:ads.size, backgroundColor: color, backgroundImage: `url("${image}")`, backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                    <div className="m-auto text-center" >
                        <h1>{ads.heading}</h1>
                        <div className="text-break w-100 h-auto px-5">{ads.content}</div>
                    </div>

                </div>
            </div>
            <div className=" d-flex flex-column col-3 bg-white rounded overflow-hidden border border-secondary align-items-center">
                <h4 className=" w-100 bg-success bg-gradient text-white p-2">Background Color:</h4>
                <HexColorPicker color={color} onChange={setColor} />
                <div className='d-flex flex-row align-items-center m-5'>
                    <label htmlFor='ad-size'>Hex value:</label>
                    <input type="text" className='rounded border border-secondary ms-1' value={color} size={8} onChange={(e) => setColor(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default PreviewAd