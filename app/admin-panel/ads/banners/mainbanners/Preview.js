import Image from 'next/image'
import { HexColorPicker } from "react-colorful";
const Preview = ({ banner, image ,color, setColor }) => {
    return (
        <div className='flex'>
            <div className="w-8/12 bg-white rounded overflow-hidden border border-secondary">
                <h4 className=" w-full bg-primary bg-gradient text-white p-2">Preview:</h4>
                <div className="flex px-2" style={{ height: "250px", backgroundColor: color }}>
                    <div className="w-7/12 items-center flex" >
                        <div className="pl-5">
                            <h2 className='capitalize'>{banner.heading}</h2>
                            <div className="break-words w-full h-auto capitalize">{banner.content}</div>
                        </div>
                    </div>
                    <div className="w-4/12 relative h-full">
                        <Image src={image} fill={true} alt="banner-img" />
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

export default Preview