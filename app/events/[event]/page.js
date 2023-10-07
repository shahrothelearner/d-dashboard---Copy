'use client'
import SecondMenu from '@/components/header/SecondMenu'
import courses from '../../courses/coursesArr'
import { AiFillFacebook } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsStopwatch } from 'react-icons/bs'
import { AiOutlineTag } from 'react-icons/ai'
import { TfiWrite } from 'react-icons/tfi'
import { GrLocation } from 'react-icons/gr'
import { BiMessageRoundedEdit } from 'react-icons/bi'
import { SlLocationPin } from 'react-icons/sl'
import Link from 'next/link'
import Img from '@/public/Course-Img.jpg'
import Image from 'next/image'
import Card from '@/components/pages/Card'


const paragraphContent = [
    {
        id: "a",
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "b",
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "c",
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "d",
        heading: "Heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
]

const tableData = [{
    icon: <SlLocationPin />,
    heading: "Location",
    detail: "Online"
},
{
    icon: <TfiWrite />,
    heading: "Register Before",
    detail: "dd/mm/yy"
},
{
    icon: <BiMessageRoundedEdit />,
    heading: "Oreintation Date",
    detail: "dd/mm/yy"
},
{
    icon: <BsStopwatch />,
    heading: "Duration",
    detail: "2 Days"
},
{
    icon: <BsStopwatch />,
    heading: "Start Time",
    detail: "10:00 am"
},
{
    icon: <BsStopwatch />,
    heading: "End Time",
    detail: "2:00 Pm"
},
{
    icon: <AiOutlineTag />,
    heading: "Fee",
    detail: "Free"
},
]


const data = [
    {
        id: 1,
        name: "Sub-category"
    },
    {
        id: 2,
        name: "Sub-category"
    },
    {
        id: 3,
        name: "Sub-category"
    },
    {
        id: 4,
        name: "Sub-category"
    },
    {
        id: 5,
        name: "Sub-category"
    },
    {
        id: 6,
        name: "Sub-category"
    },
    {
        id: 7,
        name: "Sub-category"
    },
    {
        id: 8,
        name: "Sub-category"
    },
    {
        id: 9,
        name: "Sub-category"
    },
    {
        id: 10,
        name: "Sub-category"
    },
]


const page = (params) => {
 
    const id = decodeURIComponent(params.event);

    const value = courses.find(element => element.name === id);
    return (
        <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
            <SecondMenu data={data} />
            <div className='w-full bg-black flex text-white  items-center h-[200px]'>
                <h1 className='pl-10 font-Proxima-cond text-5xl font-normal '>Events Details</h1></div>
            <div className='max-w-[1100px] flex w-[80%] mx-auto flex-row my-12'>
                <div className='flex-[60%]'>
                    <h1 className='font-Proxima-cond text-[50px] font-bold py-5'>Heading</h1>
                    <p className='text-lg py-2.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='font-medium text-[#857f7f] flex h-[60px] border-y-slate-400 items-center gap-2.5'><span>Share Via  </span>
                        <span className="flex gap-[50px]">
                            <AiFillFacebook size={44} />
                            <BsTwitter size={36} />
                            <BsLinkedin size={36} />
                        </span>
                    </div>
                    <div className='relative w-full h-[400px] block bg-black my-[30px]'><Image src={Img} fill={true} sizes='(width:auto)' alt="Course image" /></div>
                    <div className='flex flex-col'>
                        {paragraphContent.map(element => {
                            return (
                                <div key={element.id}>
                                    <h3 className='text-xl font-bold '>{element.heading}</h3>
                                    <p className='py-2.5 text-lg' >{element.paragraph}</p>
                                </div>
                            )
                        })}
                    </div>


                </div>

                <div className='flex-[30%] w-full'>
                    <div className='w-[90%] shadow-2xl m-auto py-[20px] px-[30px] rounded'>
                        <div className='flex flex-col'>
                            <h3 className='flex items-center text-xl h-[60px] py-[15px] px-auto text-[#007bff] font-medium border-b-[0.5px] border-b-[#857f7f1a] '>Highlights</h3>
                            <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <h2 className='text-2xl font-bold p-2.5 border-b-[0.5px] border-b-[#857f7f1a] '>Oreintation</h2></div>
                                <p style={{ color: "green" }}>Open</p></div>
                            {tableData.map((element, index) => {
                                return (
                                    <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <i className='text-[#005eff]'>{element.icon}</i>
                                            <h4 className='p-2.5 text-base font-medium '>{element.heading}</h4></div>
                                        <p>{element.detail}</p></div>
                                )
                            })}

                            {/* <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><TfiWrite /></i>
                                    <h4>Register Before</h4></div>
                                <p>dd/mm/yy</p> </div>
                            <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><BiMessageRoundedEdit /></i>
                                    <h4>Oreintation Date</h4></div>
                                <p>dd/mm/yy</p> </div>
                            <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><BsStopwatch /></i>
                                    <h4>Duration</h4></div>
                                <p>2 Days</p> </div>
                            <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><BsStopwatch /></i>
                                    <h4>Start Time</h4></div>
                                <p>10:00 am</p> </div>
                            <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><BsStopwatch /></i>
                                    <h4>Edn Time</h4></div>
                                <p>2:00 Pm</p> </div>
                            <div className='flex-row'>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i><AiOutlineTag /></i>
                                    <h4>Fee</h4></div>
                                <p>Free</p> </div> */}
                            <div className='w-[90%] text-white my-5'>
                                <Link href="#"><span className='w-full flex justify-center items-center h-10 font-medium rounded cursor-pointer bg-[#007bff] '>Apply Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1100px] w-[80%] m-auto pb-10'>
                <h2 className="text-[40px] font-medium">
                    More Courses for You</h2>
                <div className='flex flex-row justify-center flex-wrap gap-2.5 my-5'>
                    <Card element={courses[0]} link={"/events/"} />
                    <Card element={courses[1]} link={"/events/"} />
                    <Card element={courses[2]} link={"/events/"} />
                </div>
            </div>
        </div>

    )
}

export default page