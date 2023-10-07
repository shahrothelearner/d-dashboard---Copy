'use client'
import SecondMenu from '@/components/header/SecondMenu'
import courses from '../coursesArr'
import { AiFillFacebook } from 'react-icons/ai'
import { BsLinkedin,BsLaptop,BsTwitter, BsFiles, BsStopwatch, BsBarChartLine, BsEnvelope, BsWhatsapp, BsPeople   } from 'react-icons/bs'
import { LiaCertificateSolid, LiaGraduationCapSolid  } from 'react-icons/lia'
import { FaWpforms } from 'react-icons/fa'
import { TfiWorld } from 'react-icons/tfi'
import Link from 'next/link'
import Img from '@/public/Course-Img.jpg'
import Image from 'next/image'
import Card from '@/components/pages/Card'



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

const paragraphContent=[
    {
    id: "a",
    heading : "Heading",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
    id: "b",
    heading : "Heading",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
    id: "c",
    heading : "Heading",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
    id: "d",
    heading : "Heading",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},


]

const page = ({ params }) => {
    const id = decodeURIComponent(params.course);
    const value = courses.find((element) => element.name === id);
    return (
        <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
            <SecondMenu data={data} />
            <div className='w-full bg-black flex text-white  items-center h-[200px]'>
                <h1 className='pl-10 font-Proxima-cond text-5xl font-normal '>Course Details</h1></div>

            <div className='max-w-[1100px] flex w-[80%] mx-auto flex-row my-12'>
                <div className='flex-[60%]'>
                    <h1 className='font-Proxima-cond text-[50px] font-bold py-5'>{value.name}</h1>
                    <p className='text-lg py-2.5'>Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='font-medium text-[#857f7f] flex h-[60px] border-y-slate-400 items-center gap-2.5'>
                        <span>Share Via  </span>
                        <span className="flex gap-[50px]">
                            <AiFillFacebook size={44} />
                            <BsTwitter size={36} />
                            <BsLinkedin size={36} />
                        </span>
                    </div>
                    <div className='relative w-full h-[400px] block bg-black my-[30px]'>
                        <Image src={Img} fill={true} sizes="(width:auto)" alt="Course image"/></div>
                    <div className='flex flex-col'> 
                        {paragraphContent.map(element=>{
                            return(
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
                            <h3 className='flex items-center text-xl h-[60px] py-[15px] px-auto text-[#007bff] font-medium border-b-[0.5px] border-b-[#857f7f1a] '>Course Highlights</h3>
                            <h2 className='text-2xl font-bold p-2.5 border-b-[0.5px] border-b-[#857f7f1a] '>{value.fee}/per month</h2>
                            <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><LiaCertificateSolid /></i>
                                    <h4 className='p-2.5 text-base font-medium '>Admission</h4></div>
                                <p>Open</p></div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><FaWpforms /></i>
                                    <h4  className='p-2.5 text-base font-medium '>register Before</h4></div>
                                <p> dd/mm/yy</p></div>
                                <div className='flex flex-row h-[55px] justify-between  border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><BsLaptop /></i>
                                    <h4 className='p-2.5 text-base font-medium '>Classes Start On</h4></div>
                                <p>dd/mm/yy</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><BsStopwatch /></i>
                                    <h4 className='p-2.5 text-base font-medium '>Duration</h4></div>
                                <p>4 months</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                   <i className='text-[#005eff]'><BsFiles /></i>
                                    <h4  className='p-2.5 text-base font-medium '>Lecturing Mode</h4></div>
                                <p>Online</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><BsFiles /></i>
                                    <h4  className='p-2.5 text-base font-medium '>Lectures</h4></div>
                                <p>4 /weak</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                   <i className='text-[#005eff]'><LiaGraduationCapSolid /></i>
                                    <h4  className='p-2.5 text-base font-medium '>Course Availability</h4></div>
                                <p>All year</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><BsBarChartLine /></i>
                                    <h4  className='p-2.5 text-base font-medium '>Course Level</h4></div>
                                <p>Intermidate</p> </div>
                                <div className='flex flex-row h-[55px] justify-between border-b-[0.5px] border-b-[#857f7f1a] items-center '>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <i className='text-[#005eff]'><BsPeople /></i>
                                    <h4  className='p-2.5 text-base font-medium '>Available Seats</h4></div>
                                <p>30</p> </div>
                            <div className='w-[90%] text-white my-5'>
                                <Link href="#">
                                    <span className='w-full flex justify-center items-center h-10 font-medium rounded cursor-pointer bg-[#007bff] '>Enroll Now</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-2xl w-[90%] m-auto py-5 px-[30px] rounded'  style={{marginTop:"60px"}} >
                        <div className='flex flex-col'>
                            <h3 style={{color:"black", border:"none"}}>Important Note:</h3>
                            <p className='px-1 py-2.5'>In case of form submission error or any guidance. Contact us through email or WhatsApp. Our usual reply time is 24 hours.</p>
                            <div>
                                <div className='flex flex-row gap-2.5 h-[55px] my-4'>
                                    <i className='text-[#005eff] '><BsEnvelope size={20} /></i>
                                    <div style={{ lineHeight: "5px" }}>
                                        <h4  className=' text-base font-medium '>Email us directly</h4>
                                        <p className='px-1 py-2.5'>howfiv@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        <div>
                            <div className='flex flex-row gap-2.5 h-[55px] my-4'>
                              <i className='text-[#005eff]  '><BsWhatsapp size={20} /></i>  
                                <div style={{ lineHeight:"5px" }}>
                                    <h4  className=' text-base font-medium '>WhatsApp Contact</h4>
                                    <p className='px-1 py-2.5'>+(92) 332 6105842</p>
                                    <p className='px-1 py-2.5'>+(92) 300 644226</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row gap-2.5 h-[70 px] my-4'>
                               <i className='text-[#005eff]'><TfiWorld size={20} /></i> 
                                <div className="flex flex-col">
                                    <h4  className=' text-base font-medium '>Howfiv Projects</h4>
                                    <p><Link href="www.howfiv.com">www.howfiv.com</Link></p>
                                    <p><Link href="www.cssprepforum.com">www.cssprepforum.com</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-[1100px] w-[80%] m-auto pb-10'>
            <h2 className="text-[40px] font-medium">
                More Courses for You</h2>
            <div className='flex flex-row justify-center flex-wrap gap-2.5 my-5'>
                <Card element={courses[0]} link={"/courses/"}/>
                <Card element={courses[0]} link={"/courses/"}/>
                <Card element={courses[0]} link={"/courses/"}/>
                </div>
        </div>
        </div>

    )
}   

export default page