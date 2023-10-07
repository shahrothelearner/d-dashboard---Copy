import React from 'react'
import Card from '@/components/pages/Card'
import courses from '../courses/coursesArr'


const page = () => {
  return (
  <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
    <div className='w-[80%] m-auto'>
      <h1 className='font-Proxima-cond text-[70px] py-[30px] font-bold text-center'>All Events</h1>
      <p className='mt-2.5 mx-auto mb-[60px] font-medium text-[1.1rem] text-[#726e6e]'>Whether you preparing for CSS or PMS, or One Paper Commission examination, coaches at Howfiv and CPF have designed various courses that suit your needs and help you prepare and qualify for the exams.</p>
      
      <div className='flex flex-row flex-wrap gap-4'>
        {courses.map(element=>{
          return(
            <div key={element.id}><Card  element={element} link={"/events/"}/></div>
          )})}
      </div>
      </div>
  </div>
  )
}

export default page