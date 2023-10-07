'use client'
import { useState, useEffect } from "react";
import { FiSave } from 'react-icons/fi'
import { MdDeletehtmlForever, MdBrowserUpdated, MdEvent } from 'react-icons/md'
import { FaListUl } from 'react-icons/fa'
import Link from 'next/link';

const Eventpage = () => {
  const [registrationDate, setRegistrationDate] = useState(new Date());
  const [orientationDate, setOrientationDate] = useState(new Date());
  const [start, onChange] = useState('10:00');
  const [end, onChange2] = useState('10:00');
  useEffect(() => {
    const init = async () => {
      const { Datepicker, Timepicker, Input, initTE } = await import("tw-elements");
      initTE({ Datepicker, Timepicker, Input });
    };
    init();
  }, []);


  return (
    <div className="w-full max-w-[1100px] m-auto">
      <div className='mx-5 mt-10 flex items-center '>
        <MdEvent size={50} />
        <h2 className='mx-3 text-lg font-bold'>Add Event</h2>
      </div>
      <div className=' rounded m-5 flex items-center w-full'>
        <form className="flex flex-col w-[90%] gap-2 m-6" >
          <div className="flex flex-row flex-wrap w-full justify-between">
            <div className='flex flex-col w-[48%]'>
              <label htmlFor="course-name">Event Name:<span className='text-danger'>*</span> </label>
              <input type="text" id="course-name" placeholder="Enter Event Name" className="my-2 p-2 border rounded" />
            </div>
            <div className='flex flex-col w-[48%] '>
              <label htmlFor="course-slug">Event Slug: </label>
              <input type="text" id="course-slug" placeholder="Enter Event Slug" className="my-2 p-2 border rounded" />
            </div>
          </div>
          <label htmlFor="course-abstract">Event Abstract:<span className='text-danger'>*</span></label>
          <textarea type="text" id="course-abstract" placeholder="Enter Event Abstract" className="my-2 p-2 px-4 border rounded" rows={5} />
          <label htmlFor="course-description">Event Description:<span className='text-danger'>*</span> </label>
          <textarea type="text" id="course-description" placeholder="Enter Event Description" className="my-2 p-2 px-4 border rounded" rows={5} />
          <label htmlFor="course-syllabus">Event Syllabus:</label>
          <textarea type="text" id="course-syllabus" placeholder="Enter Event Syllabus" className="my-2 p-2 px-4 border rounded" rows={5} />
          <label htmlFor="course-learn">What will you learn?: </label>
          <textarea type="text" id="course-learn" placeholder="Enter Event Learning" className="my-2 p-2 px-4 border rounded" rows={5} />
          <div className='flex flex-row w-full items-center gap-5 flex-wrap'>
            <div className='flex flex-col'>
              <label htmlFor='course-fee'>Fee per Month:<span className='text-danger'>*</span></label>
              <input type="number" id="course-fee" className="my-2 p-2 px-4 border rounded" />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="course-name">Location:<span className='text-danger'>*</span> </label>
              <input type="text" id="course-name" placeholder="Enter Location" className="my-2 p-2 px-4 border rounded" />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='lectures'>Duration:<span className='text-danger'>*</span></label>
              <input type='number' id='lectures' placeholder="Enter duration" className="my-2 p-2 px-4  border rounded" />
            </div>
          </div>
          <div className='flex w-full items-center gap-5 flex-wrap'>
            <div
              className="relative mb-3"
              data-te-datepicker-init
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border rounded-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Select a date" id="registration-date"
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Registration date
              </label>
            </div>
            <div
              className="relative mb-3"
              data-te-datepicker-init
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border rounded-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Select a date" id="orientation-date"
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Orientation date
              </label>
            </div>
          </div>
          <div className='flex flex-row w-full items-center gap-5 flex-wrap '>


            <div
              className="relative"
              id="timepicker-inline-12"
              data-te-timepicker-init
              data-te-input-wrapper-init
            >
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border rounded-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="htmlForm2" />
              <label
                htmlFor="htmlForm2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Starting Time:</label>
            </div>
            <div
              className="relative"
              id="timepicker-inline-12"
              data-te-timepicker-init
              data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border rounded-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="htmlForm2" />
              <label
                htmlFor="htmlForm2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Ending Time:</label>
            </div>
          </div>
          <div className='flex w-full items-center gap-5 flex-wrap'>

          </div>
          <div className='my-5'>
            <button className='  bg-blue-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Save"> Save </button>
            {/* <button className='  bg-red-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">Delete</button> */}
            {/* <button className='  bg-purple-600 mx-1 px-3 py-2 rounded text-white' data-bs-toggle="tooltip" data-bs-placement="top" title="Update"> Update</button> */}
            <Link href={"/"}><button className='  bg-yellow-500 mx-1 px-3 py-2 text-white rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Close">Close</button></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Eventpage