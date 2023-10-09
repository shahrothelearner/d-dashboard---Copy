'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { BiSolidVideos } from 'react-icons/bi'
import CoursesData from '@/data/dashboard/CoursesData'

const Coursepage = ({params}) => {
    const [admissionDate, setAdmissionDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const init = async () => {
            const { Datepicker, Input, initTE } = await import("tw-elements");
            initTE({ Datepicker, Input });
        };
        init();
    }, []);


    const dataForUpdate =CoursesData.find(key=> key._id == params.course)
    return (
        <div style={{ width: "100%", maxWidth: "1100px", margin: "auto" }}>
            <h1 className="w-full my-10 text-lg font-bold flex items-center gap-2"><BiSolidVideos size={30} />Update Story</h1>
            <div className='rounded m-5  w-full'>
                <form className="flex flex-col gap-2 m-2  flex-wrap">
                    <div className='flex w-full items-center gap-5 flex-wrap '>
                        <div className='flex flex-col w-5/12'>
                            <label htmlFor="story-title">Story Title:<span className='text-danger'>*</span> </label>
                            <input  type="text" id="story-title" placeholder="Enter Story Title" className="my-2 p-2 px-4 rounded   border"  defaultValue={dataForUpdate.title}/></div>
                    </div>
                    <label htmlFor="story-url">Story Url:<span className='text-danger'>*</span></label>
                    <input type="text" id="story-url" placeholder="Enter Story Url" className="my-2 p-2 px-4 rounded w-10/12  border" rows={5}/>
                       
                        <div className='flex flex-col  '>
                            <label htmlFor='admission' >Sponsored:<span className='text-danger'>*</span></label>
                            <select id='admission' className="my-2 py-2 px-4 rounded  border" defaultValue={dataForUpdate.admission} >
                                <option>--Select--</option>
                                <option>Yes</option>
                                <option>Not</option>
                            </select>

                        </div>
                        <div className='my-5'>
                            {/* <button className='  bg-blue-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Save"> Save </button> */}
                            <button className='  bg-red-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">Delete</button>
                            <button className='  bg-purple-600 mx-1 px-3 py-2 rounded text-white' data-bs-toggle="tooltip" data-bs-placement="top" title="Update"> Update</button>
                            <Link href={"/"}><button className='  bg-yellow-500 mx-1 px-3 py-2 text-white rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Close">Close</button></Link>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Coursepage