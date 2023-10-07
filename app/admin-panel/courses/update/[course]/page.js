'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { SiBookstack } from 'react-icons/si'
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
    console.log(dataForUpdate)
    return (
        <div style={{ width: "100%", maxWidth: "1100px", margin: "auto" }}>
            <h1 className="w-full my-10 text-lg font-bold flex items-center gap-2"><SiBookstack size={30} />Update Course</h1>
            <div className='rounded m-5  w-full'>
                <form className="flex flex-col gap-2 m-2  flex-wrap">
                    <div className='flex w-full items-center gap-5 flex-wrap '>
                        <div className='flex flex-col w-5/12'>
                            <label htmlFor="course-name">Course Name:<span className='text-danger'>*</span> </label>
                            <input  type="text" id="course-name" placeholder="Enter Course Name" className="my-2 p-2 px-4 rounded   border"  defaultValue={dataForUpdate.title}/></div>
                        <div className='flex flex-col w-5/12'>
                            <label htmlFor="course-slug">Course Slug: </label>
                            <input defaultValue={dataForUpdate.title} type="text" id="course-slug" placeholder="Enter Course Slug" className="my-2 p-2 rounded px-4   border" /></div>
                    </div>
                    <label htmlFor="course-abstract">Course Abstract:<span className='text-danger'>*</span></label>
                    <textarea type="text" id="course-abstract" placeholder="Enter Course Abstract" className="my-2 p-2 px-4 rounded w-10/12  border" rows={5}/>

                    <label htmlFor="course-description">Course Description:<span className='text-danger'>*</span> </label>
                    <textarea type="text" id="course-description" placeholder="Enter Course Description" className="my-2 p-2 px-4 rounded  w-10/12 border" rows={5} defaultValue={dataForUpdate.description} />
                    <label htmlFor="course-syllabus">Course Syllabus:</label>
                    <textarea type="text" id="course-syllabus" placeholder="Enter Course Syllabus" className="my-2 p-2 px-4  w-10/12 border" rows={5} />

                    <label htmlFor="course-learn">What will you learn?: </label>
                    <textarea type="text" id="course-learn" placeholder="Enter Course Learning" className="my-2 p-2 px-4  w-10/12 border" rows={5} />
                    <label htmlFor="course-teachers">Course Teacher(s): </label>
                    <textarea id="course-teachers" placeholder='Enter Teacher Name' className="my-2 p-2 px-4  w-10/12 border" />
                    <div className='flex   w-full  items-center gap-5 flex-wrap'>
                        <div className='flex flex-col '>
                            <label htmlFor='course-fee'>Fee per Month:<span className='text-danger'>*</span></label>
                            <input defaultValue={dataForUpdate.fee} type="number" id="course-fee" className="my-2 py-2 px-4 rounded  border" />

                        </div>
                        <div className='flex flex-col  '>
                            <label htmlFor='admission' >Admission:<span className='text-danger'>*</span></label>
                            <select id='admission' className="my-2 py-2 px-4 rounded  border" defaultValue={dataForUpdate.admission} >
                                <option>--Select--</option>
                                <option>Open</option>
                                <option>Close</option>
                            </select>

                        </div>
                    </div>
                    <div className='flex   w-full  items-center gap-5 flex-wrap'>
                    <div
                            className="relative mb-3"
                            data-te-datepicker-init
                            data-te-input-wrapper-init
                        >
                            <input defaultValue={dataForUpdate.admissionDate}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date" id="admission-date"
                            />
                            <label
                                htmlFor="floatingInput"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >
                                Admission date
                            </label>
                        </div>
                        <div
                            className="relative mb-3"
                            data-te-datepicker-init
                            data-te-input-wrapper-init
                        >
                            <input defaultValue={dataForUpdate.openingDate}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date" id="starting-date"
                            />
                            <label
                                htmlFor="floatingInput2"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >
                                Course Starting date
                            </label>
                        </div>
                        <div
                            className="relative mb-3"
                            data-te-datepicker-init
                            data-te-input-wrapper-init
                        >
                            <input defaultValue={dataForUpdate.clossingDate}
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                placeholder="Select a date" id="course-ending-date"
                            />
                            <label
                                htmlFor="floatingInput3"
                                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
                                Course Ending date
                            </label>
                        </div>
                    </div>
                    <div className='flex   w-full  items-center gap-5 flex-wrap'>
                        <div className='flex flex-col col-10 col-md-10 col-lg-5'>
                            <label htmlFor='lecturing-modality'>Lecturing Modality:<span className='text-danger'>*</span></label>
                            <select id='lecturing-modality' className="my-2 py-2 px-4  rounded border  w-full" defaultValue={dataForUpdate.modality}  >
                                <option>--Select--</option>
                                <option>Online</option>
                                <option>Physical</option>
                            </select>
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor='lectures'>Lectures:<span className='text-danger'>*</span></label>
                            <input defaultValue={dataForUpdate.lectures} type='number' id='lectures' placeholder="Enter No. of Lectures" className="my-2 py-2 px-4 rounded  border" />
                        </div>
                    </div>
                    <div className='flex w-full  items-center gap-5 flex-wrap'>
                        <div className='flex flex-col '>

                            <label htmlFor='course-level'>Course Level:</label>
                            <select id='course-level' className="my-2 py-2 px-4   border rounded w-full" defaultValue={dataForUpdate.courseLevel} >
                                <option>--Select--</option>
                                <option>Basic</option>
                                <option>Intermediate</option>
                                <option>Competitive</option>
                                <option>Advance</option>
                                <option>Professional</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='available-seats'>Available Seats:</label>
                            <input defaultValue={dataForUpdate.seats} type='number' id='available-seats' placeholder='Enter Total Seats' className="my-2 py-2 px-4 rounded  border" />
                        </div>
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